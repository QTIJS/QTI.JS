//////////////////////////////////////////////////////////////////////////////
//
// declarations.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** DECLARATIONS
*/

// Executor which declares a response, outcome, or template variable.  
function declaration(elem) {
  let decl = {value:null};
  let parent = elem.parentElement;
  [...elem.attributes].forEach(a=> {
    decl[a.name]=a.value;
  });
  decl.elem = elem;
  decl.ctx = parent;
  if (decl.cardinality=="multiple")
    decl.value = decl.value? [decl.value]: [];
  parent.declarations[decl.identifier]=decl;
  execChildren(elem);
}

// Initializes builtin declarations for all ASI elements.
function initializeAllDeclarations(elem) {
  initializeDeclarations(elem);
  let sel = "assessmentTest, testPart, assessmentSection, assessmentItem";
  [...elem.querySelectorAll(sel)].forEach(child=>initializeDeclarations(child));
}

// Initializes declarations for an element.  
function initializeDeclarations(elem) {
  if (!elem.declarations) {
    elem.declarations = {};
    if (elem.tagName=="testPart"
        || elem.tagName=="assessmentSection") {
      cloneDeclaration("duration", elem);
    } else {
      Object.getOwnPropertyNames(BUILTIN_DECLARATIONS).forEach(id=>{
        cloneDeclaration(id, elem);
      });
    }
  }

  function cloneDeclaration(id, elem) {
    let builtinDecl = BUILTIN_DECLARATIONS[id];
    elem.declarations[id] = Object.assign({}, builtinDecl);
    elem.declarations[id].elem = elem.parentElement || elem;
    elem.declarations[id].ctx = elem.parentElement || elem;
  }
}
  
// Climbs DOM tree looking for an element with variable declarations
// and returns the declarations.
function getDeclarations(elem) {
  while (elem && !elem.declarations)
    elem = elem.parentElement;
  return elem.declarations;
}

// Sets up a mapping table for mapResponse.
function mapping(elem) {
  let parent = elem.parentElement;
  let id = identifier(parent);
  let mapping = {entries:{}};
  [...elem.attributes].forEach(a=>mapping[a.name]=a.value);
  getDeclarations(elem)[id][elem.tagName] = mapping;
  execChildren(elem);
}

// Adds an entry to a response mapping table.
function mapEntry(elem) {
  let mapping = elem.parentElement;
  let grandparent = mapping.parentElement;
  let id = identifier(grandparent);
  let decl = getDeclarations(elem)[id];
  let V = {};

  [...elem.attributes].forEach(a => V[a.name]=a.value);
  switch(elem.tagName) {
  case "mapEntry":
    K = V.mapKey;
    break;
  case "areaMapEntry":
    K = V.shape+"|"+V.coords;
    break;
  case "interpolationTableEntry":
  case "matchTableEntry":
    K = V.sourceValue;
    break;
  }
  decl[mapping.tagName].entries[K]=V;
  if (V.caseSensitive===undefined)
    V.caseSensitive="true";
  if (V.caseSensitive!=="true") {
    let Klower=K.toLowerCase();
    if (Klower!==K)
      decl[mapping.tagName].entries[Klower]=V;
  }
}

// Makes a value conform to the specified baseType
// and cardinality of the variable, if possible.
function coerce(decl, value, defaultValue) {
  let result=value;

  if (result===null && defaultValue)
    result = defaultValue;
  if (Array.isArray(result)
      && result.length==0
      && Array.isArray(defaultValue))
    result = defaultValue;
  
  switch(decl.cardinality) {
  case "single":
    if (Array.isArray(result)) {
      if (result.length>1 && decl.baseType=="string")
        result = result.join(" ");
      else if (result.length==1)
        result = result[0];
    }

    switch(decl.baseType) {
    case "float":
      result *= 1.0;
      break;
    case "integer":
      result = Math.round(result);
      break;
    case "identifier":  
    case "string":
      if (result !== null)
        result += "";
      break;
    }
    break;
  case "ordered":  
  case "multiple":
    if (!Array.isArray(result))
      result = [result];
    break;
  }
  if (result==="false" && decl.baseType=="boolean")
    result=false;
  if (result==="0")
    result=0;
  if (result===undefined || result===NaN)
    result=null;
  return result;
}

// value: add textContent to parent values.
function value(elem) {
  if (!elem.parentElement.values)
    elem.parentElement.values = [];
  elem.parentElement.values.push(elem.textContent);
}

// Returns variables declared in an element (including children
// in the case of tests, testParts, or sections.)
function getVariables(elem=QTI.ROOT) {
  let declarations = {};
  if (elem.tagName=="assessmentItem" && elem.declarations) {
    declarations[identifier(elem)]=elem.declarations;
  } else {
    if (elem.tagName=="assessmentTest" && elem.declarations)
      declarations[identifier(elem)]=elem.declarations;
    let sel = "assessmentItem, assessmentSection, testPart";
    [...elem.querySelectorAll(sel)].forEach(item=>{
      if (item.declarations)
        declarations[identifier(item)]=item.declarations;
    });
  }
  return declarations;
}

// Returns the variables from responseDeclarations in an item.
function getResponseVariables(item) {
  let ids = Object.getOwnPropertyNames(item.declarations);
  return ids
    .filter(id=>item.declarations[id].elem.tagName=="responseDeclaration")
    .map(id=>item.declarations[id]);
}
