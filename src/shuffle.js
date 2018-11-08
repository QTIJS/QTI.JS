//////////////////////////////////////////////////////////////////////////////
//
// shuffle.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** SHUFFLING
*/

// Returns true if the children of the element should be shuffled.
function shouldBeShuffled(elem) {
  return elem.getAttribute("shuffle")==="true";
}

// Shuffles the children which are shufflable around the children
// which are not shufflable.
function shuffleNodes(nodes) {
  let shuffled = shuffle(nodes.filter(n=>isShufflable(n)));
  return nodes.map(node=>isShufflable(node)? shuffled.pop(): node);
}

// Returns true if the DOM node can be reordered.
// Must be one of the shufflable elements, and not have
// a fixed="true" attribute.
function isShufflable(node) {
  if (node.nodeType==Node.ELEMENT_NODE) {
    let tags = [
      "simpleChoice",
      "simpleAssociableChoice",
      "inlineChoice",
      "gapText",
      "gapImg", 
      "assessmentSection",
      "assessmentSectionRef",
      "assessmentItemRef"
    ];
    let fixed = node.getAttribute("fixed")==="true";
    let result = !fixed && tags.includes(node.tagName);
    return result;
  } else {
    return false;
  }
}

// Shuffles an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(RANDOM_FUNCTION() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

