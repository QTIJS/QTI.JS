//////////////////////////////////////////////////////////////////////////////
//
// custom_interaction.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Sets up a customInteraction (CI). If a setupInteraction function is
// registered for the CI identifier or type (in that order), call it.
// Note that a CI doesn't necessarily have to be initialized through
// this mechanism.  It might not require initialization, or its
// initialization mechanism may be out of the scope of QTI.JS
function setupCustomInteraction(htmlInteraction) {
  let identifier = htmlInteraction.getAttribute(ID);
  let type = htmlInteraction.getAttribute("type");
  let ci = QTI.CUSTOM_INTERACTIONS[identifier]
      || QTI.CUSTOM_INTERACTIONS[type];
  if (ci && typeof ci.setupInteraction==="function") {
    let qtiInteraction = QTI.DOM.getElementById(htmlInteraction.id);
    ci.setupInteraction(htmlInteraction, qtiInteraction);
  }
}

