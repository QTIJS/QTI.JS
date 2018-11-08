//////////////////////////////////////////////////////////////////////////////
//
// executors.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** EXECUTORS
*/

// The QTI XML element names map to "executor" functions
// which are run when the QTI element is "exec"-ed.  The
// EXECUTORS object provides this mapping.

const EXECUTORS = {
  // Assessments/Sections/Items
  assessmentItem:              transform,
  assessmentItemRef:           referent,
  assessmentSection:           transform,
  assessmentSectionRef:        info,
  assessmentStimulus:          transform,
  assessmentStimulusRef:       referent,
  assessmentTest:              transform,
  branchRule:                  expression, 
  feedbackBlock:               transform,
  feedbackInline:              transform,
  infoControl:                 transform,
  itemBody:                    transform,
  itemSessionControl:          info,
  modalFeedback:               transform,
  ordering:                    extension,
  preCondition:                expression,
  printedVariable:             transform,
  prompt:                      transform,
  selection:                   extension,
  stimulusBody:                transform,
  stylesheet:                  transform,
  templateBlock:               transform,
  templateDefault:             templateDefault,
  templateInline:              transform,
  testFeedback:                transform,
  testPart:                    transform,
  timeLimits:                  transform,
  variableMapping:             info,
  weight:                      info,

  // Interactions
  associateInteraction:        interaction,
  choiceInteraction:           interaction,
  drawingInteraction:          interaction,
  endAttemptInteraction:       interaction,
  extendedTextInteraction:     interaction,
  gapMatchInteraction:         interaction,
  graphicAssociateInteraction: interaction,
  graphicGapMatchInteraction:  interaction,
  graphicOrderInteraction:     interaction,
  hotspotInteraction:          interaction,
  hottextInteraction:          interaction,
  inlineChoiceInteraction:     interaction,
  matchInteraction:            interaction,
  mediaInteraction:            interaction,
  orderInteraction:            interaction,
  positionObjectInteraction:   interaction,
  selectPointInteraction:      interaction,
  sliderInteraction:           interaction,
  textEntryInteraction:        interaction,
  uploadInteraction:           interaction,
  customInteraction:           extension,
  
  // Interaction Building blocks
  associableHotspot:           transform,
  gap:                         transform,
  gapImg:                      transform,
  gapText:                     transform,
  hotspotChoice:               transform,
  hottext:                     transform,
  inlineChoice:                transform,
  object:                      transform,
  positionObjectStage:         transform,
  rubricBlock:                 transform,
  simpleAssociableChoice:      transform,
  simpleChoice:                transform,
  simpleMatchSet:              transform,

  // Variables
  areaMapEntry:                mapEntry,
  areaMapping:                 mapping,
  correctResponse:             setVarAttribute,
  defaultValue:                setVarAttribute,
  interpolationTable:          mapping,
  interpolationTableEntry:     mapEntry,
  mapEntry:                    mapEntry,
  mapping:                     mapping, 
  matchTable:                  mapping,
  matchTableEntry:             mapEntry,
  outcomeDeclaration:          declaration,
  responseDeclaration:         declaration,
  templateDeclaration:         declaration,
  value:                       value,
  
  // Processing
  exitResponse:                elem => { throw "exitResponse" }, 
  exitTemplate:                elem => { throw "exitTemplate" },
  exitTest:                    elem => { throw "exitTest" },
  lookupOutcomeValue:          lookupOutcomeValue,
  outcomeCondition:            condition,
  outcomeElse:                 processing,
  outcomeElseIf:               conditionIf,
  outcomeIf:                   conditionIf,
  outcomeProcessing:           processing,
  outcomeProcessingFragment:   fragment,
  responseCondition:           condition,
  responseElse:                processing,
  responseElseIf:              conditionIf,
  responseIf:                  conditionIf,
  responseProcessing:          processing,
  responseProcessingFragment:  fragment,
  setCorrectResponse:          elem => setAtt(elem, "correctResponse"),
  setDefaultValue:             elem => setAtt(elem, "defaultValue"),
  setOutcomeValue:             elem => setVar(elem),
  setTemplateValue:            elem => setVar(elem),
  templateCondition :          condition,
  templateConstraint:          constraint,
  templateElse:                processing,
  templateElseIf:              conditionIf,
  templateIf:                  conditionIf,
  templateProcessing:          processing,

  // Processing Operators
  and:                         elem => reduce(elem, (a,b)=>a && b),
  anyN:                        elem => anyN,
  baseValue:                   elem => elem.innerHTML, // elem.textContent ?
  containerSize:               elem => opN(elem, sizeof),
  contains:                    elem => op2(elem, (a,b)=>a.includes(b)),
  correct:                     elem => getVarAttribute(elem, "correctResponse"),
  customOperator:              extension,
  "default":                   elem => getVarAttribute(elem, "defaultValue"),
  "delete":                    elem => op2(elem, del),
  divide:                      elem => op2(elem, (a,b)=>a / b),
  durationGTE:                 elem => op2(elem, (a,b)=>a >= b),
  durationLT:                  elem => op2(elem, (a,b)=>a < b),
  equal:                       elem => op2(elem, match),
  equalRounded:                elem => equalRounded,
  fieldValue:                  elem => op(elem, a => a[fieldIdentifier(elem)]),
  gcd:                         elem => gcd(opN(elem,flatten)),
  gt:                          elem => op2(elem, (a,b)=>a > b),
  gte:                         elem => op2(elem, (a,b)=>a >= b),
  index:                       elem => op(elem, a=>a[intOrIdentifier(elem,"n")-1]),
  inside:                      elem => op(elem, pt=>inside(area(elem), pt)),
  integerDivide:               elem => op2(elem, (a,b)=>div(a,b)),
  integerModulus:              elem => op2(elem, (a,b)=>a % b),
  integerToFloat:              elem => op(elem, a=>a*1.0),
  isNull:                      elem => op(elem, a=>a==null),
  lcm:                         elem => lcm(opN(elem,flatten)),
  lt:                          elem => op2(elem, (a,b)=>a < b),
  lte:                         elem => op2(elem, (a,b)=>a <= b),
  mapResponse:                 mapResponse,
  mapResponsePoint:            mapResponsePoint,
  match:                       elem => op2(elem, match),
  mathConstant:                elem => oplib(elem, "MATH_CONSTANTS"),
  mathOperator:                elem => oplib(elem, "MATH_OPERATORS"),
  max:                         elem => reduce(elem, (a,b)=>Math.max(a,b)),
  member:                      elem => op2(elem, member),
  min:                         elem => reduce(elem, (a,b)=>Math.min(a,b)),
  multiple:                    elem => opN(elem,flatten),
  not:                         elem => op2(elem, a=>!a),
  "null":                      elem => null,
  numberCorrect:               elem => countItems(elem, isCorrect),
  numberIncorrect:             elem => countItems(elem, isIncorrect),
  numberPresented:             elem => countItems(elem, isPresented),
  numberResponded:             elem => countItems(elem, isResponded),
  numberSelected:              elem => countItems(elem, isSelected),
  or:                          elem => reduce(elem, (a,b)=>a || b),
  ordered:                     elem => opN(elem,flatten),
  outcomeMaximum:              testAttributes,
  outcomeMinimum:              testAttributes,
  patternMatch:                elem => op(elem, s=>s.match(pattern(elem))),
  power:                       elem => op2(elem, Math.pow),
  product:                     elem => reduce(elem, (a,b)=>a * b),
  random:                      random,
  randomFloat:                 elem => randomFloat(getRange(elem)),
  randomInteger:               elem => randomInteger(getRange(elem)),
  repeat:                      repeat,
  round:                       elem => op(elem, Math.round),
  roundTo:                     elem => op(elem, a=>+a.toFixed(figures(elem))),
  statsOperator:               elem => oplib(elem, "STATS_OPERATORS"),
  stringMatch:                 elem => op2(elem, match),
  substring:                   elem => op2(elem, (a,b)=> a && b && b.indexOf(a)>=0),
  subtract:                    elem => op2(elem, (a,b)=> (+a) - (+b)),
  sum:                         elem => reduce(elem, (a,b)=> (+a) + (+b), 0),
  testVariables:               testVariables,
  truncate:                    elem => op(elem, Math.floor),
  variable:                    variable,

  MATH_CONSTANTS: {
    pi:                        elem => Math.PI,
    e:                         elem => Math.E,
  },

  MATH_OPERATORS: {
    acos:                      elem => op(elem, x => Math.acos(x*1)),
    acot:                      elem => op(elem, x => Math.PI/2-Math.atan(1/x)),
    acsc:                      elem => op(elem, x => Math.PI/2-Math.asin(1/x)),
    asec:                      elem => op(elem, x => Math.PI/2-Math.acos(1/x)),
    asin:                      elem => op(elem, x => Math.asin(x*1)),
    atan:                      elem => op(elem, x => Math.atan(x*1)),
    atan2:                     elem => op2(elem, (x,y) => Math.atan2(x,y)),
    cos:                       elem => op(elem, x => Math.cos(x*1)),
    cot:                       elem => op(elem, x => 1/Math.tan(x*1)),
    csc:                       elem => op(elem, x => 1/Math.sin(x*1)),
    sec:                       elem => op(elem, x => Math.sec(x*1)),
    sin:                       elem => op(elem, x => Math.sin(x*1)),
    tan:                       elem => op(elem, x => Math.tan(x*1)),
    cosh:                      elem => op(elem, x => Math.cosh(x*1)),
    csch:                      elem => op(elem, x => 1/Math.sinh(x*1)),
    sech:                      elem => op(elem, x => 1/Math.cosh(x*1)),
    sinh:                      elem => op(elem, x => Math.sinh(x*1)),
    tanh:                      elem => op(elem, x => Math.tanh(x*1)),
    abs:                       elem => op(elem, x => Math.abs(x*1)),
    ceil:                      elem => op(elem, x => Math.ceil(x*1)),
    exp:                       elem => op(elem, x => Math.exp(x*1)),
    floor:                     elem => op(elem, x => Math.floor(x*1)),
    ln:                        elem => op(elem, x => Math.log(x*1)),
    log:                       elem => op(elem, x => Math.log10(x*1)),
    signum:                    elem => op(elem, x => Math.sign(x*1)),
    toDegrees:                 elem => op(elem, x => x * 180/Math.PI),
    toRadians:                 elem => op(elem, x => x * Math.PI/180),
  },

  STATS_OPERATORS: {
    mean:                      elem => opN(elem, mean),
    popSD:                     elem => Math.sqrt(opN(elem, popVariance)),
    sampleSD:                  elem => Math.sqrt(opN(elem, sampleVariance)),
    popVariance:               elem => opN(elem, popVariance),
    sampleVariance:            elem => opN(elem, sampleVariance),
  },

  DEBUG_OPERATORS: {
    console:                   consoleLog,
    itemIdentifiers:           itemIdentifiers,
    testAttributes:            testAttributes,
  },

  CUSTOM_OPERATORS: {
  },
};

// Maps the element tagName through EXECUTORS and invokes
// the executor, or the extension mechanism if the tagName has
// no executor.
function exec(elem, ctx) {
  let executor = EXECUTORS[elem.tagName];
  let result = executor? executor(elem,ctx): extension(elem,ctx);
  VERBOSE("exec", elem.tagName, result);
  return result;
}

// Execs the child elements and child text nodes
// of an element, returning an array of the results.
function transformChildren(elem) {
  let children = [...elem.childNodes];
  children = shouldBeShuffled(elem)? shuffleNodes(children): children;
  return children.map(node=>{
    switch(node.nodeType) {
    case Node.ELEMENT_NODE:
      return EXECUTORS[node.tagName]? exec(node): extension(node);
    case Node.TEXT_NODE:
      return trim(node.textContent);
    case Node.COMMENT_NODE:
      return "";
    default:
      WARN("unhandled node type", elem, node.nodeType, node);
      return "";
    }
  });    
}

// Does nothing quietly.
function no_transform(elem) {
  return null;
}

// Alias for no_transform.
function info(elem) {
  return no_transform(elem);
}

// Does nothing, noisily.
function tbd(elem) {
  DEBUG("TBD:", elem.tagName);
  return no_transform(elem);
}

