//////////////////////////////////////////////////////////////////////////////
//
// transform.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** TRANSFORM QTI XML TO HTML
*/

// This is a wrapper around "exec" which sets a global
// QTI.TRANSFORMING flag.  This is so that executors can determine
// whether or not they are being invoked for a a "transform" or a
// non-transform context such as "processing".
function doTransforms(elem, ctx) {
  DEBUG("start transform", identifier(elem), clock()+"msecs");
  QTI.TRANSFORMING = true;
  initializeAllDeclarations(elem);
  let result = exec(elem, ctx);
  QTI.TRANSFORMING = false;
  DEBUG("end transform", identifier(elem), clock()+"msecs");
  
  return result;
}

// This function is an executor which Transforms a QTI v2.2 XML element
// into an HTML string.  This method can have significant side-effects.
// For example, transforming an "assessmentItemRef" loads the
// referenced assessmentItem, then transforms and calls setupAssessmentItem
// on it.
function transform(elem) {
  if (!elem)
    return "";
  
  let item = getQTIAssessmentItem(elem);
  let id = elem.getAttribute("id");
  let interaction = QTI.INTERACTION_STACK[QTI.INTERACTION_STACK.length-1];
  
  if (!id) {
    id = getId(elem);
    elem.setAttribute("id", id);
  }
  
  // The default transform is to a div, plus standard transformChildren
  // and transformAttributes.
  let T = {
    attribs:[
      {name:"tag", value:elem.tagName},
      {name:"id", value:id, prefix:false},
    ],
    content: transformChildren(elem),
    tag:"div",
  };
  if (item)
    T.attribs.push({name:"item", value:identifier(item)});

  // The following does element-specific transforms.
  switch(elem.tagName) {
  case "assessmentTest":
    addNavigation(elem, T);
    if (QTI.TEST_CLASS)
      elem.classList.add(QTI.TEST_CLASS);
    break;
  case "testFeedback":
    addNavigation(elem, T);
    break;
  case "testPart":
  case "assessmentSection":
    if (QTI.SECTIONS_EXPANDED
        && countItems(elem)==0
        && countItemRefs(elem)==0)
      T.tag = null;
    else
      addNavigation(elem, T);
    break;
  case "timeLimits":
    if (elem.getAttribute("maxTime")||elem.getAttribute("minTime"))
      T.content.push("<span></span>");
    else
      T.tag = null;
    break;
  case "stylesheet":
    transformStylesheet(elem, T);
    break;
  case "assessmentItem":
    addCommentInteraction(elem, T);
    addNavigation(elem, T);
    if (!allowSkipping(item))
      T.attribs.push({name:"class", value:MANDATORY});
    if (item.parentElement)
      T.attribs.push({name:"section",value:identifier(item.parentElement),
                      prefix:true});
    break;
    
  case "associateInteraction":
    transformAssociateInteraction(elem, T);
    break;
  case "endAttemptInteraction":
    transformEndAttemptInteraction(elem, T);
    break;
  case "extendedTextInteraction":
    transformExtendedTextInteraction(elem, T);
    break;
  case "hotspotInteraction":
  case "graphicAssociateInteraction":    
  case "graphicOrderInteraction":
  case "selectPointInteraction":
    transformPointInteraction(elem, T);
    break;
  case "graphicGapMatchInteraction":
    transformGraphicGapMatchInteraction(elem, T);
    break;
  case "infoControl":
    transformInfoControl(elem, T);
    break;
  case "inlineChoiceInteraction":
    transformInlineChoiceInteraction(elem, T);
    break;
  case "matchInteraction":
    transformMatchInteraction(elem, T);
    break;
  case "mediaInteraction":
    transformMediaInteraction(elem, T);
    break;
  case "positionObjectStage":
    transformPositionObjectStage(elem, T);
    break
  case "sliderInteraction":
    transformSliderInteraction(elem, T);
    break;
  case "textEntryInteraction":
    transformTextEntryInteraction(elem, T);
    break;
  case "uploadInteraction":
    transformUploadInteraction(elem, T);
    break;

  case "templateInline":
  case "feedbackInline":
    T.tag = "span";
    break;
  case "simpleMatchSet":
    T.tag = null;
    break;
  case "hottext":
  case "simpleChoice":
  case "simpleAssociableChoice":
    transformChoice(elem, T);
    break;
  case "inlineChoice":
    T.tag = "option";
    break;
  case "gapText":
  case "gapImg":
    T.tag = "span";
    T.attribs.push({name:"draggable", value:"true", prefix:false});
    break;
  case "gap":
    T.tag = "span";
    T.attribs.push({name:"class", value:GAP, prefix:false});
    break;
  case "object":
    transformObject(elem, T);
    break;
  case "printedVariable":
    T.tag = elem.getAttribute(TAG) || "span";
    break;
  }

  if (T.tag != null) {
    let [opentag,closetag]
        = getTags(T.tag, transformAttributes(elem, T.attribs));
    return [T.wrapstart,opentag,T.content.join(" "),
            closetag,T.wrapend].join(" ");
  } else {
    return "";
  }

  // Transforms attributes of XML element to HTML element attributes.
  function transformAttributes(elem, attribs) {
    const inlineRE = new RegExp("("+[
      "inlineChoiceInteraction", "textEntryInteraction", "hottextInteraction",
    ].join("|")+")");

    const showHideRE = new RegExp("("+[
      "associableHotspot", "feedbackBlock", "feedbackInline", "gap",
      "gapImg", "gapText", "hotspotChoice", "hottext", "inlineChoice",
      "modalFeedback", "simpleAssociableChoice", "simpleChoice",
      "templateBlock", "templateInline", "testFeedback"
    ].join("|")+")");

    const matchMaxRE = new RegExp("("+[
      "associableHotspot", "gapImg", "gapText", "simpleAssociableChoice"
    ].join("|")+")");
    
    let classList = [];

    if (elem.tagName.match(inlineRE))
      classList.push(`${INTERACTION} ${INLINE}`);
    else if (elem.tagName.match("Interaction"))
      classList.push(`${INTERACTION} ${BLOCK}`);

    // showHide is not required and defaults to show.
    // triggerShowHide needs it to be there, so we add it if necessary.
    if (elem.tagName.match(showHideRE) && !elem.getAttribute("showHide"))
      elem.setAttribute("showHide", "show");

    // matchMax is a required field on some elements. For those elements,
    // we rely on it; so if it is missing, default it to "1".
    if (elem.tagName.match(matchMaxRE) && !elem.getAttribute("matchMax"))
      elem.setAttribute("matchMax", "1");
    
    attribs = attribs.filter(a=>{
      if (a.name=="class") {
        classList.push(a.value);
        return false;
      } else {
        return true;
      }
    });

    [...elem.attributes].forEach(a => {
      if (a.name.match(/^(aria-|data-)/)) {
        // All attributes prefixed with "aria-", "data-".
        // are rendered verbatim.
        attribs.push({name:a.name,value:a.value,prefix:false});

      } else if (elem.tagName=="customInteraction") {
        // For custom interactions we render attributes verbatim,
        // for the benefit of any custom javascript,
        // *plus* we emit transformed versions of "identifier" and
        // "responseIdentifier".
        attribs.push({name:a.name,value:a.value,prefix:false});
        if (a.name=="identifier" || a.name=="responseIdentifier")
          attribs.push({name:a.name,value:a.value,prefix:true});
        
      } else {
        switch(a.name) {
        case "class":
          // Add to classList
          classList.push(a.value);
          break;
          
        case "base":
        case "label":
        case "language":
          // These are not valid HTML5 attributes but are allowed
          // on QTI elements.  Since they are ignored by browsers,
          // We pass them through for the benefit of stylesheets
          // and extensions.
          attribs.push({name:a.name,value:a.value,prefix:false});
          break;

        case "data":  
        case "dir":
        case "href":
        case "id":
        case "lang":  
        case "media":
        case "role":
        case "title":  
        case "type":
          // These are either global or contextually-valid HTML5
          // attributes, which are allowed also in the QTI XML.  They are
          // passed through for stylesheets and extensions. Note that
          // "id" attributes, if present in the QTI XML, will be used by
          // qti.js instead of its own generated ids, and we assume
          // that the item/test authors have made properly them
          // globally unique within the test.  This is somewhat critical
          // and there can be obscure-seeming bugs if this is not done
          // correctly.
          attribs.push({name:a.name,value:a.value,prefix:false});
          break;

        case "access":  
        case "category":
        case "format":
        case "hotspotLabel":          
        case "identifier":
        case "matchGroup":  
        case "navigationMode":
        case "orientation":
        case "objectLabel":  
        case "outcomeIdentifier":
        case "responseIdentifier":
        case "showHide":
        case "submissionMode":
        case "templateIdentifier":
        case "timeDependent":
        case "use":
        case "view":
        case "visible":
          // Transformed with a data-${PREFIX}- prefix for benefit
          // of stylesheets and extensions.
          attribs.push({name:a.name,value:a.value,prefix:true});
          break;

        default:
          // Ignored. Attribute not rendered into transformed HTML.
          break;
        }
      }
    });
    if (classList.length)
      attribs.push({name:"class",value:classList.join(" "),prefix:false});
    
    return attribs.map(a=>`${snakeCase(a)}="${a.value}"`).join(" ");
  }

  // Adds a pseudo extendedTextInteraction to an item for a user comment.
  function addCommentInteraction(item, T) {
    if (allowComment(item)) {
      T.content.push("<details><summary>Comment</summary>" 
       +`<div ${TAG}="extendedTextInteraction" ${ITEM}="${identifier(elem)}"`
       +` ${RESPONSE_ID}="$comment" class="${INTERACTION} ${BLOCK} ${COMMENT}">`
       +`<textarea placeholder="${QTI.LANG.COMMENT}"></textarea>`
       +"</div></details>");
    }
  }

  // Adds "nav" element to assessmentTest, testPart,
  // assessmentSection, and assessmentItem.
  function addNavigation(elem, T) {
    T.content.push(`<nav class="${NAVIGATION}">`);
    T.content.push(`<span class="${NEXT}"></span>`);
    T.content.push(`<span class="${PREV}"></span>`);
    if (elem.tagName=="testPart") {
      let submissionMode = elem.getAttribute("submissionMode");
      if (submissionMode==="simultaneous")
        T.content.push(`<span class="${SUBMIT}"></span>`);
    }
    T.content.push(`</nav>`);
  }
    
  // Transforms hottext, simpleChoice, or simpleAssociableChoice.
  function transformChoice(elem, T) {
    let interaction = QTI.INTERACTION_STACK[QTI.INTERACTION_STACK.length-1];

    switch(interaction.tagName) {
    case "customInteraction":
    default:
      // generic transform of choices inside a customInteraction. The
      // default handling of customInteractions is just to run the
      // default transform.  If this isn't what the item author
      // wanted, they needed to have done the transform themselves
      // with custom code
      break;
      
    case "matchInteraction":
      // transform of children inside a matchInteraction.
      // matchInteraction has a special transform of its children, so
      // we don't emit any content for the children here.
      T.content=[];
      break;

    case "choiceInteraction": 
    case "hottextInteraction":
      // renders choice as a radio button or checkbox.
      let maxChoices = Math.max(interaction.getAttribute("maxChoices")||1,0);
      let type = maxChoices==1? "radio": "checkbox";
      T.attribs.push({name:"type", value:type, prefix: false});
      T.attribs.push({name:"name", value:getId(interaction,"RG"),prefix:false});
      T.tag = "input";
      if (interaction.tagName=="choiceInteraction") {
        T.wrapstart = `<div class='${INPUT_WRAP}'><label class="${CHOICE}">`;
        T.wrapend = "</label></div>";
      } else {
        T.wrapstart = (T.wrapstart||"")
          + `<wbr/><span class='${HOTTEXT_WRAP}'><label>`;
        T.wrapend = "</label></span>";
      }
      break;

    case "orderInteraction":
    case "associateInteraction":
      // renders choice as as an <li> inside an <ol>
      if (interaction.choices === undefined) {
        let choices = interaction.getElementsByTagName(elem.tagName).length;
        interaction.choices = choices;
        T.wrapstart = "";
        if (interaction.tagName=="orderInteraction") {
          let countChoices = interaction.querySelectorAll("simpleChoice").length
          let maxChoices = +interaction.getAttribute("maxChoices")||0;
          let minChoices = +interaction.getAttribute("minChoices")||0;
          if ((maxChoices>0 && maxChoices!=countChoices)
              || (minChoices>0 && minChoices!=countChoices)) {
            T.wrapstart = `<ol class="${CHOICES} ${SELECTION_AREA}"></ol>`;
            interaction.selectionArea = true;
          }
        }
        T.wrapstart += `<ol class="${CHOICES}">`;
      }
      T.tag = "li";
      T.attribs.push({name:"draggable", value:"true", prefix:false});
      if (--interaction.choices===0) {
        T.wrapend = (T.wrapend||"") + `</ol>`;
        delete interaction.choices;
      }
      break;
    }
  }

  // Transform a <stylesheet> element into a <link>
  function transformStylesheet(elem, T) {
    let href = elem.getAttribute("href");
    T.tag = "link";
    T.attribs.push({name:"rel", value:"stylesheet", prefix: false});
    elem.setAttribute("href", new URL(href, getBase(elem)));
  }
  
  // Transforms an "object". drawingInteraction is a special
  // case, where we turn an "object" into a <canvas> element and also
  // generate the tool palette.  Otherwise, <object> transforms
  // generically.
  function transformObject(elem, T) {
    let data = elem.getAttribute("data");
    if (data)
      elem.setAttribute("data", new URL(data, getBase(elem)));
    
    const DRAWING_TOOLS_TABLE = `
    <table class="${DRAWING_TOOLS}">
    <tr>
      <td class="${SELECTED}" id="bucket"></td>
      <td class="${SELECTED}" id="c1"></td>
      <td id="c2"></td>
      <td id="c3"></td>
      <td id="c4"></td>
    </tr>
    <tr>
      <td id="pen"></td>
      <td id="c5"></td>
      <td id="c6"></td>
      <td id="c7"></td>
      <td id="c8"></td>
    </tr>
    </table>`;

    let interaction = QTI.INTERACTION_STACK[QTI.INTERACTION_STACK.length-1];
    
    T.tag = elem.tagName;
    if (interaction) {
      switch(interaction.tagName) {
      case "drawingInteraction":
        T.tag = "canvas";
        T.wrapend = DRAWING_TOOLS_TABLE;
        break;
      default:
        break;
      }
    }
  }

  // Generates details/summary for an infoControl
  function transformInfoControl(elem, T) {
    let title = elem.getAttribute("title")
    T.tag = "details";
    T.content.unshift(`<summary>${title}</summary>`);
  }

  // Generates a select for inlineChoiceInteraction
  function transformInlineChoiceInteraction(elem, T) {
    T.tag = "select";
    T.content.push(`<option selected="true">Choose...</option>`);
  }

  // Generates textarea for an extendedTextInteraction
  function transformExtendedTextInteraction(elem, T) {
    let ph = getPlaceholder(elem, "");
    T.content.push(`<textarea placeholder="${ph}"></textarea>`);
  }
  
  // Generates an input type=text for textEntryInteraction
  function transformTextEntryInteraction(elem, T) {
    T.tag = "span";
    T.content.unshift(
      `<input type="text" placeholder="${getPlaceholder(elem, "")}"/>`);
  }

  // Returns placeholder text for an input or textarea.
  function getPlaceholder(elem, defaultValue) {
    let placeholder = elem.getAttribute("placeholderText")||defaultValue;
    let expectedLength = elem.getAttribute("expectedLength");
    let expectedLines = elem.getAttribute("expectedLines");
    let expected = "";
    if (expectedLength) 
      return`${placeholder} ${QTI.LANG.EXPECTED_CHARS(expectedLength)})`;
    else if (expectedLines)
      return `${placeholder} ${QTI.LANG.EXPECTED_LINES(expectedLines)})`;
    else
      return `${placeholder}`
  }
  
  // Generates an input type=file for uploadInteraction
  function transformUploadInteraction(elem, T) {
    T.content.push(`<label>${QTI.LANG.UPLOAD}: <input type="file"/></label>`);
  }
            
  // Generates an input type=range for a sliderInteraction.
  function transformSliderInteraction(elem, T) {
    let datalist = `<datalist id="tickmarks">`;
    let outputId = elem.id+"_OUT";
    let min = elem.getAttribute("lowerBound");
    let max = elem.getAttribute("upperBound");
    let step = elem.getAttribute("step");
    let val = Math.floor((min+max)/2);
    let tag=`<input type="range" min="${min}" max="${max}" `
        + `step="${step}" list="tickmarks"`
        + ` value="${val}" oninput="${outputId}.value=this.value"/>`
        + `<span class="${WRAP}">`
        + `<output class="${THUMB}" id="${outputId}">${val}</output></span>`;

    [[0,"0%"],10,20,30,40,[50,"50%"],60,70,80,90,[100,"100%"]].forEach(tick=>{
      if (Array.isArray(tick))
        datalist += `<option value="${tick[0]}" label="${tick[1]}">`;
      else
        datalist += `<option value="${tick}">`
    });
    datalist += "</datalist>";
    T.content.push(tag+datalist);
  }

  // Generates button for endAttemptInteraction
  function transformEndAttemptInteraction(elem, T) {
    T.tag = "button";
    T.content.unshift(elem.getAttribute("title"));
  }
  
  // Generates table for associateInteraction
  function transformAssociateInteraction(elem, T) {  
    const gap = `<td class="${GAP}"></td>`;
    const bar = `<td></td>`;
    let choices = elem.getElementsByTagName("simpleAssociableChoice").length;
    let maxAssocs = +elem.getAttribute("maxAssociations");
    maxAssocs = maxAssocs || Math.floor(choices/2) || 1;
    let html = `</ol><table class="${ASSOCIATE_TABLE}">`;
    for (let i=0; i<maxAssocs; i++)
      html += "<tr>"+gap+bar+gap+"</tr>";
    html += "</table>"
    T.content.push(html);
  }

  // Generates table for a matchInteraction. First simpleMatchSet
  // gives the rows, second gives the columns.  Note that table may
  // be pivoted later.
  function transformMatchInteraction(elem, T) {
    let matchSets = [...elem.querySelectorAll("simpleMatchSet")];
    let [rows, cols] = matchSets.map(set=>{
      let choices = [...set.children];
      choices = shouldBeShuffled(elem) ? shuffleNodes(choices): choices;
      return choices.map(choice=>[identifier(choice),trim(choice.innerHTML)]);
    });
    
    let maxAssocs = +elem.getAttribute("maxAssociations")||1;
    let type = maxAssocs==1? "radio": "checkbox";
    let cell = (row,col)=>
        `<td><input ${ID}="${row[0]} ${col[0]}"`
        + ` name="${getId(interaction,"RG")}" type="${type}"/></td>`;
    let html = `<table class="${MATCH_TABLE} ${PIVOTABLE}">`;

    html += "<tr><th></th>";
    cols.forEach(col=>html += `<th>${col[1]}</th>`);
    html += "</tr>";
    rows.forEach(row=>{
      html += `<tr><th>${row[1]}</th>`;
      cols.forEach(col=>html += cell(row,col));
      html += "</tr>";
    });
    html += "</table>";
    T.content.push(html);
  }

  // Generates stage and SVG overlay for the graphic interactions:
  // hotspotInteraction, selectPointInteraction,
  // graphicAssociateInteraction, and graphiOrderInteraction.
  function transformPointInteraction(elem, T, extra="", hotspotClass=HOTSPOT) {
    let html = transform(elem.querySelector("prompt"));
    let stage = elem.querySelector(`${elem.tagName} > object`);
    let stageId = getId(stage, "STAGE");
    
    if (stage) {
      let height = +stage.getAttribute("height");
      let width = +stage.getAttribute("width");
      let hotspots = [...elem.querySelectorAll("hotspotChoice")]
          .concat([...elem.querySelectorAll("associableHotspot")]);
      let markers = "", m=0;
      let fontsize = Math.round(width/12);
      let viewBox = "", onload = "";
      let maxChoices = elem.getAttribute("maxChoices")||0;
      
      if (width && height) {
        viewBox = `viewBox="0 0 ${width} ${height}"`
      } else {
        onload = `onload="setSVGViewboxFromStage(this)"`;
      }

      html += `<div class="${STAGE}">`;
      html += `<img ${onload} id="${stageId}"`
        + ` type="${stage.getAttribute("type")}"`
        + ` src="${stage.getAttribute("data")}" />`;
      html += `<svg style="font-size:${fontsize}px" ${viewBox}`
        +` xmlns="${SVG_NS}">`;

      hotspots.forEach(h => {
        let shape = h.getAttribute("shape");
        let cx, cy, x1, y1, x2, y2, r, height, width, attribs;
        let coords = h.getAttribute("coords").split(",");
        let id = identifier(h);
        let matchMax = h.getAttribute("matchMax");
        
        switch(shape) {
        case "circle":
          [cx, cy, r] = coords;
          attribs = `cx="${cx}" cy="${cy}" r="${r}"`;
          break;
        case "rect":
          [x1, y1, x2, y2] = coords;
          attribs = `x="${x1}" y="${y1}" height="${y2-y1}" width="${x2-x1}"`;
          break;
        case "poly":
          shape = "polygon";
          attribs = `points = "${coords.join(",")}"`
          break;
        }
        if (matchMax) 
          attribs += ` ${MATCH_MAX}="${matchMax}"`
        html += `<g><${shape} class="${hotspotClass}" ${ID}="${id}"`
          +`${attribs}/></g>`;

        if (maxChoices==0 || m<maxChoices) {
          if (markers)
            markers += " ";
          markers += ++m;
        }
      });

      if (elem.tagName == "graphicOrderInteraction")
        html += `<text id="togo" x="4" y="${height}">${markers}</text>`;
      html += extra;
      html += "</svg></div>"
    }
    T.content = [html];
  }

  // Generates stage and SVG overlay for positionObjectStage
  // and positionObjectInteraction.  Notwithstanding QTI nomenclature,
  // for the most part we treat the positionObjectStage as the interaction,
  // and the postionObjectInteractions as analogous to associableHotspots
  // or hotspotChoices.
  function transformPositionObjectStage(elem, T) {
    let item = getQTIAssessmentItem(elem);
    let stage = elem.children[0];
    let html = "";
    let objects = [...elem.querySelectorAll("positionObjectInteraction object")]  

    if (stage) {
      let height = stage.getAttribute("height");
      let width = stage.getAttribute("width");
      html = `<div class="${STAGE}">`;
      html += `<img type="${stage.getAttribute("type")}"`
        + ` src="${stage.getAttribute("data")}" />`;
      html += `<svg viewBox="0 0 ${width} ${height}" xmlns="${SVG_NS}"></svg>`;
      html += "</div>";
    }
    objects.forEach(o => {
      let type = o.getAttribute("type");
      let src = o.getAttribute("data");
      let width = o.getAttribute("width");
      let interaction = o.parentElement;

      html += `<img ${TAG}="positionObjectInteraction"`
        + ` draggable="true" class="${MARKER}"`
        + ` id="${interaction.id}" ${ITEM}="${identifier(item)}"`
        + ` type="${type}" style="width:5%" src="${src}"`
        + ` ${RESPONSE_ID}="${interaction.getAttribute("responseIdentifier")}"/>`;
    });
    T.content = [html];
  }

  // Generates stage and SVG overlay for graphicGapMatchInteraction
  function transformGraphicGapMatchInteraction(elem, T) {
    let stage = elem.querySelector(`${elem.tagName} > object`);
    let stageWidth = stage.getAttribute("width");
    let gapFills = [...elem.querySelectorAll("gapImg object")]
        .concat([...elem.querySelectorAll("gapText")]);
    
    transformPointInteraction(elem, T, "", GAP);
    T.content.push("<p>");
    T.content.push(gapFills.map(gf => {
      switch(gf.tagName) {
      case "object":
        let src = gf.getAttribute("data");
        let type = gf.getAttribute("type");
        let width = gf.getAttribute("width");
        let height = gf.getAttribute("height");
        let match_max = gf.parentElement.getAttribute("matchMax");
        return `<img class="${GAP_IMAGE}" draggable="true"`
          + ` ${ID}="${identifier(gf.parentElement)}"`
          + ` src="${src}" type="${type}" ${MATCH_MAX}="${match_max}"`
          + ` style="width:12%;max-width:55px; height:auto" />`;
      case "gapText":
        return `<span class="${GAP_TEXT}" draggable="true"`
          + ` ${ID}="${identifier(gf)}">`
          + gf.textContent + "</span>";
      }
    }).join(""));
    T.content.push("</p>");
  }

  // Generates the HTML for a mediaInteraction. Gets the type
  // attribute of the object (assumed to be one) and emits an HTML
  // tag.  Emits <audio> for audio[/*], <video> for video[/*], and <x> for
  // x[/*] (which is probably wrong).  video/youtube is a specially
  // handled case.
  function transformMediaInteraction(elem, T) {
    let prompt = elem.querySelector("prompt");
    let object = elem.querySelector("object");
    let loop = elem.getAttribute("loop")==="true";
    let autostart = elem.getAttribute("autostart")==="true";
    let src = object.getAttribute("data");
    let type = object.getAttribute("type");
    let width = object.getAttribute("width")
    let height = object.getAttribute("height");

    T.content = [];
    if (prompt)
      T.content.push(prompt.innerHTML);

    switch(type) {
    case "video/youtube":
      src = src.replace("watch?v=", "embed/");
      src += "?rel=0&controls=1&modestbranding=1&showinfo=0";
      T.content.push(`<iframe width="${width}" height="${height}" src="${src}"`
                     +` allow="encrypted-media"></iframe`);
      break;
    default:
      let tag = type? type.split("/")[0]: "audio";
      T.content.push(`<${tag} controls type="${type}" src="${src}"></${tag}>`);
      break;
    }
  }
  
  function countItems(elem) {
    return [...elem.querySelectorAll("assessmentItem")].length;
  }

  function countItemRefs(elem) {
    return [...elem.querySelectorAll("assessmentItemRef")].length;
  }
}

// This is a wrapper around the transform function for interactions.
// It maintains a stack of interactions, with the interaction
// currently being transformed at the top.  This facilitates nested
// transforms of interaction children to find the interaction in which
// they are nested.
function interaction(elem) {
  QTI.INTERACTION_STACK.push(elem);
  let result = transform(elem);
  QTI.INTERACTION_STACK.pop(elem);
  return result;
}

