//////////////////////////////////////////////////////////////////////////////
//
// selection_ordering.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** TEST PART/SECTION/ITEM SELECTION AND ORDERING
*/

// Select and order test parts and sections and itemRefs within
// sections.
function selectAndOrder(elem, seq=0) {
  let selectionElement, orderingElement;

  [...elem.children].forEach(child=>{
    switch(child.tagName) {
    case "testPart":
    case "assessmentSection":
      seq = selectAndOrder(child, seq);
      break;
    case "assessmentItemRef":
      child.ownerSection = elem;
      child.originalSeq = ++seq;
      break;
    case "selection":
      selectionElement = child;
      break;
    case "ordering":
      orderingElement = child;
      break;
    }
  });

  // "Exec" the selection and ordering elements, if found.
  // These go through the executor mechanism so that they
  // can be overridden by extensions.
  if (selectionElement)
    exec(selectionElement)
  if (orderingElement)
    exec(orderingElement);
  return seq;
}

// Selects sections and items for presentation to the candidate.
// Implemented as an "extension", so that per the QTI spec, it can be
// overridden.  This is the standard "selection": "select" children
// are chosen at random, always including the "required" children,
// optionally "withReplacement".
function selection(elem) {
  if (elem.tagName != "selection")
    return {handled: false, value: null};
  if (QTI.TRANSFORMING)
    return {handled: true, value: null};

  let section = elem.parentElement;
  let toSelect = +elem.getAttribute("select");
  let withReplacement = elem.getAttribute("withReplacement")==="true";
  let children = [...section.children], candidates = [], selected = [];

  children = children.filter(child=>isSelectable(child));
  children.forEach(child=>{
    if (child.getAttribute("required")==="true") {
      selected.push(child);
    } else {
      candidates.push(child);
    }
  });

  let pass = 0;

  while (selected.length<toSelect) {
    ++pass;
    candidates = shuffle(candidates);
    for (let c=0; c<candidates.length; c++) {
      if (selected.length<toSelect)
        selected.push(candidates[c]);
    }
    if (!withReplacement) {
      break;
    } else if (pass==1) {
      candidates = selected.concat(candidates);
    }
  }
  children.forEach(child=>{
    if (!selected.includes(child)) {
      section.removeChild(child);
    } else if (withReplacement) {
      let instances = selected.filter(sel=>sel==child);
      for (let i=0; i<instances.length-1; i++)
        section.insertBefore(clone(child),child.nextSibling);
    }                       
  });
  return {handled:true};

  // Returns true if the element is one which can be "selected"
  function isSelectable(elem) {
    return elem.tagName=="assessmentItemRef"
      || elem.tagName=="assessmentSection"
      || elem.tagName=="assessmentSectionRef";
  }

  // Clones an assessmentItemRef or assessmentSection
  // Helper for "selection" when withReplacement is true.
  function clone(tree) {
    let tree2 = QTI.DOM.createElement(tree.tagName);
    [...tree.attributes].forEach(a=>tree2.setAttribute(a.name,a.value));
    tree2.ownerSection = tree.ownerSection;
    tree2.originalSeq = tree.originalSeq;
    if (tree.tagName=="assessmentSection") {
      [...tree.children].forEach(child => {
        tree2.insertBefore(clone(child),null);
      });
    }
    return tree2;
  }
}
  
// Order sections and itemRefs with in a test part or section
// according to the ordering spec.  Implemented as an "extension", so
// that per the QTI spec, it can be overridden.  This is the standard
// implementation, which just supports "shuffle".
function ordering(elem) {
  if (elem.tagName != "ordering")
    return {handled: false, value: null};
  if (QTI.TRANSFORMING)
    return {handled: true, value: null};
  
  if (elem.getAttribute("shuffle")==="true") {
    let section = elem.parentElement;
    let children = [...section.children];
    children.forEach(child=>raise(section, child));
    children = [...section.children];
    while (section.hasChildNodes())
      section.removeChild(section.lastChild)
    children = shuffleNodes(children);
    children.forEach(child=>section.insertBefore(child, null));
  }
  return {handled:true};

  // For a section, if visible=false and keepTogether=false,
  // raise child assessmentSections and assessmentItemRefs
  // to the parent (where they will be interleaved with the other
  // sections and items in the parent).
  function raise(parent, section) {
    if (section.tagName==="assessmentSection"
        && section.getAttribute("visible")==="false"
        && section.getAttribute("keepTogether")==="false") {
      [...section.children].forEach(child=>{
        if (child.tagName=="assessmentSection"
            || child.tagName=="assessmentItemRef")
          child.ownerSection = section;
        parent.insertBefore(child, section);
      });
    }
  }
}

