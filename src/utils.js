//////////////////////////////////////////////////////////////////////////////
//
// utils.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** UTILITIES
*/

// Returns ancestor of QTI (XML) element with a specified tag.
function getQTIAncestor(elem, tagName) {
  while (elem && elem.tagName!=tagName)
    elem = elem.parentElement;
  return elem;
}

// Alias of getQTIAncestor for assessmentTest.
function getQTIAssessmentTest(elem) {
  return getQTIAncestor(elem, "assessmentTest");
}

// Alias of getQTIAncestor for testPart.
function getQTITestPart(elem) {
  return getQTIAncestor(elem, "testPart");
}

// Alias of getQTIAncestor for assessmentSection.
function getQTISection(elem) {
  return getQTIAncestor(elem, "assessmentSection");
}

// Alias of getQTIAncestor for assessmentItem.
function getQTIAssessmentItem(elem) {
  return getQTIAncestor(elem, "assessmentItem");
}


// Gets Item (in QTI.ROOT) from element with ITEM attribute
function getQTIItemById(itemId) {
  if (QTI.ROOT.tagName=="assessmentItem") {
    return QTI.ROOT;
  } else {
    return QTI.ROOT.querySelector(`assessmentItem[identifier=${itemId}]`);
  }
}
  
// Returns ancestor of HTML element with a specified tag.
function getHTMLAncestor(elem, tagName) {
  while (elem && elem.getAttribute(TAG)!=tagName)
    elem = elem.parentElement;
  return elem;
}

// Alias of getHTMLAncestor for assessmentItem
function getHTMLAssessmentItem(elem) {
  return getHTMLAncestor(elem, "assessmentItem");
}

// Finds parent "math" element in HTML DOM
function getMath(elem) {
  while (elem && elem.tagName !== "math")
    elem = elem.parentElement;
  return elem;
}

// Climbs tree looking for the attribute, and returns
// its value, or null if not found.
function getAncestorAttribute(elem, attribute) {
  if (!elem) {
    return null;
  } else if (!elem.getAttribute) {
    return null;
  } else {
    return elem.getAttribute(attribute)
      || getAncestorAttribute(elem.parentElement, attribute);
  }
}

// Gets Item in HTML for an specific Id.
function getHTMLItemById(id) {
  return document.getElementById(id);
}
  
// Returns an attribute from the QTI XML element corresponding
// to an HTML element.
function getQTIAttribute(htmlElem, attribute) {
  let xmlElem = QTI.ROOT.querySelector("#"+htmlElem.getAttribute("id"));
  return xmlElem.getAttribute(attribute);
}

// Returns all assessmentItems in QTI XML domain.
function getQTIAssessmentItems() {
  let items = {};
  [...QTI.ROOT.querySelectorAll("assessmentItem")].forEach(item=>{
    items[identifier(item)] = item;
  });
  return items;
}

// Climbs DOM tree returning all elements of specified type
// which are either immediate children of the item, or immediate
// children of the items ancestors.   Useful for getting applicable
// branchRules, preConditions, itemSessionControls, etc.
function getQTISpecs(item, tagName) {
  let specs = [];
  while (item) {
    specs = specs.concat([...item.children].filter(ch=>ch.tagName==tagName));
    item = item.parentElement;
  }
  return specs;
}

// Returns open/close tag in HTML5 namespace.
function getTags(tag, attribs) {
  const VOIDTAGS = [
    "area", "base", "br", "meta", "col", "command", "embed",
    "hr", "img", "input", "keygen", "link", "meta", "param",
    "source", "track", "wbr",
  ];
  
  let opentag = `<${tag}`, closetag="";

  if (attribs)
    opentag += " "+attribs;
  if (VOIDTAGS.includes(tag)) {
    opentag +=  "/>";
  } else {
    opentag += ">";
    closetag = `</${tag}>`;
  }
  return [opentag,closetag];
}
  
// Converts a name to snake case (with prefixes)
function snakeCase({name, prefix=true}) {
  let outName = "";
  for (var i in name) {
    let letter = name[i];
    if (letter.match(/[A-Z]/))
      letter = "-"+letter.toLowerCase();
    outName += letter;
  }
  return `${prefix?"data-"+PREFIX+"-":""}${outName}`;
}

// Returns the "identifier" attribute.
function identifier(elem) {
  return elem.getAttribute("identifier");
}

// Returns an id of specified scope and prefix, generating one
// if it does not already exist.
function getId(scope, prefix="ID") {
  if (!scope.IDS)
    scope.IDS = {};
  if (!scope.IDS[prefix])
    scope.IDS[prefix] = prefix+randomInteger();
  return scope.IDS[prefix];
}

// Generates a random integer using Math.random
function randomInteger(range={}) {  
  let min = range.min||0;
  let max = range.max||Number.MAX_SAFE_INTEGER;
  let step = range.step||1;
  let maxSteps = (max-min)/step;
  let randomSteps = Math.floor(RANDOM_FUNCTION()*maxSteps);
  return min+(randomSteps*step)
}

// Generates a random float using Math.random
function randomFloat(range={}) {
  let min = range.min||0;
  let max = range.max||Number.MAX_VALUE;
  return min+(RANDOM_FUNCTION()*(max-min));
}

// Selects from the children at random.
function random(elem) {
  let operand = execChildren(elem);
  if (operand.length==1 && Array.isArray(operand[0]))
    operand = operand[0];
  return shuffle(operand)[0];
}

// Generates a random number between 0 <= r < 1, given SEED.
function seededRandom() {
  QTI.SEED = ((QTI.SEED*9301)+49297)%233280;
  return QTI.SEED/233280;
}

// Returns true if the first child expressions are equal after
// rounding.
function equalRounded(elem) {
  return op2(elem, (a,b)=>{
    let f=figures(elem);
    return +a.toFixed(f)==+b.toFixed(f);
  });
}

// Flattens an array
function flatten(items) {
  return [].concat(...items);
}

// Trims spaces from beginning and end of string
// and replaces multiple whitespace chars with single space.
function trim(str) {
  return str.replace(/^\s*/g,"").replace(/\s*$/g,"").replace(/\s+/g," ");
}

// Returns first child by its tag name.
function getFirstChildByTagName(elem, name) {
  let children =  [...elem.children].filter(ch => ch.tagName===name);
  return children.length? children[0]: null;
}

// Replaces element in DOM using innerHTML
function replace(html, replaced) {
  let div = document.createElement("div"), child;
  div.innerHTML = html;
  replaced.parentElement.replaceChild(div.firstElementChild, replaced);
}

// Merges the children and attributes of a source element into a
// target element. Attributes of the source with the same name as
// existing attributes of the target are not merged.
function merge(target, src) {
  if (target && src) {
    [...src.children].reverse().forEach(child=>{
      target.insertBefore(child,target.firstElementChild);
    });
    [...src.attributes].forEach(attrib=>{
      if (!target.getAttribute(attrib.name))
        target.setAttribute(attrib.name, attrib.value)
    });
  }
  return target;
}

// Similar to merge, but merges src attributes into target properties.
// src is an HTML or XML element with attributes and target can be
// just an object.
function mergeAttributes(target, src) {
  if (target && src) {
    [...src.attributes].forEach(attrib=>{
      if (!target[attrib.name])
        target[attrib.name]=attrib.value;
    });
  }
  return target;
}

// Appends element to DOM using innerHTML
function append(html) {
  let div = document.createElement("div"), child;
  div.innerHTML = html;
  while (child = div.firstElementChild) {
    document.body.appendChild(child);
  }
}

// Appends a script element.  This will result in the
// script being executed.
function appendScript(script) {
  let scriptElem = document.createElement("script");
  scriptElem.innerHTML = script
    .replace(/&lt;/g,"<")
    .replace(/&gt;/g,">")
    .replace(/&amp;/g,"&");
  document.documentElement.append(scriptElem);
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

// Returns number of rows in a table.
function tableRows(table) {
  return table.querySelectorAll("tr").length;
}

// Returns number of cols in the first row of a table.
function tableCols(table) {
  let row1 = table.querySelector("tr") || {children:[]};
  return row1.children.length;
}

// Pivots a table in place.  All rows must have the same number of
// columns. New <tr> rows are built with the old <td> and <th>
// cells pivoted. The old <tr> rows and any other children of the
// table, such as <thead>, or <tfoot> are removed.
function pivot(table) {
  let cells = [], rows=0, maxCols=0;
  let target = document.getElementById(table.getAttribute(PIVOT_TARGET));
  [...table.querySelectorAll("tr")].forEach(child=>{
    let row = [], cols=0;
    [...child.children].forEach(cell=>row[cols++]=cell);
    cells[rows++] = row;
    maxCols = Math.max(cols, maxCols);
  });

  if (target)
    table = target;
  [...table.children].forEach(child=>child.remove());
  for(i=0; i<maxCols; i++) {
    let tr = document.createElement("tr");
    for (j=0; j<rows; j++)
      tr.appendChild(cells[j][i]);
    table.appendChild(tr);
  }
}

// Returns base URI of an element.
function getBase(base) {
  return getAncestorAttribute(base, "xml:base")||base.baseURI;
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

// Returns the response variables with non-null values.
function getSetResponseVariables(item) {
  return getResponseVariables(item).filter(decl=>{
    return !(decl.value === null
             || (decl.cardinality=="multiple" && decl.value.length==0));
  });
}

// Returns true if an item has children which can be shown/hidden
// via the showHide mechanism.
function hasTriggerables(item) {
  return item.querySelectorAll(SHOWHIDE_SEL).length;
}

// Returns milliseconds since specified time.
function clock(since=LOAD_TIME) {
  return new Date().getTime()-since.getTime();
}

// Where elements have the same "identifier" attribute,
// adds an "instance" attribute.
function setInstances(dom) {
  let elements = {};
  [...dom.querySelectorAll("[identifier]")].forEach(elem=>{
    let id = identifier(elem);
    let entry = elements[id];
    if (!entry) {
      entry = elements[id] = [];
    }
    entry.push(elem);
  });
  for (key in elements) {
    let seq=0;
    if (elements[key].length>1)
      elements[key].forEach(elem=>elem.setAttribute("instance", ++seq));
  }
}

// Returns a version 4 random UUID in string format.
function uuid_random() {
  let uuid = new Uint8Array(16);
  window.crypto.getRandomValues(uuid);
  uuid[6] = uuid[6] & 0x0f | 0x40;
  uuid[8] = uuid[8] & 0x3f | 0x80;
  return uuid2str(uuid);
}

// Given a UInt8Array of 16 elements (128bits), returns
// a hex string, formatted in the usual 8-4-4-4-12 UUID format.
function uuid2str(uuid) {
  if (!QTI._BTH) {
    QTI._BTH = [];
    // Array of 256, 2-character hex strings.
    for (var i = 0; i < 256; i++)
      QTI._BTH[i] = (i + 0x100).toString(16).substr(1);
  }
  
  let out = "";
  for (let i=0; i<16; i++) {
    if (i==4 || i==6 || i==8 || i==10)
      out += "-";
    out += (uuid[i]>=0 && uuid[i]<256)? QTI._BTH[uuid[i]]: "00";
  }
  return out;
}

// Gets a UUID from storage, creating one if not existing.
function getUuidFromStorage(KEY) {
  let id = window.localStorage.getItem(KEY);
  if (!id) {
    id = uuid_random();
    window.localStorage.setItem(KEY, id);
  }
  return id;
}

