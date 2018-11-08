//////////////////////////////////////////////////////////////////////////////
//
// extensions.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** EXTENSIONS
*/

// Invoked when the tagName of the element being exec'ed is not in the
// EXECUTORS array.  This includes HTML5, SSML, MathML, and elements
// from other namespaces, such as xml:base or xi:include. Goes down
// the list of extension handlers, offering the element to each one,
// until one of them indicates that it has handled the element.  This
// is also how QTI "extension points", like customInteraction, are
// mapped to an implementation.
function extension(elem, context) {
  let result;
  for (let handler of QTI.EXTENSION_HANDLERS) {
    result = handler(elem, context);
    if (result && result.handled)
      return result.value;
  }
  return null;
}

// Registers an extension handler, putting it at the head
// of the registered handler list.
function registerExtension(handler) {
  QTI.EXTENSION_HANDLERS.unshift(handler);
}

// Registers an operator in the EXECUTORS[lib] array.
function registerOperator(name, operator, lib="CUSTOM_OPERATORS") {
  if (lib && name && operator) {
    if (!EXECUTORS[lib])
      EXECUTORS[lib] = [];
    EXECUTORS[lib][name] = operator;
  }
}

/*
** EXTENSION HANDLERS
*/

// Default extension handler for xi:include.  This handler invokes the
// referent executor, which replaces the xi:include element with the
// inclusion target, assuming that the inclusion target is a single
// node.
function include(elem) {
  if (elem.tagName==="xi:include") {
    return {handled:true, value:referent(elem)};
  }
}

// Default extension handler for customOperator. Delegates it to oplib
// (which also handles "mathOperator" and "statsOperator" elements).
// oplib assumes the "lib" and the "name" or "class" to execute are
// attributes of the element. If executed during a transform, this
// just returns {handled:true}, so the operator and its children are
// not emitted into the HTML.  The meaning of the "definition"
// attribute, if present, as well as any custom attributes, is a matter
// for the code implementing the operator.
function customOperator(elem) {
  if (elem.tagName==="customOperator") {
    let lib = elem.getAttribute("lib");
    return {
      handled:true,
      value: !QTI.TRANSFORMING? oplib(elem, lib||"CUSTOM_OPERATORS"): null,
    }
  } else if (elem.tagName==="debugOperator") {
    return {
      handled:true,
      value: !QTI.TRANSFORMING? oplib(elem, "DEBUG_OPERATORS"): null,
    }
  }    
}

// Default extension handler for customInteraction.  Just does a
// normal transform, emitting the customInteraction as
// a <div data-qtijs-tag="customInteraction">, etc.
function customInteraction(elem) {
  if (elem.tagName==="customInteraction")
    return {handled:true, value:transform(elem)};
}

// This extension handler explicitly clones a "script" element in the
// QTI XML as an HTML5 script and appends it to the HTML document.
// This results in the script being executed. Note that script tags
// are syntactically correct QTI XML only if they are inside QTI
// "extension points", like customInteraction, although this code
// doesn't check for that.
function script(elem) {
  let handled = false;
  if (elem.tagName==="script") {
    let src = elem.getAttribute("src");
    if (src) {
      let scriptElem = document.createElement("script");
      scriptElem.setAttribute("src",src);
      setTimeout(function() {
        document.documentElement.append(scriptElem);
        DEBUG("loaded script", scriptElem);
      }, 2000);
    } else {
      appendScript(elem.innerHTML);
    }
    handled = true;
  }
  return {handled: handled};
}

// Rewrites href and src URLs so that they are absolute, taking
// xml:base into consideration.  
function xmlbase(elem) {
  for (let attribute of ["src","href"]) {
    let v = elem.getAttribute(attribute);
    if (v)
      elem.setAttribute(attribute, new URL(v, getBase(elem)));
  }
  return {handled: false};
}
                          
// Default "last chance" extension handler.  Emits the element
// verbatim into the HTML DOM. If the element has any children, they
// will go through the usual transform, which may be something other
// than "verbatim".
//
// This handler is how HTML5, SSML, MathML, SVG, Web Component,
// future QTI version, or otherwise unrecognized elements are transformed
// "as is" from the QTI XML input to HTML. With "verbatim" as the
// "last chance" handler, QTI.JS copies all unrecognized elements in
// the XML input to the HTML DOM, not just "official" v2.2 QTI elements.
function verbatim(elem) {
  let attribs=[...elem.attributes].map(a=>`${a.name}="${a.value}"`).join(" ");
  let [opentag, closetag] = getTags(elem.tagName, attribs);
  let content = transformChildren(elem).join(" ");
  return {handled:true, value:[opentag,content,closetag].join("")};
}

