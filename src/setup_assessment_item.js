//////////////////////////////////////////////////////////////////////////////
//
// setup_assessment_item.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** ITEM SETUP
*/

// Initializes an assessmentItem by setting up event handlers
// on interactions, and setting up the navigation UI.  For non-linear
// testParts, templateProcessing is also done immediately after the
// items are setup.
function setupAssessmentItem(item) {
  let htmlItem = getHTMLItemById(item.id);
  let testPart = getQTITestPart(item);
  let linear =  testPart && testPart.getAttribute("navigationMode")==="linear";
  let interactions = htmlItem.querySelectorAll(INTERACTION_SEL);
  interactions.forEach(i=>QTI.INTERACTIONS[i.getAttribute(TAG)].setup(i));
  setupNavigationUI(htmlItem);
  if (!linear) {
    templateProcessing(item);
    interactions.forEach(i=>i.init? i.init(): null);
  }
}

// Setup next/prev buttons.
function setupNavigationUI(item) {
  if (item)
    item.onclick = (evt)=>setCurrent(item, false, false);
  else
    item = document;
  let next = item.querySelectorAll(`span.${NEXT}`);
  let prev = item.querySelectorAll(`span.${PREV}`);
  next.forEach(elem=>elem.onclick=(evt)=>control(evt, +1));
  prev.forEach(elem=>elem.onclick=(evt)=>control(evt, -1));
}

