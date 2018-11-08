//////////////////////////////////////////////////////////////////////////////
//
// keydown.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** KEYDOWN HANDLER
*/

window.addEventListener("keydown", function(evt) {
  switch(evt.key) {
  case "F9":
    control(evt, evt.shiftKey? -1: +1);
    evt.preventDefault();
    break;
  case "F10":
    toggleLinearReviewMode();
    evt.preventDefault();
    break;
  case "Tab":
    if (TAB_DISABLED)
      evt.preventDefault();
    break;
  }
});

// This toggles review mode on the current testPart,
// if it is linear.  (Debugging function, called from keydownHandler)
function toggleLinearReviewMode() {
  let sel = `${TESTPART_SEL}${LINEAR_SEL}.${CURRENT}`;
  [...document.querySelectorAll(sel)].forEach(testPart=>{
    testPart.classList.toggle(REVIEW_MODE);
  })
}

