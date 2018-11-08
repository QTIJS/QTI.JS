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
  let interactions = {
    associateInteraction:         setupDragAndDropInteraction,
    customInteraction:            setupCustomInteraction,
    choiceInteraction:            setupInputInteraction,
    drawingInteraction:           setupDrawingInteraction,
    endAttemptInteraction:        setupInputInteraction,
    extendedTextInteraction:      setupInputInteraction,
    gapMatchInteraction:          setupDragAndDropInteraction,
    graphicAssociateInteraction:  setupGraphicAssociateInteraction,
    graphicGapMatchInteraction:   setupGraphicGapMatchInteraction,
    graphicOrderInteraction:      setupGraphicOrderInteraction,
    hotspotInteraction:           setupHotspotInteraction,
    hottextInteraction:           setupInputInteraction,
    inlineChoiceInteraction:      setupInputInteraction,
    matchInteraction:             setupInputInteraction,
    mediaInteraction:             setupMediaInteraction,
    orderInteraction:             setupDragAndDropInteraction,
    positionObjectStage:          setupPositionObjectStage,
    selectPointInteraction:       setupSelectPointInteraction,
    sliderInteraction:            setupInputInteraction,
    textEntryInteraction:         setupInputInteraction,
    uploadInteraction:            setupInputInteraction,
  }

  for (let interaction of Object.keys(interactions)) {
    htmlItem.querySelectorAll(`[${TAG}="${interaction}"]`).forEach(i=>{
      interactions[interaction](i);
    });
  }
  setupNavigationUI(htmlItem);
  let testPart = getQTITestPart(item);
  if (testPart.getAttribute("navigationMode")!=="linear")
    templateProcessing(item);
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

