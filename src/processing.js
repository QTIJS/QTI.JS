//////////////////////////////////////////////////////////////////////////////
//
// processing.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** PROCESSING
*/

// Executes Response Processing.
function responseProcessing(item) {
  item.declarations.numAttempts.value++;
  if (!isAdaptive(item))
    resetOutcomeVariables(item);

  let rpblocks = [...item.getElementsByTagName("responseProcessing")];
  let completion = (elem, processing)=>{
    processingComplete(elem, processing);
    outcomeProcessing()
  };

  if (rpblocks.length) {
    rpblocks.forEach(rp=>{
      INFO("responseProcessing", identifier(item), clock()+"msecs");
      execProcessing(rp,completion);
    });
  } else {
    completion(item);
  }
  return true;
}

// Returns true if an item is adaptive.
function isAdaptive(item) {
  return item.getAttribute("adaptive")==="true";
}

// Initializes outcome variables
function resetOutcomeVariables(elem) {
  Object.getOwnPropertyNames(elem.declarations).forEach(id=>{
    if (elem.declarations[id].elem.tagName=="outcomeDeclaration")
      elem.declarations[id].value=null;
  });
}
                                
// Executes Outcome Processing 
function outcomeProcessing(test=QTI.ROOT) {
  DEBUG("outcomeProcessing", identifier(test), clock()+"msecs");
  [...test.getElementsByTagName("outcomeProcessing")].forEach(op=>{
    execProcessing(op, processingComplete);
  });
  return true;
}

// Executes templateDefault and templateProcessing for a
// single assessmentItem, or for all assessmentItems in a testPart.
//
// The spec states that templateDefaults and templateProcessing are
// invoked (1) for items in linear testParts after response
// processing, outcome processing (and presumably any branchRules) are
// done on the preceding items, and after preConditions on the current
// item, but before the first attempt of the candidate on the item;
// and (2) for non-linear testParts, on all items in the part at the
// "start" of the part, presumably in selection/ordering order. Obviously,
// templateDefaults are applied before templateProcessing is executed.
function templateProcessing(elem) {
  DEBUG("templateProcessing", identifier(elem), clock()+"msecs");

  switch (elem.tagName) {
  case "assessmentItem":
    // Run templateDefaults/templateProcessing for the
    [...elem.getElementsByTagName("templateDefault")].forEach(tmplDefault=>{
      exec(tmplDefault);
    });

    let tpblocks = [...elem.getElementsByTagName("templateProcessing")];
    if (tpblocks.length)
      tpblocks.forEach(tp=>execProcessing(tp, processingComplete));
    else
      processingComplete(elem);
    break;
    
  case "testPart":
    // Run templateDefaults/templateProcessing for all items
    // in the testPart
    [...elem.getElementsByTagName("assessmentItem")]
      .forEach(item=>templateProcessing(item));
    break;
  }
  elem.templateProcessed = true;
}

// Executes Response/Template/Outcome Processing, asynchronously
// loading the XML from a template if not previously done.  Note that
// a "template" attribute on templateProcessing is, for some reason,
// not valid QTI syntax.
function execProcessing(processing, completed) {
  let elem = processing.parentElement;

  DEBUG("start", processing.tagName,
            identifier(elem), elem.declarations["completionStatus"]);

  if (processing.children && processing.children.length) {
    exec(processing);
    completed(elem, processing);
  } else {
    let template = processing.getAttribute("template");
    if (template) {
      loadXml(template, elem, (dom)=>{
        dom = dom.children[0];
        elem.replaceChild(dom, processing);
        exec(dom);
        completed(elem, processing);
      });
    } else {
      completed(elem, processing);
    }
  }
  DEBUG("end", processing.tagName);
}

// Completion routine for processing.
function processingComplete(elem, processing) {
  triggerShowHide(elem);
  updatePrintedVariables(elem);
  updateMathMLVariables(elem);
  pivotTables(document)
}

// Untrigger ModalFeedback blocks
function untriggerModalFeedback() {
  [...document.querySelectorAll(MODAL_SEL)]
    .forEach(modal=>modal.classList.remove(TRIGGERED));
}

// Trigger showHide elements (Feedbacks, templates, and interaction
// components like choices, gaps, gap fills, etc.)
function triggerShowHide(item) {
  let htmlItem = getHTMLItemById(item.id);

  [...htmlItem.querySelectorAll(SHOWHIDE_SEL)].forEach(elem=>{
    let variable = elem.getAttribute(OUTCOME_ID)
        || elem.getAttribute(TEMPLATE_ID);
    let id = elem.getAttribute(ID);
    let decl = item.declarations[variable];

    if (decl) {
      let value = decl.value;
      let triggered = elem.classList.contains(TRIGGERED);
      if (!value || (Array.isArray(value) && value.length==0))
        value = getDefaultValue(decl);
      if (matchesOrMember(id, value)) {
        if (!triggered)
          setDirty(item);
        elem.classList.add(TRIGGERED)
      } else if (triggered) {
        setDirty(item);
        elem.classList.remove(TRIGGERED);
      }
    }
  });
}

// Updates printed variables with latest variable values.
function updatePrintedVariables(item) {
  let printedVars;
  if (item.tagName=="assessmentItem") {
    let htmlItem = getHTMLItemById(item.id);
    printedVars = [...htmlItem.querySelectorAll(PRINTEDVAR_SEL)];
  } else if (item.tagName=="assessmentTest") {
    let sel = `${TEST_FDBK_SEL} ${PRINTEDVAR_SEL}`
    printedVars = [...document.querySelectorAll(sel)];
  }
  if (printedVars) {
    printedVars.forEach(pv=>{
      let variable = pv.getAttribute(ID);
      let decl = item.declarations[variable];
      if (decl) {
        let value = coerce(decl, decl.value, getDefaultValue(decl));
        if (decl.cardinality==="multiple")
          value = value.join(pv.getAttribute(DELIMITER));
        let prefix = pv.getAttribute(PREFIX_ATTRIB)||"";
        let suffix = pv.getAttribute(SUFFIX)||"";
        let prevInnerHTML = pv.innerHTML;
        pv.innerHTML = prefix+value+suffix;
        if (pv.innerHTML != prevInnerHTML)
          setDirty(item);
      }
    });
  }
}

// Updates MathML elements with latest variable values.
function updateMathMLVariables(item) {
  if (!window.MathJax)
    return;
  
  let htmlItem = getHTMLItemById(item.id);
  let math = [...htmlItem.querySelectorAll(`script[type="math/mml"]`)];
  let updated = false;
  
  math.forEach(m=>{
    let re = /<[mc]i[^>]*>([^<]*)<\/[mc]i>/g;
    m.innerHTML = m.innerHTML.replace(re, (match,...vars)=>{
      vars.forEach(v=>{
        let decl = item.declarations[v];
        if (decl) {
          match = match.replace(v, coerce(decl, decl.value));
          updated = true;
          setDirty(item);
        }
      });
      return match;
    });
  });
  if (updated) {
    QTI.PROMISES.push(new Promise(function(resolve, reject){
      MathJax.Hub.Queue(["Reprocess", MathJax.Hub, htmlItem, function(){
        DEBUG("MathJax Reprocess", htmlItem);
        resolve(true);
      }]);
    }));
  }
}

// This "pivots" any tables classed as "pivotable" where
// there is more than the maximum number columns and pivoting
// would reduce the number of columns.
function pivotTables(htmlItem) {
  htmlItem.querySelectorAll(PIVOTABLE_SEL).forEach(table=>{
    let maxCols = +table.getAttribute(MAXCOLS)||MAX_TABLE_COLS;
    let rows = tableRows(table);
    let cols = tableCols(table);
    if(cols>maxCols && rows<cols)
      pivot(table);
  });
}

// Executes a template/response/outcome processing block.
function processing(elem) {
  const MAX_ITERATIONS = 100;
  let iterations = 1;

  while (iterations <= MAX_ITERATIONS) {
    try {
      let result = QTI.TRANSFORMING? null: container(elem);
      if (iterations>1)
        DEBUG(elem.tagName,"for",identifier(elem.parentElement),
            "iterations",iterations);
      return result;
    } catch(e) {
      if (e==="constraintViolation") {
        iterations++;
        continue;
      } else if (e==="exitTest"
                 || e==="exitResponse"
                 || e==="exitTemplate") {
        break;
      } else {
        WARN("EXCEPTION: ", e);
        break;
      }
    }
  }
}

// Executor. In transform phase returns null (i.e. no transform).
// Otherwise returns result of executing first child.
function expression(elem) {
  return QTI.TRANSFORMING? no_transform(elem): execChildren(elem,0,1)[0];
}

// Executor which just executes all its child elements and
// concatenates the results.
function container(elem, ctx) {
  return execChildren(elem).join("")
}

// "Transparent" container.
function fragment(elem) {
  return execChildren(elem);
}

// Executes the children of an element, returning an array of the
// results.
function execChildren(elem,from=0,to) {
  let children = [...elem.children];
  if (from || to)
    children = children.slice(from,to);
  return children.map(ch => exec(ch));
}

// Executor which throws an exception if first child does not return
// true.
function constraint(elem) {
  if (!exec(elem.children[0]))
    throw "constraintViolation";
}

// Executor which executes the children of the element
// until one of the executions returns true.
function condition(elem) {  
  let child = [...elem.children];
  let i = 0;
  while (i<child.length && !exec(child[i])) {
    i++
  }
}

// Executor which executes the first child expression, (the condition),
// and if it returns true, executes the rest of the children.
function conditionIf(elem) {
  let cond = exec(elem.children[0]);
  let result = cond? execChildren(elem,1): false;
  return result;
}

// Sets outcome variable by evaluating child expression
// and translating that value through the LUT (matchTable or
// interpolationTable) associated with the variable.
function lookupOutcomeValue(elem) {
  setVar(elem, (decl,value)=> {
    let method;
    if (decl.interpolationTable) {
      method = function(K) {
        let entries = decl.interpolationTable.entries;
        let keys = Object.getOwnPropertyNames(entries);
        for(let k of keys.sort().reverse()) {
          let entry = entries[k];
          let includeBoundary = entry.includeBoundary!=="false";
          if (k<K || (includeBoundary && k==K))
            return entry.targetValue;
        }
        return decl.interpolationTable.defaultValue;
      }
    } else if (decl.matchTable) {
      method = function(K) {
        let entry = decl.matchTable.entries[K];
        if (!entry && decl.baseType=="pair")
          entry = decl.matchTable.entries[swapPair(K)];
        return entry? entry.targetValue: decl.matchTable.defaultValue;
      }
    } else {
      return null;
    }
    return method? mapLookup(decl, method, value): null;
  });
}

// Calls "method", or for a "multiple" or "ordered" input, maps the
// method over the input.
function mapLookup(decl, method, value=decl.value) {
  if (decl.cardinality=="multiple" || decl.cardinality=="ordered") {
    if (!Array.isArray(value))
      value = [value];
    return value.map(method);
  } else {
    return method(value);
  }
}

// Helper for setOutcomeValue, setTemplateValue, and
// lookupOutcomeValue.
function setVar(elem, getter=(decl,value)=>value) {
  let declarations = getDeclarations(elem);
  let decl = declarations[identifier(elem)];
  if (decl) {
    let value = getter(decl, execChildren(elem,0,1)[0]);
    decl.value = coerce(decl, value);
    logVarChange(elem.tagName, decl);
  }
}

// Sets attribute of a variable, such as "correctResponse"
function setVarAttribute(elem, values) {
  execChildren(elem);
  if (!values)
    values = elem.values;
  let parent = elem.parentElement;
  let id = identifier(parent);
  let decl = getDeclarations(elem)[id];
  decl[elem.tagName] = coerce(decl, values);
}
  
// Gets the response variable for an HTML-domain interaction.
function getResponseVariable(htmlInteraction, variable) {
  const item = getQTIItemById(htmlInteraction.getAttribute(ITEM));
  variable = variable || htmlInteraction.getAttribute(RESPONSE_ID);
  return item.declarations[variable];
}

// Sets the response variable of an HTML-domain interaction
function setResponseVariable(htmlInteraction, variable, value) {
  let decl = getResponseVariable(htmlInteraction, variable, value);
  if (decl)
    decl.value = value;
}

// The dirty flag indicates that an item has changed in a way which
// the candidate should see, such as showHide-controlled content
// becoming visible.  "one-click continue" navigation is supposed to
// remain on the "current" item if it is dirty, forcing the user to
// interact with the item at least one more time before
// proceeding to the "next" item -- if only to click the "continue"
// button (e.g. an arrow) again.  The "dirty" flag is implemented as a
// special pre-declared "$dirty" variable on the item.
function setDirty(item, value=true) {
  if (item.declarations["$dirty"])
    item.declarations["$dirty"].value = value;
}

// Sets the dirty flag on all the items and containers in a test, part,
// section, etc.
function setDirtyAll(value=true) {
  let sel = "assessmentTest, testPart, assessmentSection, assessmentItem";
  [...QTI.DOM.querySelectorAll(sel)].forEach(child=>{
    let decl = child.declarations;
    if (decl && decl["$dirty"])
      decl["$dirty"].value = value;
  });
}

// Returns the dirty flag for an item.
function getDirty(item) {
  return item.declarations["$dirty"].value;
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
  
// Logs a variable value change on the console (for debugging).
function logVarChange(tag, decl, prev) {
  let itemId = identifier(decl.ctx);
  let varId = decl.identifier;
  DEBUG(tag,`${itemId}.${varId} = ${decl.value} ${prev?prev:""}`);
}

// Sets variable attribute to the value of element.
// Helper for setCorrectResponse, setDefaultValue
function setAtt(elem, attrib) {
  let value = execChildren(elem,0,1)[0];
  let variable = identifier(elem);
  let decl = getDeclarations(elem)[variable];
  decl[attrib] = coerce(decl, value);
}

// Executor for templateDefault.  Noop if invoked during transform.
// Similar to setDefaultValue if invoked in connection with
// templateProcessing.
function templateDefault(elem) {
  if (QTI.TRANSFORMING)
    return null;
  else {
    let templateVar = elem.getAttribute("templateIdentifier");
    let decl = getDeclarations(elem)[templateVar];
    decl.defaultValue = coerce(decl, execChildren(elem,0,1)[0]);
    return true;
  }
}

