//////////////////////////////////////////////////////////////////////////////
//
// session.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** ITEM SESSIONS
*/

// Called from interactions after candidate provides a response.
function postResponseVariable(htmlInteraction, value, variable) {
  let decl = getResponseVariable(htmlInteraction, variable);
  let item = decl.elem.parentElement;
  let htmlItem = getHTMLItemById(item.id);
  let qtiInteraction = QTI.DOM.getElementById(htmlInteraction.id);
  
  if (value !== undefined)
    decl.value = value;
  setCompletionStatus(decl.elem, "unknown", "not_attempted");
  htmlItem.classList.add(SUBMITTABLE);
  htmlItem.classList.remove(SUBMITTED);
  logVarChange("setResponseVariable", decl);
  setCurrent(htmlItem, false);  

  if (qtiInteraction && qtiInteraction.tagName==="endAttemptInteraction") {
    if (value==true)
      endAttempt(item, htmlInteraction);
  }
}

// Ends attempt on current item.
function endAttempt(item, htmlInteraction) {
  let responseVar = htmlInteraction.getAttribute(RESPONSE_ID);
  [...item.querySelectorAll("endAttemptInteraction")].forEach(ea=>{
    let rv = ea.getAttribute("responseIdentifier");
    if (rv != responseVar) 
      item.declarations[rv].value = false;
  });
  htmlInteraction.classList.add(CLICKED);
  control({currentTarget:htmlInteraction}, +1);
}
  
// Session control: move a specified number of steps in the
// sequence from the current item.  negative number of steps
// means move backward.
function control(evt, k=+1) {
  DEBUG("control", evt);
  let target = evt.currentTarget;
  let current = document.querySelector(CURRENT_FRAME_SEL);
  let scrollTo = true;
  
  if (target && target!=window) {
    target = getHTMLAssessmentItem(target);
    if (target) {
      current = target;
      scrollTo = false;
    }
  }

  let frame = (current && current.id)
      ? QTI.DOM.getElementById(current.id): null;

  if (frame && frame.tagName=="testFeedback") {
    setCurrent(getNextItem(frame, k), k==1, false);
  } else if (frame && frame.tagName=="assessmentItem") {
    controlItem(current, frame, k, scrollTo);
  } else {
    WARN("control: invalid current frame", frame);
  }
  if (evt.stopPropagation)
    evt.stopPropagation();
}

// Implements "control" when "current" is an assessmentItem
// (as opposed to a testFeedback.)
function controlItem(current, item, k, scrollTo) {
  let forward = (k===1);
  let isSkip = getResponses(item).length==0;
  let testPart = getQTITestPart(item);
  let navigationMode = "nonlinear";
  let submissionMode = "individual";

  if (testPart) {
    navigationMode = testPart.getAttribute("navigationMode");
    submissionMode = testPart.getAttribute("submissionMode");
  }

  // "dirty" flag means that response/outcome processing changed
  // the visibility of feedbacks or templates, the
  // values of printed variables or math variables, etc,
  // When the current item is dirty, We can't make another item
  // current, before letting the user see the new presentation
  // state of the current item.
  let dirty = false;
  
  DEBUG("item=",identifier(item), "k=", k,
              "forward=",forward, "isSkip=", isSkip);

  message(item, MSG_NONE);
  
  if (forward) {
    if (isSkip) {
      if (navigationMode=="linear" && !allowSkipping(item)) {
        message(item, MSG_NO_SKIP);
        k=0;
      }
    } else if (submissionMode=="individual") {
      // individual submission: do responseProcessing on the
      // item and outcomeProcessing at test level.
      responseProcessing(item);

      let htmlItem = getHTMLItemById(item.id);
      let vi = visibleInteractionsWithNoResponse(htmlItem);
      let attemptable = isAttemptable(item);
      let errors = [];

      dirty = getDirty(item);
      if (validateResponses(item)) 
        errors = validateAssessmentItem(item);      
      if (!attemptable && vi.length==0) {
        current.classList.add(NOT_ATTEMPTABLE);
        if (!allowReview(item)) {
          current.classList.add(NO_REVIEW);
          scrollTo = false;
        }
      }
      
      // If there are no errors and no visible
      // interactions which have no response, then
      // submit the item and style it as "submitted".
      if (errors.length==0 && vi.length==0 && !dirty) {
        submit(item);
        current.classList.add(SUBMITTED);
        current.classList.remove(SUBMITTABLE);
      } else {
        current.classList.remove(SUBMITTED);
        current.classList.remove(SUBMITTABLE);
        if (dirty && attemptable) 
          current.classList.add(SUBMITTABLE);
        if (errors.length)
          message(item, errors[0].id);          
        // stay on this item.
        k=0;
      }
    } else if (submissionMode=="simultaneous") {
      // item will be submitted with all others in the same
      // testPart. "By definition", according to spec, when
      // submissionMode is simultaneous, only one attempt on an item
      // is possible, and whether the candidate can review
      // simultaneous-mode items and see item-level feedback is
      // outside the scope of the spec.
      DEBUG("simultaneous mode, deferring submission: ",
           identifier(item));
    }      
  }

  if (!dirty)
    setCurrent(getNextItem(current,k), forward, scrollTo);
  setDirtyAll(false);
}

// Makes an item "current".  What it means to be the "current" item
// depends on the navigationMode and the stylesheet.
//
// In a linear testPart, the candidate may interact only with the
// "current" item, and must either make an attempt (submit a response)
// or "skip" the current item in order to make a different item 
// current.  Stylesheets for linear navigationMode almost always use a
// "slideshow" style (though it is not strictly required), which shows
// one item at a time. Many non-linear themes are slideshows as well,
// similar to linear but with an added "previous" button, which lets the
// candidate move backwards and forwards in the item sequence.
// The spec explicity states that this style is acceptable for
// non-linear.  In a slideshow style, whether for linear or
// non-linear, "current" is the one item which is on-screen.
//
// But, non-linear testParts may use a style which presents all items
// in a testPart to the candidate simultaneously, and the candidate
// can interact with any of them, possibly over multiple submissions,
// and submit them in any order.  In that style, which item is
// "current" may not be very important and the candidate may not even
// be aware that some particular item is "current".
//
// Because QTI.JS does not know what the stylesheets are doing, it
// maintains "current" in all circumstances.

function setCurrent(nextCurrent, forward=true, scrollTo=true) {
  if (nextCurrent)
    Promise.all(QTI.PROMISES).then(setCurrentInternal);
  return;

  function setCurrentInternal(values) {
    let nextCurrentQTI = QTI.DOM.getElementById(nextCurrent.id);
    let current = document.querySelector(CURRENT_FRAME_SEL);

    if (!(nextCurrentQTI.tagName == "assessmentItem"
          || nextCurrentQTI.tagName == "testFeedback")) {
      DEBUG("setCurrent: invalid frame", nextCurrentQTI.tagName);
      return;
    }
    if (nextCurrentQTI && nextCurrentQTI.declarations)
      setDirty(nextCurrentQTI, false);

    if (nextCurrent && nextCurrent!=current) {
      if (current) {
        if (forward)
          current.classList.add(OFFSTAGE);
        current.classList.remove(CURRENT);
      }
      nextCurrent.classList.add(CURRENT);
      nextCurrent.classList.remove(OFFSTAGE);
      if (nextCurrentQTI.tagName == "assessmentItem") {
        if (scrollTo) {
          let computedStyle = window.getComputedStyle(nextCurrent);
          let scrollTo = computedStyle.getPropertyValue(SCROLL_TO);
          if (scrollTo.trim()!=="false"){
            nextCurrent.scrollIntoView();
            window.scrollBy(0, SCROLL_ADJUST);
          }
        }
      } else if (nextCurrentQTI.tagName == "testFeedback") {
        endTestPart();
      }      
    }
    setContainerAttributes();
    QTI.PROMISES = [];
  }
}

// Performs end-of-testPart actions.
function endTestPart() {
  let sel = `${TESTPART_SEL}${LINEAR_SEL}.${CURRENT}`;
  [...document.querySelectorAll(sel)].forEach(testPart=>{
    let qtiTestPart = QTI.DOM.getElementById(testPart.id);
    let submissionMode = qtiTestPart.getAttribute("submissionMode");
    testPart.classList.add(REVIEW_MODE);
    if (submissionMode==="simultaneous") {
      qtiTestPart.querySelectorAll("assessmentItem").forEach(item=>{
        responseProcessing(item);
        let htmlItem = document.getElementById(item.id);
        htmlItem.classList.add(SUBMITTED);
        htmlItem.classList.remove(SUBMITTABLE);
      });
      submit(testPart);
    }
  })
}

// Finds the first "nav" element which is a child of the HTML DOM
// element and sets its MESSAGE attribute. Depending on the theme, this
// will result in text being displayed to the candidate or some other UI
// change.
function message(elem, messageIdentifier) {
  let htmlElem = document.getElementById(elem.id);
  if (htmlElem) {
    let nav = htmlElem.querySelector("nav");
    if (messageIdentifier==MSG_NONE) {
      nav.removeAttribute(MESSAGE);
    } else {
      nav.setAttribute(MESSAGE, messageIdentifier);
    }
  }
}

// Gets itemSessionControl data for the element, rolling up
// to the root (i.e. to assessmentTest) to fill in attributes.
function getItemSessionControl(elem) {
  let data = {};
  while(elem) {
    let sel = `#${elem.id} > itemSessionControl`;
    mergeAttributes(data, elem.querySelector(sel));
    elem = elem.parentElement;
  }
  return data;
}

// Returns allowReview session control setting for item. (default=true)
function allowReview(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowReview!=="false";
}

// Returns allowSkipping session control setting for item. (default=true)
function allowSkipping(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowSkipping!=="false";
}

// Returns allowComment session control setting for item. (default=false)
function allowComment(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowComment==="true";
}

// Feedback should be shown as long as an item is still
// attemptable, or it is both reviewable and adaptive,
// or the itemSessionControl setting for showFeedback is true.
function showFeedback(item) {
  let sessionControl = getItemSessionControl(item);
  return isAttemptable(item)
    || (allowReview(item) && isAdaptive(item))
    || sessionControl.showFeedback==="true";
}

// Returns showSolution session control setting for item. (default=false)
function showSolution(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.showSolution==="true";
}

// Returns validateResponses session control setting for item.  (default=false)
function validateResponses(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.validateResponses==="true";
}

// Returns true if an item is still "attemptable"; that
// is, completionStatus is not "completed" and if a non-adapative item,
// either maxAttempts is zero, or numAttempts is less than maxAttempts.
function isAttemptable(item) {
  let sessionControl = getItemSessionControl(item);
  let completed = item.declarations["completionStatus"].value=="completed";
  let numAttempts = +item.declarations["numAttempts"].value;
  let maxAttempts = +sessionControl.maxAttempts;
  let adaptive = isAdaptive(item);

  // defaults to 1 for non-adaptive and ignored for adaptive items.
  if (!maxAttempts && maxAttempts!==0)
    maxAttempts = 1;
  return !completed
    && (adaptive || maxAttempts==0 || numAttempts<maxAttempts);
}

// Returns true if an item has children which can be shown/hidden
// via the showHide mechanism.
function hasTriggerables(item) {
  return item.querySelectorAll(SHOWHIDE_SEL).length;
}

// Returns array of interactions which
// (1) are children of the element
// (1) are visible (interaction parentOffset!=null)
// (2) have a response variable with a value
function visibleInteractionsWithNoResponse(elem) {
  return [...elem.querySelectorAll(INTERACTION_SEL)].filter(interaction=>{
    let rv = getResponseVariable(interaction);
    if (interaction.offsetParent==null) //not visible 
      return false;
    return rv && rv.value==null; // no response
  });
}

// Returns true if specified item is in specified section.
function inSection(item, section) {
  return section.querySelector(`#${item.id}`);
}

// Preps the item which is +1 or -1 in document sequence
// from the specified item and returns it.
function getNextItem(htmlItem, step=0) {
  let item = null;

  if (!QTI.SEQUENCE) 
    QTI.SEQUENCE = generateSequence();
  if (htmlItem) {
    item = QTI.SEQUENCE.find(entry=>entry.elem.id==htmlItem.id);
  } else {
    item = QTI.SEQUENCE[0];
    step = 0;
  }

  item = step>=0
    ? getNextItemInSequence(item, step)
    : getPrevItemInSequence(item, step);

  if (item) {
    htmlItem = document.getElementById(item.elem.id);
    item.presented = true;
    if (item.elem.tagName=="assessmentItem"
        && !item.elem.templateProcessed) {
      let testPart = getQTITestPart(item.elem);
      let linear = testPart.getAttribute("navigationMode")==="linear";
      if (linear) {
        templateProcessing(item.elem);
        let interactions = htmlItem.querySelectorAll(INTERACTION_SEL);
        interactions.forEach(i=>i.init? i.init(): null);
      }
    }
  }
  return htmlItem;

  // Returns previous presented item from SEQUENCE.
  function getPrevItemInSequence(item, step) {
    let presented = QTI.SEQUENCE.filter(entry=>entry.presented);
    let idx = Math.max(0, presented.findIndex(entry=>entry==item)+step)
    return presented[idx];
  }

  // Returns next item in sequence, taking branchRules
  // and preConditions into consideration.
  function getNextItemInSequence(item, step) {
    if (!item)
      return QTI.SEQUENCE[0];

    let nextItem = applyBranchRules(item)
        || QTI.SEQUENCE[item.seq+step];

    DEBUG("getNextItemInSequence", step, item, nextItem);    

    if (!nextItem) {
      return item;
    } if (nextItem.type=="end") {
      return getNextItemInSequence(nextItem, 1);
    } else if (!checkPreconditions(nextItem)) {
      let seq = nextItem.end? nextItem.end.seq: nextItem.seq;
      return getNextItemInSequence(QTI.SEQUENCE[seq], 1);
    } else if (nextItem.type=="begin"){
      return getNextItemInSequence(nextItem, 1);
    } else {
      return nextItem;
    }

    // Returns true if the item satisfies its
    // preconditions.  preConditions are supposed
    // to be applied only in non-linear testParts, which
    // is not checked.
    function checkPreconditions(item) {
      let result = [...item.elem.children]
          .filter(ch=>ch.tagName=="preCondition")
          .every(pc=>exec(pc));
      return result;
    }

    // Returns the branchRule target, if there
    // *is* a branchRule. It is not checked whether the item
    // is in a linear testPart.
    function applyBranchRules(item) {
      if (item && item.type!=="begin") {
        let rules = [...item.elem.children]
            .filter(ch=>ch.tagName=="branchRule");
        for(let r=0; r<rules.length; r++) {
          let applies = exec(rules[r]);
          DEBUG("applyBranchRules", rules[r], applies);
          if (applies)
            return getBranchRuleTarget(rules[r]);
        }
      }
      return null;
    }

    // Finds branchRule target.  The spec states that
    // in the case of a section or item, the target must
    // be to an item in the same testPart which has not
    // been presented, and for a testPart the target must
    // be to another testPart.  These constraints are not
    // enforced.
    function getBranchRuleTarget(rule) {
      let target = rule.getAttribute("target");
      return target
        ? QTI.SEQUENCE.find(entry=>identifier(entry.elem)===target)
        : null;
    }
  }
  
  // Generates the sequence of items to be presented.
  function generateSequence() {
    let sequence = [];
    let itemCount = 0;

    function descend(elem) {
      [...elem.children].forEach(child=>{
        switch(child.tagName) {
        case "testPart":
        case "assessmentSection":
          let begin = {
            type: "begin",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          };
          sequence.push(begin);
          descend(child);
          let end = {
            type: "end",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          };
          begin.end = end;
          end.begin = begin;
          begin.count = end.count = end.seq-begin.seq-1;
          if (begin.count==0)
            sequence.pop();
          else
            sequence.push(end);
          break;
        case "assessmentItem":
          let slide = {
            type: "item",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          }
          child.seq = ++itemCount;
          sequence.push(slide);
          break;
        case "testFeedback":
          if (child.getAttribute("access")=="atEnd") {
            let slide = {
              type: "item",
              elem:child,
              seq:sequence.length,
              identifier: identifier(elem),
            }
            sequence.push(slide);
          }
          break;
        }
      });
    }
    descend(QTI.ROOT);
    return sequence;
  }
}

// Display SEQUENCE on console (for debugging)
function dumpSequence(sequence=QTI.SEQUENCE) {
  let seq=0;
  [...sequence].forEach(entry=>console.log(seq++, entry));
}
                       
// Determines the first "current" item and initializes it.
function initializeCurrentItem() {
  if (!QTI.CURRENT_ITEM_INITIALIZED) {
    setCurrent(getNextItem(), false);
    QTI.CURRENT_ITEM_INITIALIZED = true;
  }
} 

// Sets attributes such as offstage, noreview, current of a
// container based on the children.   For example, a section
// is "current" if it contains the "current" item; a section
// is "offstage" if all its child elements are offstage; etc.
function setContainerAttributes(elem=QTI.ROOT, depth=0) {
  let offstage = true, noreview = true, current = false;
  let htmlElem = document.getElementById(elem.id);

  if (elem.tagName==="assessmentItem") {
    current = htmlElem.classList.contains(CURRENT);
    offstage = htmlElem.classList.contains(OFFSTAGE);
    noreview = htmlElem.classList.contains(NO_REVIEW);
  } else {
    [...elem.children].forEach(child=>{
      switch(child.tagName) {
      case "assessmentItem":
      case "testPart":
      case "assessmentSection":
        let [ch_offstage, ch_noreview, ch_current]
          = setContainerAttributes(child, depth+1);
        offstage &= ch_offstage;
        noreview &= ch_noreview;
        current  |= ch_current;
        break;
      }
    });
  }
  if (htmlElem) {
    if (noreview && !htmlElem.classList.contains(NO_REVIEW))
      htmlElem.classList.add(NO_REVIEW);
    else if (!noreview && htmlElem.classList.contains(NO_REVIEW))
      htmlElem.classList.remove(NO_REVIEW);    
    if (offstage && !htmlElem.classList.contains(OFFSTAGE))
      htmlElem.classList.add(OFFSTAGE);
    else if (!offstage && htmlElem.classList.contains(OFFSTAGE))
      htmlElem.classList.remove(OFFSTAGE);    
    if (current && !htmlElem.classList.contains(CURRENT))
      htmlElem.classList.add(CURRENT);
    else if (!current && htmlElem.classList.contains(CURRENT))
      htmlElem.classList.remove(CURRENT);
  }
  return [offstage, noreview, current];
}

