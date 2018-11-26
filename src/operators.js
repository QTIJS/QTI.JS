//////////////////////////////////////////////////////////////////////////////
//
// operators.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** OPERATORS
*/

// Noop
function noOp(elem) {
  return "";
}

// Unary operator on first child
function op(elem, unary) {
  return unary(execChildren(elem,0,1)[0]);
}

// Binary operator on first two children
function op2(elem, binary) {
  let values = execChildren(elem,0,2);
  return binary(values[0],values[1]);
}

// N-ary operator on all children
function opN(elem, n_ary) {
  let values = execChildren(elem);
  values = [].concat.apply([], values);
  return n_ary(values);
}

// Executes a second-level executor in the EXECUTORS array.
// Used for mathOperator, statsOperator, and customOperator.
function oplib(elem, lib) {
  let name = elem.getAttribute("name")||elem.getAttribute("class");
  if (EXECUTORS[lib] && EXECUTORS[lib][name])
    return EXECUTORS[lib][name](elem);    
  WARN("Undefined operator", lib, name);
}

// Reduce children using arbitrary operator
function reduce(elem, reducer, initial) {
  let values = execChildren(elem);
  values = [].concat.apply([], values);
  result = initial!==undefined
    ? values.reduce(reducer, initial)
    : values.reduce(reducer)
  return result;
}

// Returns true if between min and max values in an array are "true-ish"
function anyN(elem) {
  let values = execChildren(elem).filter(v=>v?true:false);
  let max = elem.getAttribute("max")||0;
  let min = elem.getAttribute("min")||0;
  return (max>=min && (values.length<=max) && (values.length>=min));
}

// Returns the length of an array,
function sizeof(values) {
  return values.length;
}

// Returns the mean of an array of numbers.
function mean(values) {
  return values.reduce((a,b)=>(a*1)+(b*1))/values.length;
}

// Returns the sum of differences from y, squared.
function sumOfDiffsSquared(values,y) {
  return values.map(x=>(x-y)*(x-y)).reduce((a,b)=>a+b);
}

// Returns the sample variance of an array
function sampleVariance(values) {
  return sumOfDiffsSquared(values,mean(values))/values.length;  
}

// Returns the population variance of an array
function popVariance(values) {
  return sumOfDiffsSquared(values,mean(values))/(values.length-1);
}

// Returns Greatest Common Divisor of two numbers
function gcd2(a, b) {
  return (!a)? b: gcd2(b % a, a);
}

// Returns Greatest Common Divisor of an array of numbers.
function gcd(numbers) {
  if (!Array.isArray(numbers))
    numbers = [numbers];
  return numbers.reduce(gcd2);
}

// Returns Least Common Multiple of 2 numbers
function lcm2(a, b) {
  return (a*b)/gcd2(a,b);
}

// Computes Least Common Multiple of an array of numbers.
function lcm(numbers) {
  if (!Array.isArray(numbers))
    numbers = [numbers];
  return numbers.reduce(lcm2);
}

// Returns figures attribute
function figures(elem) {
  return elem.getAttribute("figures")*1;
}

// Returns fieldIdentifier attribute
function fieldIdentifier(elem) {
  return elem.getAttribute("fieldIdentifier");
}

// Returns true if value matches or contains identifier.
function member(identifier, value) {
  return value && (Array.isArray(value) && value.includes(identifier));
}

// Returns true if value matches or contains identifier.
function matchesOrMember(identifier, value) {
  return value
    && (identifier==value
        || (Array.isArray(value) && value.includes(identifier)));
}

// Integer divide
function div(a,b) {
  return Math.floor(a/b);
}

// Returns the array, after deleting items equal to e
function del(e, array) {
  return (e && array && array.filter)? array.filter(x=>x!=e) : null
}

// Evaluates elem numberRepeats times, and returns an array
// concatenating all the values.
function repeat(elem) {
  let r = intOrIdentifier(elem, "numberRepeats");
  return flatten(Array.from({length:r}, ()=>opN(elem, flatten)));
}

// Returns the "pattern" attribute of an element,
function pattern(elem) {
  return stringOrIdentifier(elem, "pattern");
}

// Returns an int where the attribute is either
// the integer value or the identifier of an integer variable
function intOrIdentifier(elem, attrib) {
  let value = elem.getAttribute(attrib);
  return variable(elem, value)||(value*1);
}

// Returns a string where the attribute is either
// the integer value or the identifier of a string variable
function stringOrIdentifier(elem, attrib) {
  let value = elem.getAttribute(attrib);
  return variable(elem, value)||(value+"");
}

// Loads XML and replaces element with the result.
// Assumes that the referent is a resource containing a single
// XML node.  Note that xi:include currently uses this, though
// the W3C XML Include spec allows multiple nodes in an included
// resource.
function referent(elem) {
  let href = elem.getAttribute("href");

  if (href) {
    let id = getId(elem);
    DEBUG("referent: launch id=", id);
    loadXml(href, elem, (ref)=> {
      DEBUG("referent: callback id=", id);
      ref = ref.children[0];
      elem.parentElement.replaceChild(merge(ref,elem), elem);
      let loading = document.getElementById(id);
      replace(doTransforms(ref), loading);
      if (ref.tagName=="assessmentItem") {
        setupAssessmentItem(ref);
      } else if (ref.tagName=="assessmentStimulus") {
        setupAssessmentItem(ref);
      } else {
        item = getQTIAssessmentItem(ref);
        if (item)
          setupAssessmentItem(item);
      }
    });
    return `<loading id="${id}"></loading>`;
  } else {
    return "";
  }
}

// Maps the value of a response variable through the
// mapping specified for the variable.
function mapResponse(elem) {
  let decl = getDeclarations(elem)[identifier(elem)];
  let lookupMethod = function(K) {
    let entry = decl.mapping.entries[K];
    if (!entry && decl.baseType=="pair")
      entry = decl.mapping.entries[swapPair(K)];
    return entry? entry.mappedValue: decl.mapping.defaultValue;
  }
  return mapMethod(decl, lookupMethod);
}

// Builds a pair with members swapped.
function swapPair(pair) {
  let [a, b] = pair.split(" ");
  return [b, a].join(" ");
}

// Maps the point value of a response variable through the
// areaMapping specified for the variable
function mapResponsePoint(elem) {
  let decl = getDeclarations(elem)[identifier(elem)];
  let lookupMethod = function(point) {
    for (let a in decl.areaMapping.entries) {
      let area = decl.areaMapping.entries[a];
      if (Array.isArray(point))
        point = point[0];
      if (inside(area, point))
        return area.mappedValue;
    }
    return decl.areaMapping.defaultValue;
  }
  return mapMethod(decl, lookupMethod);
}

// Calls "method" or maps it over a "multiple" or "ordered" value,
// followed by a reduce (sum).
function mapMethod(decl, method, value=decl.value) {
  if (decl.cardinality=="multiple" || decl.cardinality=="ordered") {
    if (!Array.isArray(value))
      value = [value];
    return value.map(method).reduce((acc,val)=>acc*1+val*1, 0);
  } else {
    return method(value)*1;
  }
}

// Converts the shape and coords attributes on an element
// to an object, for use with "inside".
function area(elem) {
  return {shape:elem.getAttribute("shape"),
          coords:elem.getAttribute("coords")};
}

// Returns true if the point is inside the area.
function inside(area, point) {
  let [x,y] = point.split(" ");
  let coords = area.coords.split(",");

  coords = coords.map(coord=>+coord);
  switch(area.shape) {
  case "circle":
    return pointInCircle(x, y, coords);
  case "poly":
    return pointInPolygon(x, y, coords);
  case "rect":
    return pointInRectangle(x, y, coords);
  case "default":
    return true;
  case "ellipse":
    WARN("Ellipse deprecated");
  default:
    WARN("Unsupported or invalid shape", area.shape);
    return true;
  }
}

// Helper for inside, handles circle shapes.
function pointInCircle(x, y, coords) {
  let [cx, cy, r] = coords;
  return ((cx-x)*(cx-x) + (cy-y)*(cy-y)) < r*r; 
}

// Helper for inside, handles polygon shapes.
function pointInPolygon(x, y, coords) {
  let points = [], inside = false;
  while (c<coords.length)
    points.push({x:coords[c++],y:coords[c++]});
  for (let i=0, j=points.length-1; i<points.length; j=i++) {
    let xi = points[i].x, yi = points[i].y;
    let xj = points[j].x, yj = points[j].y;
    if (((yi>y)!=(yj>y)) && (x<(xj-xi)*(y-yi)/(yj-yi)+xi))
      inside = !inside;
  }
  return inside;
}

// Helper for inside, handles rectangle shapes.
function pointInRectangle(x, y, coords) {
  let [x0, y0, x1, y1] = coords;
  return x>x0 && x<x1 && y>y0 && y<y1;
}
  
// Returns true if arguments "match".
function match(a, b) {
  let result =
      a==b
      || (Array.isArray(a) && Array.isArray(b) && a.length==b.length
          && a.filter(v=>!b.includes(v)).length==0);
  return result;
}

////////////////////////////
// TODO: REWORK getDeclarationContext into getDeclaration
////////////////////////////

// Climbs DOM tree looking for an element with declarations and
// returns the element.
function getDeclarationContext(elem) {
  while (elem &&
         !((elem.tagName=="assessmentItem"||elem.tagName=="assessmentTest")
           && elem.declarations))
    elem = elem.parentElement;
  return elem;
}

// Sets the completionStatus variable.
function setCompletionStatus(elem, status, when) {
  let ctx = getDeclarationContext(elem);
  if (ctx && ctx.declarations) {
    let completionStatus = ctx.declarations["completionStatus"];
    if (completionStatus) {
      if (when == completionStatus.value){
        let prevValue = completionStatus.value;
        completionStatus.value = status;
        logVarChange("setCompletionStatus", completionStatus, prevValue);
      }
    }
  }
}

// Returns value of variable.
function variable(elem, id=identifier(elem),
                  weightIdentifier=elem.getAttribute("weightIdentifier")) {
  let idparts = id.split(".");
  let ctx, decl, result;

  if (idparts.length==1) {
    ctx = getDeclarationContext(elem);
  } else {
    let itemId, instance;
    if (idparts.length==2) {
      [itemId, id] = idparts;
    } else {
      [itemId, instance, id] = idparts;
      itemId = itemId + "." + instance;
    }
    ctx = getQTIItemById(itemId);
  }
  if (ctx) {
    decl = ctx.declarations[mapVariable(ctx,id)];
    result = decl? coerce(decl, decl.value, getDefaultValue(decl)): null;
  }
  if (!result && result!==0) {
    result = null;    
  } else if (weightIdentifier && decl.baseType && decl.baseType=="float") {
    result = result * getWeight(ctx, weightIdentifier);
  }
  DEBUG("variable", elem, ctx? identifier(ctx): null, result);
  return result;
}

function getWeight(item, weightIdentifier) {
  let weight = item.querySelector(`weight[identifier=${weightIdentifier}]`);
  return weight? 1.0*weight.getAttribute("value") : 1.0;
}

// Maps variable through variableMappings, if any;
function mapVariable(elem, id) {
  let mapping = elem.querySelector(`variableMapping[targetIdentifier="${id}"]`);
  if (mapping)
    id = mapping.getAttribute("sourceIdentifier")||id;
  return id;
}
  
// Returns values of a variable across all assessmentItems.
function testVariables(elem) {
  let variableIdentifier = elem.getAttribute("variableIdentifier");
  let weightIdentifier = elem.getAttribute("weightIdentifier");
  let includeNulls = elem.getAttribute("includeNulls")==="true";
  let filters = getVariableFilters(elem);
  let result = [...QTI.ROOT.querySelectorAll("assessmentItem")]
      .filter(item=>filterItem(item, filters))
      .map(item=>variable(item,variableIdentifier,weightIdentifier))
      .filter(v=>includeNulls || v!=null);
  DEBUG("testVariables", result);
  return result;
}

function filterItem(item, filters) {      
  let result = 
      ((!filters.category
        || ((!filters.includeCategory
             || filters.category===filters.includeCategory)
            && (!filters.excludeCategory
                || filters.category!==filters.excludeCategory)))
       && (!filters.section || inSection(item, filters.section)))
  return result;
}

function getVariableFilters(elem) {
  let sectionIdentifier = elem.getAttribute("sectionIdentifier");
  let section = sectionIdentifier
      ? QTI.DOM.querySelector(`[identifier=${sectionIdentifier}]`)
      : null;
  return {
    category: elem.getAttribute("category"),
    sectionIdentifier: sectionIdentifier,
    section: section,
    includeCategory: elem.getAttribute("includeCategory"),
    excludeCategory: elem.getAttribute("excludeCategory"),
  };
}

//////////////////////////////////////////////
// TODO: these need to handle id.instance prefixes the same
// as test variables and maybe??? mapVariable
//////////////////////////////////////////////

// Returns attributes of an item variable across all assessmentItems.
function testAttributes(elem) {
  let attrib = elem.getAttribute("attribute")
      || elem.tagName.replace("outcome","normal");
  let outcomeIdentifier = elem.getAttribute("outcomeIdentifier");
  let weightIdentifier = elem.getAttribute("weightIdentifier");
  let includeNulls = elem.getAttribute("includeNulls")==="true";
  let filters = getVariableFilters(elem);
  return [...QTI.ROOT.querySelectorAll("assessmentItem")]
    .filter(item=>filterItem(item, filters))
    .map(i=>declAttribute(i,attrib,outcomeIdentifier)) // weightIdentifier
    .filter(v=>includeNulls || v!=null);
}

// Gets attribute of a variable, such as "defaultValue", "correctResponse"
function getVarAttribute(elem, attribute) {
  let id = identifier(elem);
  return declAttribute(elem, attribute, id);
}

// Returns attribute of an outcome variable, e.g. normalMaximum.
function declAttribute(elem, attrib, id=identifier(elem),
  weightIdentifier=elem.getAttribute("weightIdentifier")) {
  let decl = getDeclarations(elem)[id]
  let result = decl? decl[attrib]: null;
  if (!result && result!==0) {
    result = null;    
  } else if (weightIdentifier && decl.baseType && decl.baseType=="float") {
    result = result * getWeight(elem, weightIdentifier);
  }
  return result;
}

// Returns the default value.
function getDefaultValue(decl) {
  return decl.defaultValue;
}

// Returns an array of assessmentItem identifiers.
function itemIdentifiers(elem) {
  let items = [...QTI.ROOT.querySelectorAll("assessmentItem")]
  return items.map(i=>`<a href="#${i.id}">${identifier(i)}</a>`);
}

// Get range min/max/step attributes from element.
function getRange(elem) {
  let range = {
    min:(elem.getAttribute("min")*1)||0,
    max:(elem.getAttribute("max")*1)||0,
    step:(elem.getAttribute("step")*1)||1,
  }
  return range;
}

// Counts items
function countItems(elem, selOp) {
  let filters = getFilters(elem);
  return QTI.SEQUENCE.filter(selOp)
    .filter(item=>filterItem(item.elem, filters))
    .length;
}

// Returns true if the item is "selected".  Since the
// selection/ordering logic removes items from the QTI DOM
// which aren't "selected", all items remaining in the DOM are
// "selected".
function isSelected(frame) {
  return frame.elem.tagName=="assessmentItem";
}

// Returns true if the item is "presented".  The session control
// logic sets the "presented" attribute on items which are to count
// as presented.
function isPresented(frame) {
  return frame.elem.tagName=="assessmentItem"  && frame.presented;
}

// Returns true if at least one interaction in an item has a "response"
function isResponded(frame) {
  return frame.elem.tagName=="assessmentItem"
    && getResponses(frame.elem).length>0;
}

// Returns the response variables with non-null and non-default values.
function getResponses(item) {
  return getResponseVariables(item).filter(decl=>{
    return !(decl.value === null
             || (decl.defaultValue && match(decl.defaultValue, decl.value))
             || (decl.cardinality=="multiple" && decl.value.length==0));
  });
}

// 
// Returns true if all the response variables for the item which have
// the specified property ("correctResponse" or "defaultValue")
// defined have a value which matches the property.
function valueMatches(frame, prop) {
  if (frame.elem.tagName=="assessmentItem") {
    let vars = getResponseVariables(frame.elem).filter(decl=>decl[prop]);
    let matches = vars.filter(decl=>decl.value && match(decl[prop], decl.value));
    return matches.length==vars.length;
  } else {
    return false;
  }
}

// Returns true if all item responses where there is a correctResponse
// match that correctResponse.
function isCorrect(frame) {
  return valueMatches(frame, "correctResponse");
}

// Returns true if an item has at least one response which is
// not correct.
function isIncorrect(frame) {
  return isResponded(frame) && !isCorrect(frame);
}

// Returns true if all item responses where there is a defaultValue
// match that defaultValue.
function isDefault(frame) {
  return valueMatches(frame, "defaultValue");
}

// Selects from the children at random.
function random(elem) {
  let operand = execChildren(elem);
  if (operand.length==1 && Array.isArray(operand[0]))
    operand = operand[0];
  return shuffle(operand)[0];
}

// Returns true if the first two child expressions are equal after
// rounding.
function equalRounded(elem) {
  return op2(elem, (a,b)=>{
    let f=figures(elem);
    return +a.toFixed(f)==+b.toFixed(f);
  });
}

// Logs textContent of element on console.
function consoleLog(elem) {
  console.log("console: ",trim(elem.textContent));
}

// Sets attribute of a variable, such as "correctResponse".
// Used by "correct" and "default" operators.
function setVarAttribute(elem, values) {
  execChildren(elem);
  if (!values)
    values = elem.values;
  let parent = elem.parentElement;
  let id = identifier(parent);
  let decl = getDeclarations(elem)[id];
  decl[elem.tagName] = coerce(decl, values);
}
