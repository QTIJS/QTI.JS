//////////////////////////////////////////////////////////////////////////////
//
// results.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** RESULTS SUBMISSION
*/

// Submits the variables of an item to a server, using
// the QTI Results Reporting XML format.
function submit(item) {
  if (!QTI.RESULTS_ENDPOINT
      || QTI.RESULTS_ENDPOINT.startsWith("https://example.com/"))
    return;

  DEBUG("submit: endpoint=", QTI.RESULTS_ENDPOINT,
        "headers=", QTI.RESULTS_HEADERS);

  let assessmentResult = QTI.DOM.createElement("assessmentResult");
  let context = QTI.DOM.createElement("context");
  let sessionIdentifier = QTI.DOM.createElement("sessionIdentifier");
  let sessionUuid = getUuidFromStorage(KEY_SESSIONID);
  let sourcedId = QTI.SOURCEDID||getUuidFromStorage(KEY_USERID);
  let testResult, itemResult;
  let now = new Date().toISOString();
  const sel = "assessmentTest, testPart, assessmentSection, assessmentItem";

  sessionIdentifier.setAttribute("sourceId", window.location.origin);
  sessionIdentifier.setAttribute("identifier", sessionUuid);
  context.appendChild(sessionIdentifier);
  context.setAttribute("sourcedId", sourcedId);
  assessmentResult.appendChild(context);
  [...QTI.DOM.querySelectorAll(sel)].forEach(child=>{
    if (child!=item
        && (child.tagName!=="assessmentItem"
            || (child.declarations["$dirty"]
                && child.declarations["$dirty"].value))) {
      DEBUG("submit", identifier(child), child.declarations["$dirty"]);
      emit(child);
    }
  });
  emit(item);
  post(QTI.RESULTS_ENDPOINT, QTI.RESULTS_HEADERS, assessmentResult);

  function emit(elem) {
    switch (elem.tagName) {
    case "assessmentTest":
      testResult = QTI.DOM.createElement("testResult");
      testResult.setAttribute("identifier", identifier(elem));
      testResult.setAttribute("datestamp", now);
      if (appendVariables(testResult, elem.declarations))
        assessmentResult.appendChild(testResult);
      break;      
    case "assessmentItem":
      itemResult = QTI.DOM.createElement("itemResult");
      itemResult.setAttribute("identifier", identifier(elem));
      itemResult.setAttribute("sequenceIndex", elem.seq);
      itemResult.setAttribute("datestamp", now);
      itemResult.setAttribute("sessionStatus", "final");
      if (appendVariables(itemResult, elem.declarations))
        assessmentResult.appendChild(itemResult);
      break;
    case "testPart":
    case "assessmentSection":
      // NYI
      break;
    }
  }
  
  function appendVariables(result, declarations) {
    let appended = 0;
    [...Object.getOwnPropertyNames(declarations)].forEach(id=>{
      let decl = declarations[id];
      if (decl.value
          && (!Array.isArray(decl.value) || decl.value.length>0)
          && !(decl.view=="testConstructor" || decl.view=="author")) {
        let variable, valuesParent;
        let values = !Array.isArray(decl.value)? [decl.value]: decl.value;
        
        switch(decl.elem.tagName) {
        case "responseDeclaration":
          variable = QTI.DOM.createElement("responseVariable");
          valuesParent = QTI.DOM.createElement("candidateResponse");
          variable.appendChild(valuesParent);
          break;
        case "outcomeDeclaration":
          variable = valuesParent = QTI.DOM.createElement("outcomeVariable");
          break;        
        case "templateDeclaration":
          variable = valuesParent = QTI.DOM.createElement("templateVariable");        
          break;
        }
        if (variable) {
          values.forEach(v=>{
            let value = QTI.DOM.createElement("value");
            value.textContent = v;
            valuesParent.appendChild(value);
          });
          variable.setAttribute("identifier", id);
          variable.setAttribute("cardinality", decl.cardinality);
          variable.setAttribute("baseType", decl.baseType);
          result.appendChild(variable);
          appended++;
        }
      }
    });
    return appended;
  }
}

