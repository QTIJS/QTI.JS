//////////////////////////////////////////////////////////////////////////////
//
// constants.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// HTML Domain.  Attributes are all prefixed with data-PREFIX-
// Class names are prefixed with PREFIX.  PREFIX is "qtijs", but
// can be changed globally by editing the following line.
const PREFIX            = "qtijs";

// data-* attributes
const ID                = `data-${PREFIX}-identifier`;
const OUTCOME_ID        = `data-${PREFIX}-outcome-identifier`;
const RESPONSE_ID       = `data-${PREFIX}-response-identifier`;
const TEMPLATE_ID       = `data-${PREFIX}-template-identifier`;
const GAP_FILL_ID       = `data-${PREFIX}-gap-fill-id`;
const ITEM              = `data-${PREFIX}-item`;
const ACCESS            = `data-${PREFIX}-access`;
const MATCHES           = `data-${PREFIX}-matches`;
const MATCH_MAX         = `data-${PREFIX}-match-max`;
const MAXCOLS           = `data-${PREFIX}-max-cols`;
const MESSAGE           = `data-${PREFIX}-message`;
const NAVMODE           = `data-${PREFIX}-navigation-mode`;
const SUBMISSION_MODE   = `data-${PREFIX}-submission-mode`;
const PIVOT_TARGET      = `data-${PREFIX}-pivot-target`;
const SHOWHIDE          = `data-${PREFIX}-show-hide`;
const TAG               = `data-${PREFIX}-tag`;
const ENDPOINT1         = `data-${PREFIX}-endpoint1`;
const ENDPOINT2         = `data-${PREFIX}-endpoint2`;
const SUFFIX            = `data-${PREFIX}-suffix`;
const DELIMITER         = `data-${PREFIX}-delimiter`;
const PREFIX_ATTRIB     = `data-${PREFIX}-prefix`;

// class and CSS custom property names
const ASSOCIATE_TABLE   = `${PREFIX}-associate-table`;
const BLOCK             = `${PREFIX}-block`;
const CHOICE            = `${PREFIX}-choice`;
const CHOICES           = `${PREFIX}-choices`;
const CLICKED           = `${PREFIX}-clicked`;
const COMMENT           = `${PREFIX}-comment`;
const CURRENT           = `${PREFIX}-current`;
const COMPLETED         = `${PREFIX}-completed`;
const DISABLED          = `${PREFIX}-disabled`;
const DRAGGING          = `${PREFIX}-dragging`;
const DRAGOVER          = `${PREFIX}-dragover`;
const DRAWING_TOOLS     = `${PREFIX}-drawing-tools`;
const ENDPOINT          = `${PREFIX}-endpoint`;
const EVAPORATE         = `${PREFIX}-evaporate`;
const FILLED            = `${PREFIX}-filled`;
const FIRST             = `${PREFIX}-first`;
const GAP               = `${PREFIX}-gap`;
const GAP_IMAGE         = `${PREFIX}-gap-image`;
const GAP_TEXT          = `${PREFIX}-gap-text`;
const GHOST             = `${PREFIX}-ghost`;
const HEADER            = `${PREFIX}-header`;
const HOTSPOT           = `${PREFIX}-hotspot`;
const HOTTEXT_WRAP      = `${PREFIX}-hottext-wrap`;
const INLINE            = `${PREFIX}-inline`;
const INPUT_WRAP        = `${PREFIX}-input-wrap`;
const INTERACTION       = `${PREFIX}-interaction`;
const ITEM_WRAP         = `${PREFIX}-item-wrap`;
const LAST              = `${PREFIX}-last`;
const MANDATORY         = `${PREFIX}-mandatory`;
const MARKER            = `${PREFIX}-marker`;
const MATCH             = `${PREFIX}-match`;
const MATCHED           = `${PREFIX}-matched`;
const MATCH_TABLE       = `${PREFIX}-match-table`;
const MAX_MATCHES       = `${PREFIX}-max-matches`;
const NAVIGATION        = `${PREFIX}-navigation`;
const NEXT              = `${PREFIX}-next`;
const NO_REVIEW         = `${PREFIX}-no-review`;
const NOT_ATTEMPTABLE   = `${PREFIX}-not-attemptable`;
const OFFSTAGE          = `${PREFIX}-offstage`;
const ORDER             = `${PREFIX}-order`;
const POPUP             = `${PREFIX}-popup`;
const OVERTIME          = `${PREFIX}-overtime`;
const PIVOTABLE         = `${PREFIX}-pivotable`;
const PREV              = `${PREFIX}-prev`;
const REVIEW_MODE       = `${PREFIX}-review-mode`;
const SELECTED          = `${PREFIX}-selected`;
const SELECTION_AREA    = `${PREFIX}-selection-area`;
const STAGE             = `${PREFIX}-stage`;
const STATUS            = `${PREFIX}-status`;
const SUBMIT            = `${PREFIX}-submit`;
const SUBMITTABLE       = `${PREFIX}-submittable`;
const SUBMITTED         = `${PREFIX}-submitted`;
const THUMB             = `${PREFIX}-thumb`;
const TRIGGERED         = `${PREFIX}-triggered`;
const UNDERTIME         = `${PREFIX}-undertime`;
const WRAP              = `${PREFIX}-wrap`;

// custom CSS properties
const SCROLL_TO         = `--${PREFIX}-scroll-to`;
const THEME_SCRIPT      = `--${PREFIX}-theme-script`;

// selectors
const ASSOC_TABLE_SEL   = `.${ASSOCIATE_TABLE}`;
const CHOICES_SEL       = `.${CHOICES}`;
const CLICKED_SEL       = `.${CLICKED}`;
const DRAGGING_SEL      = `.${DRAGGING}`;
const DRAGOVER_SEL      = `.${DRAGOVER}`;
const GAP_IMG_SEL       = `[${TAG}="gapImg"]`;
const GAP_SEL           = `.${GAP}`;
const GAP_TEXT_SEL      = `[${TAG}="gapText"]`;
const GHOST_SEL         = `.${GHOST}`;
const HOTSPOT_SEL       = `.${HOTSPOT}`;
const INTERACTION_SEL   = `.${INTERACTION}`;
const ITEM_SEL          = `[${TAG}="assessmentItem"]`;
const ITEM_REF_SEL      = `[${TAG}="assessmentItemRef"]`;
const LINEAR_SEL        = `[${NAVMODE}=linear]`
const MATCH_SEL         = `.${MATCH}`;
const MATCHED_GAP_SEL   = `.${GAP}.${MATCHED}`
const MODAL_SEL         = `[${TAG}="modalFeedback"]`;
const NAVIGATION_SEL    = `.${NAVIGATION}`;
const PIVOTABLE_SEL     = `table.${PIVOTABLE}`;
const PRINTEDVAR_SEL    = `[${TAG}="printedVariable"]`;
const SHOWHIDE_SEL      = `[${SHOWHIDE}]`;
const SIMPLECHOICE_SEL  = `[${TAG}="simpleChoice"]`;
const STIMULUS_SEL      = `[${TAG}=assessmentStimulus]`;
const STYLESHEET_SEL    = `assessmentTest > stylesheet`;
const TESTPART_SEL      = `[${TAG}="testPart"]`;
const TEST_FDBK_SEL     = `[${TAG}="testFeedback"]`;
const TIME_LIMITS_SEL   = `[${TAG}="timeLimits"]`;

const CURRENT_ITEM_SEL  = `${ITEM_SEL}.${CURRENT}`;
const CURRENT_TEST_FDBK_SEL = `${TEST_FDBK_SEL}.${CURRENT}`;
const CURRENT_FRAME_SEL = `${CURRENT_ITEM_SEL},${CURRENT_TEST_FDBK_SEL}`;

// message identifiers
const MSG_OK            = `${PREFIX}-msg-ok`;
const MSG_NONE          = `${PREFIX}-msg-none`;   
const MSG_NO_SKIP       = `${PREFIX}-msg-no-skip`;
const MSG_TOO_MANY      = `${PREFIX}-msg-too-many`;
const MSG_TOO_FEW       = `${PREFIX}-msg-too-few`;
const MSG_MISMATCH      = `${PREFIX}-msg-match-not-allowed`;

// history keys
const KEY_USERID        = `${PREFIX}-user-id`;
const KEY_SESSIONID     = `${PREFIX}-session-id`;

const BUILTIN_DECLARATIONS = {
  numAttempts: {
   identifier:  "numAttempts",
    value:       0,
    baseType:    "integer",
    cardinality: "single",
  },
  duration: {
    identifier:  "duration",
    value:       null,
    baseType:    "duration",
    cardinality: "single",
  },
  completionStatus: {
    identifier:  "completionStatus",
    value:       "not_attempted",
    baseType:    "string",
    cardinality: "single",
  },
  "$comment": {
    identifier: "$comment",
    value:       null,
    baseType:    "string",
    cardinality: "single",
  },
  "$dirty":{
    identifier:  "$dirty",
    value:       false,
    baseType:    "boolean",
    cardinality: "single",
  },
}

const DEFAULT_THEME = "theme";
const MAX_TABLE_COLS = 4;
const RPTEMPLATES = "http://www.imsglobal.org/question/qti_v2p2/rptemplates";
const SVG_NS = "http://www.w3.org/2000/svg";
const TAB_DISABLED = false;
const XLINK_NS = "http://www.w3.org/1999/xlink";
const XML_NS = "http://www.w3.org/XML/1998/namespace";
const RANDOM_FUNCTION = Math.random;
const START_DELAY_ITEM = 100;
const START_DELAY_TEST = 1500;
const SCROLL_ADJUST = -170; 

const EN = {
  UPLOAD: "Upload file",
  COMMENT: "Comment on this question if you wish.",
  EXPECTED_CHARS: (len)=>`expected: ${len} chars`,
  EXPECTED_LINES: (lines)=>`expected: $(lines) lines`,
  END_TEST: "<p>You have reached the end of the test</p>",  
}

const QTI = {
  CURRENT_ITEM_INITIALIZED: false,
  CUSTOM_INTERACTIONS: {},
  DOM: null,
  ENABLE_THEME_SCRIPTS: false,
  EXTENSION_HANDLERS: [
    selection,
    ordering,
    include,
    customOperator,
    customInteraction,
    script,
    xmlbase,
    verbatim,
  ],
  INTERACTIONS: [],
  LANG: EN,
  LOADING_COUNT: 0,
  THEME_JS: null,
  PROMISES: [],
  RESULTS_ENDPOINT: null,
  RESULTS_HEADERS: null,
  ROOT: null,
  SECTIONS_EXPANDED: false,
  SEED:  1,
  SEQUENCE:  null,
  TEST_CLASS: null,
  TRANSFORMING: false,
  XML_CACHE: {},
  _BTH: null,
  
  postResponseVariable: postResponseVariable,
  setVariable: setResponseVariable,
  getVariable: getResponseVariable,
};

//////////////////////////////////////////////////////////////////////////////
//
// logging.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** LOGGING
*/

const LOG     = console.log.bind(console);
const WARN    = console.warn.bind(console);
const ERROR   = console.error.bind(console);
const INFO    = LOG;
const DEBUG   = ()=>null;
const VERBOSE = ()=>null;

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

//////////////////////////////////////////////////////////////////////////////
//
// transform.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** TRANSFORM QTI XML TO HTML
*/

// This is a wrapper around "exec" which sets a global
// QTI.TRANSFORMING flag.  This is so that executors can determine
// whether or not they are being invoked for a a "transform" or a
// non-transform context such as "processing".
function doTransforms(elem, ctx) {
  DEBUG("start transform", identifier(elem), clock()+"msecs");
  QTI.TRANSFORMING = true;
  initializeAllDeclarations(elem);
  let result = exec(elem, ctx);
  QTI.TRANSFORMING = false;
  DEBUG("end transform", identifier(elem), clock()+"msecs");
  
  return result;
}

// This function is an executor which Transforms a QTI v2.2 XML element
// into an HTML string.  This method can have significant side-effects.
// For example, transforming an "assessmentItemRef" loads the
// referenced assessmentItem, then transforms and calls setupAssessmentItem
// on it.
function transform(elem) {
  if (!elem)
    return "";
  
  let item = getQTIAssessmentItem(elem);
  let id = elem.getAttribute("id");
  let interaction = QTI.INTERACTIONS[QTI.INTERACTIONS.length-1];
  
  if (!id) {
    id = getId(elem);
    elem.setAttribute("id", id);
  }
  
  // The default transform is to a div, plus standard transformChildren
  // and transformAttributes.
  let T = {
    attribs:[
      {name:"tag", value:elem.tagName},
      {name:"id", value:id, prefix:false},
    ],
    content: transformChildren(elem),
    tag:"div",
  };
  if (item)
    T.attribs.push({name:"item", value:identifier(item)});

  // The following does element-specific transforms.
  switch(elem.tagName) {
  case "assessmentTest":
    addNavigation(elem, T);
    if (QTI.TEST_CLASS)
      elem.classList.add(QTI.TEST_CLASS);
    break;
  case "testFeedback":
    addNavigation(elem, T);
    break;
  case "testPart":
  case "assessmentSection":
    if (QTI.SECTIONS_EXPANDED
        && countItems(elem)==0
        && countItemRefs(elem)==0)
      T.tag = null;
    else
      addNavigation(elem, T);
    break;
  case "timeLimits":
    if (elem.getAttribute("maxTime")||elem.getAttribute("minTime"))
      T.content.push("<span></span>");
    else
      T.tag = null;
    break;
  case "stylesheet":
    transformStylesheet(elem, T);
    break;
  case "assessmentItem":
    addCommentInteraction(elem, T);
    addNavigation(elem, T);
    if (!allowSkipping(item))
      T.attribs.push({name:"class", value:MANDATORY});
    if (item.parentElement)
      T.attribs.push({name:"section",value:identifier(item.parentElement),
                      prefix:true});
    break;
    
  case "associateInteraction":
    transformAssociateInteraction(elem, T);
    break;
  case "endAttemptInteraction":
    transformEndAttemptInteraction(elem, T);
    break;
  case "extendedTextInteraction":
    transformExtendedTextInteraction(elem, T);
    break;
  case "hotspotInteraction":
  case "graphicAssociateInteraction":    
  case "graphicOrderInteraction":
  case "selectPointInteraction":
    transformPointInteraction(elem, T);
    break;
  case "graphicGapMatchInteraction":
    transformGraphicGapMatchInteraction(elem, T);
    break;
  case "infoControl":
    transformInfoControl(elem, T);
    break;
  case "inlineChoiceInteraction":
    transformInlineChoiceInteraction(elem, T);
    break;
  case "matchInteraction":
    transformMatchInteraction(elem, T);
    break;
  case "mediaInteraction":
    transformMediaInteraction(elem, T);
    break;
  case "positionObjectStage":
    transformPositionObjectStage(elem, T);
    break
  case "sliderInteraction":
    transformSliderInteraction(elem, T);
    break;
  case "textEntryInteraction":
    transformTextEntryInteraction(elem, T);
    break;
  case "uploadInteraction":
    transformUploadInteraction(elem, T);
    break;

  case "templateInline":
  case "feedbackInline":
    T.tag = "span";
    break;
  case "simpleMatchSet":
    T.tag = null;
    break;
  case "hottext":
  case "simpleChoice":
  case "simpleAssociableChoice":
    transformChoice(elem, T);
    break;
  case "inlineChoice":
    T.tag = "option";
    break;
  case "gapText":
  case "gapImg":
    T.tag = "span";
    T.attribs.push({name:"draggable", value:"true", prefix:false});
    break;
  case "gap":
    T.tag = "span";
    T.attribs.push({name:"class", value:GAP, prefix:false});
    break;
  case "object":
    transformObject(elem, T);
    break;
  case "printedVariable":
    T.tag = elem.getAttribute(TAG) || "span";
    break;
  }

  if (T.tag != null) {
    let [opentag,closetag]
        = getTags(T.tag, transformAttributes(elem, T.attribs));
    return [T.wrapstart,opentag,T.content.join(" "),
            closetag,T.wrapend].join(" ");
  } else {
    return "";
  }

  // Transforms attributes of XML element to HTML element attributes.
  function transformAttributes(elem, attribs) {
    const inlineRE = new RegExp("("+[
      "inlineChoiceInteraction", "textEntryInteraction", "hottextInteraction",
    ].join("|")+")");

    const showHideRE = new RegExp("("+[
      "associableHotspot", "feedbackBlock", "feedbackInline", "gap",
      "gapImg", "gapText", "hotspotChoice", "hottext", "inlineChoice",
      "modalFeedback", "simpleAssociableChoice", "simpleChoice",
      "templateBlock", "templateInline", "testFeedback"
    ].join("|")+")");

    const matchMaxRE = new RegExp("("+[
      "associableHotspot", "gapImg", "gapText", "simpleAssociableChoice"
    ].join("|")+")");
    
    let classList = [];

    if (elem.tagName.match(inlineRE))
      classList.push(`${INTERACTION} ${INLINE}`);
    else if (elem.tagName.match("Interaction"))
      classList.push(`${INTERACTION} ${BLOCK}`);

    // showHide is not required and defaults to show.
    // triggerShowHide needs it to be there, so we add it if necessary.
    if (elem.tagName.match(showHideRE) && !elem.getAttribute("showHide"))
      elem.setAttribute("showHide", "show");

    // matchMax is a required field on some elements. For those elements,
    // we rely on it; so if it is missing, default it to "1".
    if (elem.tagName.match(matchMaxRE) && !elem.getAttribute("matchMax"))
      elem.setAttribute("matchMax", "1");
    
    attribs = attribs.filter(a=>{
      if (a.name=="class") {
        classList.push(a.value);
        return false;
      } else {
        return true;
      }
    });

    [...elem.attributes].forEach(a => {
      if (a.name.match(/^(aria-|data-)/)) {
        // All attributes prefixed with "aria-", "data-".
        // are rendered verbatim.
        attribs.push({name:a.name,value:a.value,prefix:false});

      } else if (elem.tagName=="customInteraction") {
        // For custom interactions we render attributes verbatim,
        // for the benefit of any custom javascript,
        // *plus* we emit transformed versions of "identifier" and
        // "responseIdentifier".
        attribs.push({name:a.name,value:a.value,prefix:false});
        if (a.name=="identifier" || a.name=="responseIdentifier")
          attribs.push({name:a.name,value:a.value,prefix:true});
        
      } else {
        switch(a.name) {
        case "class":
          // Add to classList
          classList.push(a.value);
          break;
          
        case "base":
        case "label":
        case "language":
          // These are not valid HTML5 attributes but are allowed
          // on QTI elements.  Since they are ignored by browsers,
          // We pass them through for the benefit of stylesheets
          // and extensions.
          attribs.push({name:a.name,value:a.value,prefix:false});
          break;

        case "data":  
        case "dir":
        case "href":
        case "id":
        case "lang":  
        case "media":
        case "role":
        case "title":  
        case "type":
          // These are either global or contextually-valid HTML5
          // attributes, which are allowed also in the QTI XML.  They are
          // passed through for stylesheets and extensions. Note that
          // "id" attributes, if present in the QTI XML, will be used by
          // qti.js instead of its own generated ids, and we assume
          // that the item/test authors have made properly them
          // globally unique within the test.  This is somewhat critical
          // and there can be obscure-seeming bugs if this is not done
          // correctly.
          attribs.push({name:a.name,value:a.value,prefix:false});
          break;

        case "access":  
        case "category":
        case "format":
        case "hotspotLabel":          
        case "identifier":
        case "matchGroup":  
        case "navigationMode":
        case "objectLabel":  
        case "outcomeIdentifier":
        case "responseIdentifier":
        case "showHide":
        case "submissionMode":
        case "templateIdentifier":
        case "timeDependent":
        case "use":
        case "view":
        case "visible":
          // Transformed with a data-${PREFIX}- prefix for benefit
          // of stylesheets and extensions.
          attribs.push({name:a.name,value:a.value,prefix:true});
          break;

        default:
          // Ignored. Attribute not rendered into transformed HTML.
          break;
        }
      }
    });
    if (classList.length)
      attribs.push({name:"class",value:classList.join(" "),prefix:false});
    
    return attribs.map(a=>`${snakeCase(a)}="${a.value}"`).join(" ");
  }

  // Adds a pseudo extendedTextInteraction to an item for a user comment.
  function addCommentInteraction(item, T) {
    if (allowComment(item)) {
      T.content.push("<details><summary>Comment</summary>" 
       +`<div ${TAG}="extendedTextInteraction" ${ITEM}="${identifier(elem)}"`
       +` ${RESPONSE_ID}="$comment" class="${INTERACTION} ${BLOCK} ${COMMENT}">`
       +`<textarea placeholder="${QTI.LANG.COMMENT}"></textarea>`
       +"</div></details>");
    }
  }

  // Adds "nav" element to assessmentTest, testPart,
  // assessmentSection, and assessmentItem.
  function addNavigation(elem, T) {
    T.content.push(`<nav class="${NAVIGATION}">`);
    T.content.push(`<span class="${NEXT}"></span>`);
    T.content.push(`<span class="${PREV}"></span>`);
    if (elem.tagName=="testPart") {
      let submissionMode = elem.getAttribute("submissionMode");
      if (submissionMode==="simultaneous")
        T.content.push(`<span class="${SUBMIT}"></span>`);
    }
    T.content.push(`</nav>`);
  }
    
  // Transforms hottext, simpleChoice, or simpleAssociableChoice.
  function transformChoice(elem, T) {
    let interaction = QTI.INTERACTIONS[QTI.INTERACTIONS.length-1];

    switch(interaction.tagName) {
    case "customInteraction":
    default:
      // generic transform of choices inside a customInteraction. The
      // default handling of customInteractions is just to run the
      // default transform.  If this isn't what the item author
      // wanted, they needed to have done the transform themselves
      // with custom code
      break;
      
    case "matchInteraction":
      // transform of children inside a matchInteraction.
      // matchInteraction has a special transform of its children, so
      // we don't emit any content for the children here.
      T.content=[];
      break;

    case "choiceInteraction": 
    case "hottextInteraction":
      // renders choice as a radio button or checkbox.
      let maxChoices = Math.max(interaction.getAttribute("maxChoices")||1,0);
      let type = maxChoices==1? "radio": "checkbox";
      T.attribs.push({name:"type", value:type, prefix: false});
      T.attribs.push({name:"name", value:getId(interaction,"RG"),prefix:false});
      T.tag = "input";
      if (interaction.tagName=="choiceInteraction") {
        T.wrapstart = `<div class='${INPUT_WRAP}'><label class="${CHOICE}">`;
        T.wrapend = "</label></div>";
      } else {
        T.wrapstart = (T.wrapstart||"")
          + `<wbr/><span class='${HOTTEXT_WRAP}'>`;
        T.wrapend = "</span>";
      }
      break;

    case "orderInteraction":
    case "associateInteraction":
      // renders choice as as an <li> inside an <ol>
      if (interaction.choices === undefined) {
        T.wrapstart = "";
        if (interaction.tagName=="orderInteraction") {
          let countChoices = interaction.querySelectorAll("simpleChoice").length
          let maxChoices = +interaction.getAttribute("maxChoices")||0;
          let minChoices = +interaction.getAttribute("minChoices")||0;
          if ((maxChoices>0 && maxChoices!=countChoices)
              || (minChoices>0 && minChoices!=countChoices)) {
            T.wrapstart = `<ol class="${CHOICES} ${SELECTION_AREA}"></ol>`;
          }
        }
        T.wrapstart += `<ol class="${CHOICES}">`;
        interaction.choices =
          interaction.getElementsByTagName(elem.tagName).length;
      }
      T.tag = "li";
      T.attribs.push({name:"draggable", value:"true", prefix:false});
      if (--interaction.choices===0)
        T.wrapend = (T.wrapend||"") + `</ol>`;
      break;
    }
  }

  // Transform a <stylesheet> element into a <link>
  function transformStylesheet(elem, T) {
    let href = elem.getAttribute("href");
    T.tag = "link";
    T.attribs.push({name:"rel", value:"stylesheet", prefix: false});
    elem.setAttribute("href", new URL(href, getBase(elem)));
  }
  
  // Transforms an "object". drawingInteraction is a special
  // case, where we turn an "object" into a <canvas> element and also
  // generate the tool palette.  Otherwise, <object> transforms
  // generically.
  function transformObject(elem, T) {
    let data = elem.getAttribute("data");
    if (data)
      elem.setAttribute("data", new URL(data, getBase(elem)));
    
    const DRAWING_TOOLS_TABLE = `
    <table class="${DRAWING_TOOLS}">
    <tr>
      <td class="${SELECTED}" id="bucket"></td>
      <td class="${SELECTED}" id="c1"></td>
      <td id="c2"></td>
      <td id="c3"></td>
      <td id="c4"></td>
    </tr>
    <tr>
      <td id="pen"></td>
      <td id="c5"></td>
      <td id="c6"></td>
      <td id="c7"></td>
      <td id="c8"></td>
    </tr>
    </table>`;

    let interaction = QTI.INTERACTIONS[QTI.INTERACTIONS.length-1];
    
    T.tag = elem.tagName;
    if (interaction) {
      switch(interaction.tagName) {
      case "drawingInteraction":
        T.tag = "canvas";
        T.wrapend = DRAWING_TOOLS_TABLE;
        break;
      default:
        break;
      }
    }
  }

  // Generates textarea for an extendedTextInteraction
  function transformExtendedTextInteraction(elem, T) {
    let ph = getPlaceholder(elem, "");
    T.content.push(`<textarea placeholder="${ph}"></textarea>`);
  }

  // Generates details/summary for an infoControl
  function transformInfoControl(elem, T) {
    let title = elem.getAttribute("title")
    T.tag = "details";
    T.content.unshift(`<summary>${title}</summary>`);
  }

  // Generates a select for inlineChoiceInteraction
  function transformInlineChoiceInteraction(elem, T) {
    T.tag = "select";
    T.content.push(`<option selected="true">Choose...</option>`);
  }

  // Generates an input type=text for textEntryInteraction
  function transformTextEntryInteraction(elem, T) {
    T.tag = "span";
    T.content.unshift(
      `<input type="text" placeholder="${getPlaceholder(elem, "")}"/>`);
  }

  // Generates an input type=file for uploadInteraction
  function transformUploadInteraction(elem, T) {
    T.content.push(`<label>${QTI.LANG.UPLOAD}: <input type="file"/></label>`);
  }
            
  // Generates an input type=range for a sliderInteraction.
  function transformSliderInteraction(elem, T) {
    let datalist = `<datalist id="tickmarks">`;
    let outputId = elem.id+"_OUT";
    let min = elem.getAttribute("lowerBound");
    let max = elem.getAttribute("upperBound");
    let step = elem.getAttribute("step");
    let val = Math.floor((min+max)/2);
    let tag=`<input type="range" min="${min}" max="${max}" `
        + `step="${step}" list="tickmarks"`
        + ` value="${val}" oninput="${outputId}.value=this.value"/>`
        + `<span class="${WRAP}">`
        + `<output class="${THUMB}" id="${outputId}">${val}</output></span>`;

    [[0,"0%"],10,20,30,40,[50,"50%"],60,70,80,90,[100,"100%"]].forEach(tick=>{
      if (Array.isArray(tick))
        datalist += `<option value="${tick[0]}" label="${tick[1]}">`;
      else
        datalist += `<option value="${tick}">`
    });
    datalist += "</datalist>";
    T.content.push(tag+datalist);
  }

  // Generates button for endAttemptInteraction
  function transformEndAttemptInteraction(elem, T) {
    T.tag = "button";
    T.content.unshift(elem.getAttribute("title"));
  }
  
  // Generates table for associateInteraction
  function transformAssociateInteraction(elem, T) {  
    const gap = `<td class="${GAP}"></td>`;
    const bar = `<td></td>`;
    let choices = elem.getElementsByTagName("simpleAssociableChoice").length;
    let maxAssocs = +elem.getAttribute("maxAssociations");
    maxAssocs = maxAssocs || Math.floor(choices/2) || 1;
    let html = `</ol><table class="${ASSOCIATE_TABLE}">`;
    for (let i=0; i<maxAssocs; i++)
      html += "<tr>"+gap+bar+gap+"</tr>";
    html += "</table>"
    T.content.push(html);
  }

  // Generates table for a matchInteraction. First simpleMatchSet
  // gives the rows, second gives the columns.  Note that table may
  // be pivoted later.
  function transformMatchInteraction(elem, T) {
    let matchSets = [...elem.querySelectorAll("simpleMatchSet")];
    let [rows, cols] = matchSets.map(set=>{
      let choices = [...set.children];
      choices = shouldBeShuffled(elem) ? shuffleNodes(choices): choices;
      return choices.map(choice=>[identifier(choice),trim(choice.innerHTML)]);
    });
    
    let maxAssocs = +elem.getAttribute("maxAssociations")||1;
    let type = maxAssocs==1? "radio": "checkbox";
    let cell = (row,col)=>
        `<td><input ${ID}="${row[0]} ${col[0]}"`
        + ` name="${getId(interaction,"RG")}" type="${type}"/></td>`;
    let html = `<table class="${MATCH_TABLE} ${PIVOTABLE}">`;

    html += "<tr><th></th>";
    cols.forEach(col=>html += `<th>${col[1]}</th>`);
    html += "</tr>";
    rows.forEach(row=>{
      html += `<tr><th>${row[1]}</th>`;
      cols.forEach(col=>html += cell(row,col));
      html += "</tr>";
    });
    html += "</table>";
    T.content.push(html);
  }

  // Generates stage and SVG overlay for the graphic interactions:
  // hotspotInteraction, selectPointInteraction,
  // graphicAssociateInteraction, and graphiOrderInteraction.
  function transformPointInteraction(elem, T, extra="", hotspotClass=HOTSPOT) {
    let html = transform(elem.querySelector("prompt"));
    let stage = elem.querySelector(`${elem.tagName} > object`);
    let stageId = getId(stage, "STAGE");
    
    if (stage) {
      let height = +stage.getAttribute("height");
      let width = +stage.getAttribute("width");
      let hotspots = [...elem.querySelectorAll("hotspotChoice")]
          .concat([...elem.querySelectorAll("associableHotspot")]);
      let markers = "", m=0;
      let fontsize = Math.round(width/12);
      let viewBox = "", onload = "";
      let maxChoices = elem.getAttribute("maxChoices")||0;
      
      if (width && height) {
        viewBox = `viewBox="0 0 ${width} ${height}"`
      } else {
        onload = `onload="setSVGViewboxFromStage(this)"`;
      }

      html += `<div class="${STAGE}">`;
      html += `<img ${onload} id="${stageId}"`
        + ` type="${stage.getAttribute("type")}"`
        + ` src="${stage.getAttribute("data")}" />`;
      html += `<svg style="font-size:${fontsize}px" ${viewBox}`
        +` xmlns="${SVG_NS}">`;

      hotspots.forEach(h => {
        let shape = h.getAttribute("shape");
        let cx, cy, x1, y1, x2, y2, r, height, width, attribs;
        let coords = h.getAttribute("coords").split(",");
        let id = identifier(h);
        let matchMax = h.getAttribute("matchMax");
        
        switch(shape) {
        case "circle":
          [cx, cy, r] = coords;
          attribs = `cx="${cx}" cy="${cy}" r="${r}"`;
          break;
        case "rect":
          [x1, y1, x2, y2] = coords;
          attribs = `x="${x1}" y="${y1}" height="${y2-y1}" width="${x2-x1}"`;
          break;
        case "poly":
          shape = "polygon";
          attribs = `points = "${coords.join(",")}"`
          break;
        }
        if (matchMax) 
          attribs += ` ${MATCH_MAX}="${matchMax}"`
        html += `<g><${shape} class="${hotspotClass}" ${ID}="${id}"`
          +`${attribs}/></g>`;

        if (maxChoices==0 || m<maxChoices) {
          if (markers)
            markers += " ";
          markers += ++m;
        }
      });

      if (elem.tagName == "graphicOrderInteraction")
        html += `<text id="togo" x="4" y="${height}">${markers}</text>`;
      html += extra;
      html += "</svg></div>"
    }
    T.content = [html];
  }

  // Generates stage and SVG overlay for positionObjectStage
  // and positionObjectInteraction.  Notwithstanding QTI nomenclature,
  // for the most part we treat the positionObjectStage as the interaction,
  // and the postionObjectInteractions as analogous to associableHotspots
  // or hotspotChoices.
  function transformPositionObjectStage(elem, T) {
    let item = getQTIAssessmentItem(elem);
    let stage = elem.children[0];
    let html = "";
    let objects = [...elem.querySelectorAll("positionObjectInteraction object")]  

    if (stage) {
      let height = stage.getAttribute("height");
      let width = stage.getAttribute("width");
      html = `<div class="${STAGE}">`;
      html += `<img type="${stage.getAttribute("type")}"`
        + ` src="${stage.getAttribute("data")}" />`;
      html += `<svg viewBox="0 0 ${width} ${height}" xmlns="${SVG_NS}"></svg>`;
      html += "</div>";
    }
    objects.forEach(o => {
      let type = o.getAttribute("type");
      let src = o.getAttribute("data");
      let width = o.getAttribute("width");
      let interaction = o.parentElement;

      html += `<img ${TAG}="positionObjectInteraction"`
        + ` draggable="true" class="${MARKER}"`
        + ` id="${interaction.id}" ${ITEM}="${identifier(item)}"`
        + ` type="${type}" style="width:5%" src="${src}"`
        + ` ${RESPONSE_ID}="${interaction.getAttribute("responseIdentifier")}"/>`;
    });
    T.content = [html];
  }

  // Generates stage and SVG overlay for graphicGapMatchInteraction
  function transformGraphicGapMatchInteraction(elem, T) {
    let stage = elem.querySelector(`${elem.tagName} > object`);
    let stageWidth = stage.getAttribute("width");
    let gapFills = [...elem.querySelectorAll("gapImg object")]
        .concat([...elem.querySelectorAll("gapText")]);
    
    transformPointInteraction(elem, T, "", GAP);
    T.content.push("<p>");
    T.content.push(gapFills.map(gf => {
      switch(gf.tagName) {
      case "object":
        let src = gf.getAttribute("data");
        let type = gf.getAttribute("type");
        let width = gf.getAttribute("width");
        let height = gf.getAttribute("height");
        let match_max = gf.parentElement.getAttribute("matchMax");
        return `<img class="${GAP_IMAGE}" draggable="true"`
          + ` ${ID}="${identifier(gf.parentElement)}"`
          + ` src="${src}" type="${type}" ${MATCH_MAX}="${match_max}"`
          + ` style="width:12%;max-width:55px; height:auto" />`;
      case "gapText":
        return `<span class="${GAP_TEXT}" draggable="true"`
          + ` ${ID}="${identifier(gf)}">`
          + gf.textContent + "</span>";
      }
    }).join(""));
    T.content.push("</p>");
  }

  // Generates the HTML for a mediaInteraction. Gets the type
  // attribute of the object (assumed to be one) and emits an HTML
  // tag.  Emits <audio> for audio[/*], <video> for video[/*], and <x> for
  // x[/*] (which is probably wrong).  video/youtube is a specially
  // handled case.
  function transformMediaInteraction(elem, T) {
    let prompt = elem.querySelector("prompt");
    let object = elem.querySelector("object");
    let loop = elem.getAttribute("loop")==="true";
    let autostart = elem.getAttribute("autostart")==="true";
    let src = object.getAttribute("data");
    let type = object.getAttribute("type");
    let width = object.getAttribute("width")
    let height = object.getAttribute("height");

    T.content = [];
    if (prompt)
      T.content.push(prompt.innerHTML);

    switch(type) {
    case "video/youtube":
      src = src.replace("watch?v=", "embed/");
      src += "?rel=0&controls=1&modestbranding=1&showinfo=0";
      T.content.push(`<iframe width="${width}" height="${height}" src="${src}"`
                     +` allow="encrypted-media"></iframe`);
      break;
    default:
      let tag = type? type.split("/")[0]: "audio";
      T.content.push(`<${tag} controls type="${type}" src="${src}"></${tag}>`);
      break;
    }
  }
  
  function countItems(elem) {
    return [...elem.querySelectorAll("assessmentItem")].length;
  }

  function countItemRefs(elem) {
    return [...elem.querySelectorAll("assessmentItemRef")].length;
  }
}

// This is a wrapper around the transform function for interactions.
// It maintains a stack of interactions, with the interaction
// currently being transformed at the top.  This facilitates nested
// transforms of interaction children to find the interaction in which
// they are nested.
function interaction(elem) {
  QTI.INTERACTIONS.push(elem);
  let result = transform(elem);
  QTI.INTERACTIONS.pop(elem);
  return result;
}

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

//////////////////////////////////////////////////////////////////////////////
//
// input_interactions.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Common code for setting up interactions that are transformed
// to HTML form input elements (input, select, textarea, button),
// including choiceInteraction, inlineChoiceInteraction,
// matchInteraction, etc.
function setupInputInteraction(interaction) {
  let qtiInteraction = QTI.DOM.getElementById(interaction.id);
  let responseVariable = getResponseVariable(interaction);
  
  switch(interaction.tagName) {
  case "SELECT":
    interaction.onchange=handleResponse;
    break;
  case "BUTTON":
    interaction.onclick=handleResponse;
    break;
  default:
    let inputs =  [...interaction.querySelectorAll("input")]
      .concat([...interaction.querySelectorAll("textarea")]);
    inputs.forEach(input=>input.onchange=handleResponse);
    break;
  }
  
  // Handler for change and click events.
  function handleResponse(evt) {
    const input = evt.currentTarget;

    evt.stopPropagation();

    if (input.tagName=="BUTTON" 
        || input.tagName=="SELECT"
        || input.tagName=="TEXTAREA") {
      setInputResponseVariable(input);
    } else {
      if (input.checked) {
        switch(qtiInteraction.tagName) {
        case "matchInteraction":
          if (!validateMatchMax(input)) {
            input.checked = false;
            return;
          }
          break;
        case "choiceInteraction":
        case "hottextInteraction":
          if (!validateMaxChoices(input)) {
            input.checked = false;
            return;
          }
          break;
        default:
          break;
        }
      }
      [...interaction.querySelectorAll("input")]
        .forEach(input=>setInputResponseVariable(input));
    }
  }

  function validateMatchMax(input) {
    let ids = input.getAttribute(ID).split(" ");
    return !(atMatchMax(ids[0]) || atMatchMax(ids[1]));
  }

  function atMatchMax(id) {
    let choice = qtiInteraction.querySelector(`[identifier=${id}]`);
    let matchMax = choice.getAttribute("matchMax");

    if (matchMax > 0) {
      let matchCount = responseVariable.value.filter(v=>{
        let ids = v.split(" ");
        return ids[0]==id || ids[1]==id;
      }).length;
      return matchCount>=matchMax;
    } else {
      return false;
    }
  }

  function validateMaxChoices(input) {
    let maxChoices = qtiInteraction.getAttribute("maxChoices")||1;
    return maxChoices<=1
      || !responseVariable.value
      || responseVariable.value.length<maxChoices;    
  }
  
  // Sets response variable after the user does input.
  function setInputResponseVariable(input) {
    let value;
    switch(input.tagName) {
    case "INPUT":
      switch(input.getAttribute("type")) {
      case "radio":
      case "checkbox":
        value = check(input.getAttribute(ID), input.checked);
        break;
      case "text":
        if (input.value.length)
          input.style.width = input.value.length+"ch";
        value = input.value;
        break;
      case "range":
        value = input.value;
        break;
      case "file":
        value = input.files[0].name;
        break;
      }
      break;
    case "TEXTAREA":
      value = input.value;
      break;
    case "SELECT":
      value = input.options[input.selectedIndex].getAttribute(ID);
      break;
    case "BUTTON":
      value = true;
      break;
    default:
      break;
    }
    postResponseVariable(interaction, value);
  }

  // Adds/Removes identifier to/from list of identifiers as
  // a result of checking/unchecking a checkbox or radiobutton
  function check(identifier, checked) {
    if (!responseVariable.value)
      responseVariable.value=[];
    if (checked && !responseVariable.value.includes(identifier)) {
      responseVariable.value.push(identifier);
    } else if (!checked) {
      let idx = responseVariable.value.indexOf(identifier);
      if (idx >= 0)
        responseVariable.value.splice(idx, 1);
    }
    return responseVariable.value;
  }
}

//////////////////////////////////////////////////////////////////////////////
//
// dragdrop_interactions.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Common code for setting up associateInteraction, orderInteraction,
// and gapMatchInteraction, all of which involve drag-and-drop.
function setupDragAndDropInteraction(interaction) {
  let type = interaction.getAttribute(TAG);
  let qtiInteraction = QTI.DOM.getElementById(interaction.id);
  let draggables = [...interaction.querySelectorAll("[draggable]")]
  let gaps = [...interaction.querySelectorAll(GAP_SEL)];
  let choices = [...interaction.querySelectorAll(CHOICES_SEL)];
  let dragging;
  let ghost;

  draggables.forEach(draggable=>setDraggableHandlers(draggable));  
  gaps.concat(choices).forEach(g=>setDropZoneHandlers(g));

  function setDropZoneHandlers(dropzone) {                               
    dropzone.ondragover = handleDragOver;
    dropzone.ondragleave = handleDragLeave;
    dropzone.ondrop = handleDrop;
  }

  function setDraggableHandlers(draggable) {
    draggable.ondragstart = handleDragStart;
    draggable.ondragend = handleDragEnd;
    draggable.ondragover = handleDragOver;
    draggable.ondragleave = handleDragLeave;
    draggable.ondrop = handleDrop;
  }
  
  // On drag start, create the ghost element for the drag image
  // and set "dragging"
  function handleDragStart(evt) {
    let rect = this.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    
    dragging = this;
    if (dragging) {
      ghost = document.createElement("div");
      dragging.classList.add(DRAGGING);
      ghost.innerHTML = dragging.innerHTML;
      ghost.classList.add(GHOST);
      ghost.style.width = rect.width+"px";
      ghost.style.height = rect.height+"px";
      this.parentElement.appendChild(ghost);
      evt.dataTransfer.setDragImage(ghost,x,y);
    }
  }

  // Event handler for drag over events: sets dragover style.
  // For order interactions, reorder choices.
  function handleDragOver(evt) {
    if (dragging && dragging!=this) {
      if (this.classList.contains(GAP))
        this.classList.add(DRAGOVER);
      switch(type) {
      case "orderInteraction":
        if (dragging.parentElement==this.parentElement)
          reorder(dragging, this);
        else
          evt.preventDefault();
        break;
      default:   
      case "associateInteraction":
        evt.preventDefault();
        break;
      }
    }
  }

  // Reorder the choices during an orderInteraction drag-and-drop.
  function reorder(a, b) {
    if (isBefore(b, a))
      [a, b] = [b, a]
    a.parentElement.insertBefore(a, b.nextElementSibling);
  }

  // Returns true if a is before b.
  function isBefore(a, b) {
    let siblings = [...a.parentElement.children];
    return siblings.indexOf(a) < siblings.indexOf(b);
  }

  // Event handler for drag leave, clear dragover style.
  function handleDragLeave(evt) {
    if (dragging && dragging!=this)
      this.classList.remove(DRAGOVER);
  }

  // Drop event handler.
  function handleDrop(evt) {
    if (dragging && dragging!=this) {
      if (type=="orderInteraction") {
        if (this.classList.contains(CHOICES)
            && dragging.parentElement!=this) {
          this.appendChild(dragging);
        }
      } else if (type=="associateInteraction") {
        if (this.classList.contains(GAP)) {
          if (this.firstElementChild)
            this.firstElementChild.remove();
          let choiceId=dragging.getAttribute("choiceId");
          let drop = choiceId? dragging: clone(dragging);
          if (drop.parentElement)
            drop.parentElement.removeAttribute(GAP_FILL_ID);
          this.appendChild(choiceId? dragging: clone(dragging));
          this.setAttribute(GAP_FILL_ID, drop.getAttribute("choiceId"));
        } else if (this.classList.contains(CHOICES)) {
          dragging.parentElement.removeAttribute(GAP_FILL_ID);
          dragging.remove();
        }
        setMaxMatches();
      } else if (type=="gapMatchInteraction") {
        if (this.classList.contains(GAP)) {
          this.innerHTML = dragging.innerHTML;
          this.setAttribute(GAP_FILL_ID, dragging.id);
          this.classList.add(FILLED);
          setMaxMatches();
        }
      }
    }

    function clone(choice) {
      let elem = document.createElement(choice.tagName);
      [...choice.attributes].forEach(a=>elem.setAttribute(a.name,a.value));
      elem.setAttribute("choiceId",choice.id);
      elem.removeAttribute("id");
      elem.innerHTML = choice.innerHTML;
      setDraggableHandlers(elem);
      return elem;
    }
  }

  // Set MAX_MATCHES style on gapText's which have met
  // or exceeded their matchMax
  function setMaxMatches() {
    qtiInteraction.querySelectorAll("[matchMax]").forEach(ch => {
      let max = +ch.getAttribute("matchMax");
      if (max > 0) {
        let matches = 0;
        gaps.forEach(g => {
          if (ch.id===g.getAttribute(GAP_FILL_ID))
            matches++
        })
        let htmlChoice = document.getElementById(ch.id);
        htmlChoice.classList[matches>=max?"add":"remove"](MAX_MATCHES);
      }
    });
  }

  // Drag end
  function handleDragEnd(evt) {
    deleteGhosts();
    if (dragging) {
      dragging = null;
      let nodes = document.querySelectorAll(DRAGGING_SEL);
      nodes.forEach(n=>n.classList.remove(DRAGGING));
      nodes = document.querySelectorAll(DRAGOVER_SEL);
      nodes.forEach(n=>n.classList.remove(DRAGOVER));     
      setDropResponseVariable();
    }
  }

  // Delete div created for drag image.
  function deleteGhosts() {
    let ghosts = document.querySelectorAll(GHOST_SEL);
    [...ghosts].forEach(g => g.parentElement.removeChild(g));
    ghost = null;
  }

  function setDropResponseVariable() {
    let value;

    if (type=="orderInteraction") {
      let choices=[...interaction.querySelectorAll(SIMPLECHOICE_SEL)];
      let qtiInteraction = QTI.DOM.getElementById(interaction.id);
      let maxChoices = +qtiInteraction.getAttribute("maxChoices")||1;
      value = choices.map(choice=>choice.getAttribute(ID));
      if (maxChoices && maxChoices<value.length)
        value = value.slice(0, maxChoices);

    } else if (type=="associateInteraction") {
      let table = interaction.querySelector(ASSOC_TABLE_SEL);
      value = [...table.rows].map(row=>{
        let fills = [row.cells[0].firstElementChild,
                     row.cells[2].firstElementChild]
        if (!(fills[0] && fills[1]))
          return null;
        else
          return fills.map(fill=>fill.getAttribute(ID)).join(" ");
      }).filter(pair=>pair!=null);

    } else if (type=="gapMatchInteraction") {
      let gaps = [...interaction.querySelectorAll(GAP_SEL)];
      value = gaps.map(gap=>{
        let fill = gap.getAttribute(GAP_FILL_ID);
        fill = document.getElementById(fill);
        return fill
          ? fill.getAttribute(ID) + " " + gap.getAttribute(ID)
          : null;
      }).filter(pair=>pair!=null);
    }

    postResponseVariable(interaction, value);  
  }
}

//////////////////////////////////////////////////////////////////////////////
//
// graphic_interactions.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Sets up a hotstpotInteraction
function setupHotspotInteraction(interaction) {
  let responseVariable = getResponseVariable(interaction);
  let qtiInteraction = QTI.DOM.getElementById(interaction.id);

  [...interaction.querySelectorAll(HOTSPOT_SEL)].forEach(hotspot => {
    hotspot.onclick = function() {
      if (validateHotspotToggle(hotspot)) {
        hotspot.classList.toggle(SELECTED);
        let {cx:cx, cy:cy} = getDimensions(hotspot);
        hotspot.style.transformOrigin = cx+"px "+cy+"px";

        let value = responseVariable.value||[];
        let identifier = hotspot.getAttribute(ID);

        if (!Array.isArray(value))
          value = [value];
        if (hotspot.classList.contains(SELECTED))
          value.push(identifier);
        else
          value.splice(value.indexOf(identifier),1);
        postResponseVariable(interaction, value);
      }
    }
  });

  function validateHotspotToggle(hotspot) {
    if (hotspot.classList.contains(SELECTED)) {
      return true;
    } else {
      let maxChoices = qtiInteraction.getAttribute("maxChoices");
      if (!maxChoices && maxChoices!=="0")
        maxChoices = 1;
      return maxChoices==0
        || !responseVariable.value
        || responseVariable.value.length<maxChoices;
    }
  }
}

// Sets up a selectPointInteraction
function setupSelectPointInteraction(interaction) {
  interaction.querySelector("svg").onclick
    = function(evt) { selectPoint(interaction, evt.x, evt.y, "") }
}


// Sets up a positionObjectStage and Interactions
function setupPositionObjectStage(interaction) {
  let dragging;
  interaction.ondragover = (evt)=>evt.preventDefault();
  interaction.ondrop = (evt) => {
    selectPoint(interaction, evt.x, evt.y, "", dragging);
    evt.preventDefault();
  }
  [...interaction.querySelectorAll("[draggable]")].forEach(d=>{
    d.ondragend=(evt)=>{dragging=null}
    d.ondragstart=(evt)=>{dragging=d;}
  });
}

// Draws a hotspot on an SVG stage for selectPointInteraction
// and positionObjectStage.
function selectPoint(interaction, x, y, clz=SELECTED, dropped) {
  let maxChoices, responseVariable, svgElem, qtiInteraction;

  switch(interaction.getAttribute(TAG)) {
  case "selectPointInteraction":
    qtiInteraction = QTI.DOM.getElementById(interaction.id);
    maxChoices = qtiInteraction.getAttribute("maxChoices")||0;
    responseVariable = getResponseVariable(interaction);
    svgElem = document.createElementNS(SVG_NS, "circle");
    break;
  case "positionObjectStage":
    qtiInteraction = QTI.DOM.getElementById(dropped.id);
    maxChoices = qtiInteraction.getAttribute("maxChoices");
    if (!maxChoices && maxChoices!=="0")
      maxChoices = 1;
    responseVariable = getResponseVariable(dropped);
    svgElem = document.createElementNS(SVG_NS, "image");
    break;
  }

  let value = responseVariable.value||[];
  if (!Array.isArray(value))
    value = [value];
  if (maxChoices>0 && value.length>=maxChoices)
    return;
    
  let svg = interaction.querySelector("svg");

  [x, y] = viewboxOffset(svg, x, y);
  value.push(x+" "+y);
  svgElem.value = x+" "+y;
  
  switch(interaction.getAttribute(TAG)) {
  case "selectPointInteraction":
    svgElem.setAttribute("cx",x);
    svgElem.setAttribute("cy",y);
    svgElem.setAttribute("r","8");
    postResponseVariable(interaction, value)
    break;
    
  case "positionObjectStage":
    let src = dropped.getAttribute("src");
    let width = getComputedStyle(dropped).getPropertyValue("width");
    if (!maxChoices && maxChoices!=="0")
      maxChoices = 1;
    width = parseInt(width);
    width = viewboxScaleWidth(svg,width);
    svgElem.setAttributeNS(XLINK_NS, "xlink:href", src);
    svgElem.setAttribute("x", x-width/2);
    svgElem.setAttribute("y", y-width/2);
    svgElem.setAttribute("width", width);
    postResponseVariable(dropped, value);
    break;
  }

  if (clz)
    svgElem.classList.add(clz);
  svgElem.classList.add(HOTSPOT);
  svgElem.onclick = removePoint;
  svg.append(svgElem);
  
  // Removes point.
  function removePoint(evt) {
    let idx = responseVariable.value.indexOf(x+" "+y);
    responseVariable.value.splice(idx,1);
    evaporate(evt.currentTarget);
    evt.stopPropagation();
  }
}

// Removes an SVG element, first adding the EVAPORATE
// class to it, which in the "basic" stylesheet runs a CSS animation
// where the element goes poof.
function evaporate(svgElem, callback){
  let {cx:cx,cy:cy} = getDimensions(svgElem);
  svgElem.style.transformOrigin = cx+"px "+cy+"px ";
  svgElem.classList.add(EVAPORATE);
  setTimeout(()=>{
    svgElem.remove()
    if (callback)
      callback();
  }, 3000);
}

// Sets up a graphicAssociateInteraction
function setupGraphicAssociateInteraction(interaction) {
  let line = null;
  let lines = [];
  
  [...interaction.querySelectorAll(HOTSPOT_SEL)].forEach(h=>{
    h.onclick = (evt)=>(line? endLine: extendLine)(evt,h);
  });

  interaction.querySelector("svg").onclick = abandonLine;

  // Extends an SVG line being drawn out from a hotspot.
  function extendLine(evt, hotspot) {
    let svg = interaction.querySelector("svg");

    if (!line && hotspot) {
      line = document.createElementNS(SVG_NS,"line");
      let {cx:cx, cy:cy} = getDimensions(hotspot);
      line.setAttribute("x1", cx);
      line.setAttribute("y1", cy);
      line.setAttribute("x2", cx);
      line.setAttribute("y2", cy);
      line.setAttribute(ENDPOINT1, hotspot.getAttribute(ID));
      hotspot.classList.add(ENDPOINT);
      svg.insertBefore(line,svg.firstElementChild);
      interaction.onmousemove = extendLine;
    } else {
      let [x,y] = viewboxOffset(svg, evt.x, evt.y);
      line.setAttribute("x2",x);
      line.setAttribute("y2",y);
    }
    evt.stopPropagation();
  }

  // Handler for clicks on SVG.  Stops the extension of
  // the line, if there is a line being extended.
  function abandonLine(evt) {
    if (line) {
      interaction.onmousemove = null;
      line.remove();
      line = null;
    }
  }

  function endLine(evt, hotspot) {
    let qtiInteraction = QTI.DOM.getElementById(interaction.id);
    let maxAssocs = qtiInteraction.getAttribute("maxAssociations");
    let responseVariable = getResponseVariable(interaction);
    let value = responseVariable.value||[];

    if (!Array.isArray(value))
      value = [value];
    if (!maxAssocs && maxAssocs!=="0")
      maxAssocs=1;
    if (maxAssocs>0 && value.length>=maxAssocs)
      return;
    
    let x1 = +line.getAttribute("x1");
    let y1 = +line.getAttribute("y1");
    let {cx:x2, cy:y2} = getDimensions(hotspot);
    
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    interaction.onmousemove = null;
    hotspot.classList.add(ENDPOINT);
    line.setAttribute(ENDPOINT2, hotspot.getAttribute(ID));

    if (isDuplicate(lines, [x1,y1,x2,y2])) {
      line.remove();
    } else {
      let idx = lines.push([x1,y1,x2,y2])-1;
      let theLine = line;
      line.onclick = function(evt) {
        lines.splice(idx, 1);
        evaporate(theLine, setGraphicAssociateResponseVariable);
        evt.stopPropagation();
      }      
    }
    setGraphicAssociateResponseVariable();
    line = null;
    evt.stopPropagation();
  }

  function isDuplicate(lines, line) {
    return lines.some(l => {
      let result = 
          (l[0]==line[0] && l[1]==line[1]
           && l[2]==line[2] && l[3]==line[3])
          || (l[0]==line[2] && l[1]==line[3]
              && l[2]==line[0] && l[3]==line[1]);
      return result;
    });
  }

  function setGraphicAssociateResponseVariable() {
    let value = [...interaction.querySelectorAll("svg line")]
        .map(l => l.getAttribute(ENDPOINT1)+" "+l.getAttribute(ENDPOINT2));
    postResponseVariable(interaction, value);
  }
}

// Sets up a graphicOrderInteraction
function setupGraphicOrderInteraction(interaction) {
  [...interaction.querySelectorAll(HOTSPOT_SEL)].forEach(
    h=>h.onclick = (evt)=>setOrder(evt, h)
  );

  function setOrder(evt, hotspot) {
    let order = hotspot.getAttribute(ORDER);
    let togo = interaction.querySelector("#togo");
    let orders = togo.innerHTML.trim();
    
    orders = orders? orders.split(" "): [];
    if (order) {
      let text = interaction.querySelector(`text[${ORDER}="${order}"]`);
      text.remove();
      hotspot.removeAttribute(ORDER);
      orders.unshift(order);
    } else {
      let svg = interaction.querySelector("svg");
      let text = document.createElementNS(SVG_NS,"text");

      order = orders.shift();
      hotspot.setAttribute(ORDER, order);
      text.setAttribute(ORDER, order);
      text.innerHTML=order;
      let [x, y] = viewboxOffset(svg, evt.x, evt.y);
      text.setAttribute("x", x);
      text.setAttribute("y", y);
      svg.append(text);
    }
    togo.innerHTML = orders.sort().join(" ");
    setGraphicOrderResponseVariable();
  }

  function setGraphicOrderResponseVariable() {
    let value = [...interaction.querySelectorAll(HOTSPOT_SEL)]
        .filter(h=>h.getAttribute(ORDER))
        .sort((a,b)=>a.getAttribute(ORDER)-b.getAttribute(ORDER))
        .map(h=>h.getAttribute(ID))
    postResponseVariable(interaction, value);
  }
}

// Sets up a graphicGapMatchInteraction
function setupGraphicGapMatchInteraction(interaction) {
  let svg = interaction.querySelector("svg");
  let dragging;
  
  function hitTest(svg, inX, inY) {
    let [x,y] = viewboxOffset(svg, inX, inY);
    let hits = [...interaction.querySelectorAll(GAP_SEL)].filter(h=>{
      let dim = getDimensions(h);
      if (x>=dim.x && x<=dim.x+dim.width && y>=dim.y && y<=dim.y+dim.height) {
        return true;
      }
    });
    return hits.length? hits[0]: null;
  }

  [...interaction.querySelectorAll("[draggable]")].forEach(d =>{
    d.ondragstart=(evt) => {
      dragging = d;
      if (d.tagName=="SPAN") {
        evt.dataTransfer.setData("type", "text/plain");
        evt.dataTransfer.setData("text", d.innerHTML);
      } else {
        evt.dataTransfer.setData("type", "image");
        evt.dataTransfer.setData("image", d.getAttribute("src"));
      }
    }
  });

  interaction.ondragend= (evt) => {
    dragging = null;
    let h = interaction.querySelector(DRAGOVER_SEL);
    if (h)
      h.classList.remove(DRAGOVER);
  }

  interaction.ondragover = (evt) => {
    let h = interaction.querySelector(DRAGOVER_SEL);
    if (h)
      h.classList.remove(DRAGOVER);
    h = hitTest(svg, evt.x, evt.y);
    if (h)
      h.classList.add(DRAGOVER);
    evt.preventDefault();
  }

  interaction.ondrop = (evt) => {
    let gap = hitTest(svg, evt.x, evt.y);

    if (!(gap && dragging))
      return;
    
    let elem;
    let prevMatch = gap.parentElement.querySelectorAll(`${MATCH_SEL}`);
    let gapMatchMax = +gap.getAttribute(MATCH_MAX);
    let gapWidth = +gap.getAttribute("width");
    let gapHeight = +gap.getAttribute("height");
    let x0 = +gap.getAttribute("x");
    let y0 = +gap.getAttribute("y");
    let x, y;

    if (prevMatch.length && gapMatchMax==1) {
      prevMatch[0].remove();
      prevMatch = [];
    }
    
    if (evt.dataTransfer.getData("type")=="image") {
      let href = evt.dataTransfer.getData("image");
      let imgWidth, imgHeight, row, col, cols;

      if (prevMatch.length) {
        imgWidth = +prevMatch[0].getAttribute("width");
        imgHeight = +prevMatch[0].getAttribute("data-height");
      } else {
        let computedStyle = getComputedStyle(dragging)
        imgWidth = parseInt(computedStyle.getPropertyValue("width"));
        imgHeight = parseInt(computedStyle.getPropertyValue("height"));
      }

      if (gapMatchMax>1 && gapWidth>=imgWidth) {
        cols = Math.floor(gapWidth/imgWidth);
        row = Math.floor(((prevMatch.length+1)*imgWidth)/gapWidth);
        col = cols===0? 0: prevMatch.length%cols;
        x = x0 + col*imgWidth + 1;
        y = y0 + row*imgHeight;
      } else {
        x = x0;
        y = y0;
      }
      elem = document.createElementNS(SVG_NS,"image");
      elem.setAttributeNS(XLINK_NS, "xlink:href", href);
      elem.setAttribute("x", x);
      elem.setAttribute("y", y);
      elem.setAttribute("width", Math.min(imgWidth,gapWidth));
      elem.setAttribute("data-height", imgHeight);
    } else {
      elem  = document.createElementNS(SVG_NS,"text");
      elem.textContent = evt.dataTransfer.getData("text");
      elem.setAttribute("x", x0+1);
      elem.setAttribute("y", y0+gapHeight-1);
    }
    elem.classList.add(MATCH);
    gap.classList.add(MATCHED);
    gap.parentElement.append(elem);
    let matches = gap.getAttribute(MATCHES);
    let draggedId = dragging.getAttribute(ID);
    matches = draggedId+(matches? " "+matches: "");
    gap.setAttribute(MATCHES, matches);
    setGraphicGapMatchResponseVariable();
    evt.preventDefault();
  }

  function setGraphicGapMatchResponseVariable() {
    let value = [...interaction.querySelectorAll(MATCHED_GAP_SEL)]
        .map(gap=>gap.getAttribute(MATCHES)+" "+gap.getAttribute(ID));
    postResponseVariable(interaction, value);
  }
}

// Sets up a drawingInteraction
function setupDrawingInteraction(interaction) {
  let color, colorId, tool, toolId;

  let tools = {
    pen: function(color) {
      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext('2d');

      canvas.onmousedown = (evt)=> {
        ctx.lineWidth = 4;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(evt.offsetX,evt.offsetY);
        canvas.onmousemove = (evt) => {
          ctx.lineTo(evt.offsetX,evt.offsetY);
          ctx.stroke();
        }
      };
      canvas.onmouseup = ()=>{
        /* TEMPORARY */
        postResponseVariable(interaction, "data");
        canvas.onmousemove = null;
      }
    },

    bucket: function(color="#FF0000") {
      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext('2d');
      let R, G, B;
      
      if (color.startsWith("#"))
        color = color.slice(1);
      color = parseInt(color, 16);
      B = color%256;
      G = (color>>8)%256;
      R = (color>>16)%256

      canvas.onmousedown = (evt)=> {
        let x = evt.offsetX, y = evt.offsetY;
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let targetRgba = getPixel(imageData.data, x, y);
        let replRgba = {R:R,G:G,B:B,A:255};
        flood(imageData.data, x, y, targetRgba, replRgba);
        ctx.putImageData(imageData, 0, 0);

        /* TEMPORARY */
        postResponseVariable(interaction, "data");
      }

      function flood(data, x, y, targetRgba, replRgba) {
        let nodeRgba = getPixel(data, x, y);
        if (equals(nodeRgba, targetRgba)) {
          let Q = [];
          setPixel(data, x, y, replRgba);
          Q.push({x:x,y:y});
          while (Q.length && Q.length<1000) {
            let node = Q.shift();
            let adjacent = [
              {x:node.x  ,y:node.y-1},
              {x:node.x-1,y:node.y},
              {x:node.x+1,y:node.y},
              {x:node.x  ,y:node.y+1}
            ];
            adjacent.forEach(adj=>{
              nodeRgba = getPixel(data, adj.x, adj.y);
              if (equals(nodeRgba, targetRgba)) {
                setPixel(data, adj.x, adj.y, replRgba);
                Q.push({x:adj.x, y:adj.y});
              }
            });
          }
        }
      }

      function getPixel(data, x, y) {
        let d = (y*canvas.width+x)*4;
        return {R:data[d], G:data[d+1], B:data[d+2], A:data[d+3]}
      }
      
      function setPixel(data, x, y, rgba) {
        let d = (y*canvas.width+x)*4;
        data[d] = rgba.R;
        data[d+1] = rgba.G;
        data[d+2] = rgba.B;
        data[d+3] = rgba.A;
      }

      function equals(rgba1, rgba2, threshold=40) {
        return Math.abs(rgba1.R-rgba2.R)<threshold
          && Math.abs(rgba1.G-rgba2.G)<threshold
          && Math.abs(rgba1.B-rgba2.B)<threshold
          && Math.abs(rgba1.A-rgba2.A)<threshold;
      }
    },
  }
  
  let image = new Image();
  let toolSel = `table.${DRAWING_TOOLS} td`
  let selectedToolSel = `table.${DRAWING_TOOLS} td.${SELECTED}`;
  let selected = interaction.querySelectorAll(selectedToolSel);
  let canvas = interaction.querySelector("canvas");
  
  image.onload = function() {
    let ctx = canvas.getContext('2d');
    let aspect = this.naturalHeight/this.naturalWidth;
    canvas.height = canvas.width * aspect;
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height )
  }

  image.src = canvas.getAttribute("data"); 
  selected.forEach(sel => selectTool(sel));
  tools[tool](color);
  document.querySelectorAll(toolSel).forEach(td => {
    td.onclick = clickTool;
  });
  
  function clickTool(evt) {
    selectTool(evt.currentTarget);
    tools[tool](color);
  }

  function selectTool(td) {
    let id = td.getAttribute("id");
    if (id.startsWith("c")) {
      color = rgb2hex(window.getComputedStyle(td).backgroundColor);
      if (colorId)
        document.getElementById(colorId).classList.remove(SELECTED);
      colorId = id;
    } else {
      tool = id;
      if (toolId)
        document.getElementById(toolId).classList.remove(SELECTED);
      toolId = id;
    }
    td.classList.add(SELECTED);
  }

  function rgb2hex(rgb){
    let re=/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i;
    rgb = rgb.match(re);
    return (rgb && rgb.length === 4) ? "#" +
      ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
      ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
  }
}

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

//////////////////////////////////////////////////////////////////////////////
//
// media_interaction.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Sets up a mediaInteraction
function setupMediaInteraction(interaction) {
  interaction.querySelectorAll("video, audio").forEach(media=>{
    media.onplay = function() {
      postResponseVariable(interaction,1);
    }
  });
}

// For media interactions using YouTube videos, we use the
// YouTube IFrame API to tell when the video is played.
// TBD
function onYouTubeIframeAPIReady() {    
  DEBUG("youtube api ready");
}

//////////////////////////////////////////////////////////////////////////////
//
// session.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** ITEM SESSIONS
*/

// Called from interactions after candidate provides a response.
function postResponseVariable(htmlInteraction, value, variable) {
  let decl = getResponseVariable(htmlInteraction, variable);
  let item = decl.elem.parentElement;
  let htmlItem = getHTMLItemById(item.id);
  let qtiInteraction = QTI.DOM.getElementById(htmlInteraction.id);
  
  if (value !== undefined)
    decl.value = value;
  setCompletionStatus(decl.elem, "unknown", "not_attempted");
  htmlItem.classList.add(SUBMITTABLE);
  htmlItem.classList.remove(SUBMITTED);
  logVarChange("setResponseVariable", decl);
  setCurrent(htmlItem, false);  

  if (qtiInteraction && qtiInteraction.tagName==="endAttemptInteraction") {
    if (value==true)
      endAttempt(item, htmlInteraction);
  }
}

// Session control
function control(evt, k=+1) {
  DEBUG("control", evt);
  let target = evt.currentTarget;
  let current = document.querySelector(CURRENT_FRAME_SEL);
  let scrollTo = true;
  
  if (target && target!=window) {
    target = getHTMLAssessmentItem(target);
    if (target) {
      current = target;
      scrollTo = false;
    }
  }

  let frame = (current && current.id)? QTI.DOM.getElementById(current.id): null;

  if (frame && frame.tagName=="testFeedback") {
    setCurrent(getNextItem(frame, k), k==1, false);
  } else if (frame && frame.tagName=="assessmentItem") {
    controlItem(current, frame, k, scrollTo);
  } else {
    WARN("control: invalid current frame", frame);
  }
  if (evt.stopPropagation)
    evt.stopPropagation();
}

function controlItem(current, item, k, scrollTo) {
  let forward = (k===1);
  let isSkip = getSetResponseVariables(item).length==0;
  let testPart = getQTITestPart(item);
  let navigationMode = testPart.getAttribute("navigationMode");
  let submissionMode = testPart.getAttribute("submissionMode");

  // "dirty" flag means that response/outcome processing changed
  // the visibility of feedbacks or templates, the
  // values of printed variables or math variables, etc,
  // and we can't advance before letting the user see the new state.
  let dirty = false;
  
  DEBUG("item=",identifier(item), "k=", k,
              "forward=",forward, "isSkip=", isSkip);

  message(item, MSG_NONE);
  
  if (forward) {
    if (isSkip) {
      if (navigationMode=="linear" && !allowSkipping(item)) {
        message(item, MSG_NO_SKIP);
        k=0;
      }
    } else if (submissionMode=="individual") {
      // individual submission: do responseProcessing on the
      // item and outcomeProcessing at test level.
      responseProcessing(item);

      let htmlItem = getHTMLItemById(item.id);
      let vi = visibleInteractionsWithNoResponse(htmlItem);
      let attemptable = isAttemptable(item);
      let errors = [];

      dirty = getDirty(item);
      if (validateResponses(item)) 
        errors = validateAssessmentItem(item);      
      if (!attemptable && vi.length==0) {
        current.classList.add(NOT_ATTEMPTABLE);
        if (!allowReview(item)) {
          current.classList.add(NO_REVIEW);
          scrollTo = false;
        }
      }
      
      // If there are no errors and no visible
      // interactions which have no response, then
      // submit the item and style it as "submitted".
      if (errors.length==0 && vi.length==0 && !dirty) {
        submit(item);
        current.classList.add(SUBMITTED);
        current.classList.remove(SUBMITTABLE);
      } else {
        current.classList.remove(SUBMITTED);
        current.classList.remove(SUBMITTABLE);
        if (dirty && attemptable) 
          current.classList.add(SUBMITTABLE);
        if (errors.length)
          message(item, errors[0].id);          
        // stay on this item.
        k=0;
      }
    } else if (submissionMode=="simultaneous") {
      // item will be submitted with all others in the
      // same testPart. "By definition", according to spec,
      // only one attempt on an item is possible, and whether
      // the candidate can review simultaneous-mode items and
      // see item-level feedback is "outside scope" of spec.
      INFO("simultaneous mode, deferring submission: ",
           identifier(item));
    }      
  }

  if (!dirty)
    setCurrent(getNextItem(current,k), forward, scrollTo);
  setDirtyAll(false);
}

// Makes an item "current".  What it means to be the "current" item
// depends on the navigationMode and the stylesheet.
//
// In a linear testPart, the candidate may interact only with the
// "current" item, and must either make an attempt (submit a response)
// or "skip" the current item in order to make the "next" item
// current.  Stylesheets for linear navigationMode almost always use a
// "slideshow" style (though it is not strictly required), and many
// non-linear styles are slideshows as well.  In a slideshow style,
// "current" is the item which is on screen.
//
// Non-linear testParts may use a style which presents all items in a
// testPart to the candidate, and the candidate can interact with any
// of them, possibly multiple times, and submit them in any order.
// In that style, which item is "current" may not be very important and
// the candidate may not even be aware that some particular item
// is "current".
function setCurrent(nextCurrent, forward=true, scrollTo=true) {
  if (nextCurrent)
    Promise.all(QTI.PROMISES).then(setCurrentInternal);
  return;

  function setCurrentInternal(values) {
    let nextCurrentQTI = QTI.DOM.getElementById(nextCurrent.id);
    let current = document.querySelector(CURRENT_FRAME_SEL);

    if (!(nextCurrentQTI.tagName == "assessmentItem"
          || nextCurrentQTI.tagName == "testFeedback")) {
      DEBUG("setCurrent: invalid frame", nextCurrentQTI.tagName);
      return;
    }
    if (nextCurrentQTI && nextCurrentQTI.declarations)
      setDirty(nextCurrentQTI, false);

    if (nextCurrent && nextCurrent!=current) {
      if (current) {
        if (forward)
          current.classList.add(OFFSTAGE);
        current.classList.remove(CURRENT);
      }
      nextCurrent.classList.add(CURRENT);
      nextCurrent.classList.remove(OFFSTAGE);
      if (nextCurrentQTI.tagName == "assessmentItem") {
        if (scrollTo) {
          let computedStyle = window.getComputedStyle(nextCurrent);
          let scrollTo = computedStyle.getPropertyValue(SCROLL_TO);
          if (scrollTo.trim()!=="false"){
            nextCurrent.scrollIntoView();
            window.scrollBy(0, SCROLL_ADJUST);
          }
        }
      } else if (nextCurrentQTI.tagName == "testFeedback") {
        endTestPart();
      }      
    }
    setContainerAttributes();
    QTI.PROMISES = [];
  }
}

// Performs end-of-testPart actions.
function endTestPart() {
  let sel = `${TESTPART_SEL}${LINEAR_SEL}.${CURRENT}`;
  [...document.querySelectorAll(sel)].forEach(testPart=>{
    let qtiTestPart = QTI.DOM.getElementById(testPart.id);
    let submissionMode = qtiTestPart.getAttribute("submissionMode");
    testPart.classList.add(REVIEW_MODE);
    if (submissionMode==="simultaneous") {
      qtiTestPart.querySelectorAll("assessmentItem").forEach(item=>{
        responseProcessing(item);
        let htmlItem = document.getElementById(item.id);
        htmlItem.classList.add(SUBMITTED);
        htmlItem.classList.remove(SUBMITTABLE);
      });
      submit(testPart);
    }
  })
}

// Finds the first "nav" element which is a child of the HTML DOM
// element and sets its MESSAGE attribute. Depending on the theme, this
// will result in text being displayed to the candidate or some other UI
// change.
function message(elem, messageIdentifier) {
  let htmlElem = document.getElementById(elem.id);
  if (htmlElem) {
    let nav = htmlElem.querySelector("nav");
    if (messageIdentifier==MSG_NONE) {
      nav.removeAttribute(MESSAGE);
    } else {
      nav.setAttribute(MESSAGE, messageIdentifier);
    }
  }
}

// Gets itemSessionControl data for the element, rolling up
// to the root (i.e. to assessmentTest) to fill in attributes.
function getItemSessionControl(elem) {
  let data = {};
  while(elem) {
    let sel = `#${elem.id} > itemSessionControl`;
    mergeAttributes(data, elem.querySelector(sel));
    elem = elem.parentElement;
  }
  return data;
}

// Returns allowReview session control setting for item.
function allowReview(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowReview!=="false";
}

// Returns allowSkipping session control setting for item.
function allowSkipping(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowSkipping!=="false";
}

// Returns allowComment session control setting for item.
function allowComment(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.allowComment==="true";
}

// Returns showFeedback session control setting for item.
function showFeedback(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.showFeedback==="true";
}

// Returns showSolution session control setting for item.
function showSolution(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.showSolution==="true";
}

// Returns validateResponses session control setting for item.
function validateResponses(item) {
  let sessionControl = getItemSessionControl(item);
  return sessionControl.validateResponses==="true";
}

// Returns true if the an item is still "attemptable"; that
// is, completionStatus is not "completed" and if a non-adapative item,
// either maxAttempts is zero, or numAttempts is less than maxAttempts.
function isAttemptable(item) {
  let sessionControl = getItemSessionControl(item);
  let completed = item.declarations["completionStatus"].value=="completed";
  let numAttempts = +item.declarations["numAttempts"].value;
  let maxAttempts = +sessionControl.maxAttempts;
  let adaptive = isAdaptive(item);

  // defaults to 1 for non-adaptive and ignored for adaptive items.
  if (!maxAttempts && maxAttempts!==0)
    maxAttempts = 1;
  return !completed
    && (adaptive || maxAttempts==0 || numAttempts<maxAttempts);
}

// Returns array of interactions which
// (1) are children of the element
// (1) are visible (interaction parentOffset!=null)
// (2) have a response variable with a value
function visibleInteractionsWithNoResponse(elem) {
  return [...elem.querySelectorAll(INTERACTION_SEL)].filter(interaction=>{
    let rv = getResponseVariable(interaction);
    if (interaction.offsetParent==null) //not visible 
      return false;
    return rv && rv.value==null; // no response
  });
}

// Returns true if specified item is in specified section.
function inSection(item, section) {
  return section.querySelector(`#${item.id}`);
}

// Returns the item which is +1 or -1 in document sequence
// from the specified item.
function getNextItem(htmlItem, step=0) {
  let item = null;

  if (!QTI.SEQUENCE) 
    QTI.SEQUENCE = generateSequence();
  if (htmlItem) {
    item = QTI.SEQUENCE.find(entry=>entry.elem.id==htmlItem.id);
  } else {
    item = QTI.SEQUENCE[0];
    step = 0;
  }
  item = step>=0
    ? getNextItemInSequence(item, step)
    : getPrevItemInSequence(item, step);
  if (item) {
    htmlItem = document.getElementById(item.elem.id);
    item.presented = true;
    if (item.elem.tagName=="assessmentItem" && !item.elem.templateProcessed) {
      let testPart = getQTITestPart(item.elem);
      let linear = testPart.getAttribute("navigationMode")==="linear";
      if (linear)
        templateProcessing(item.elem);
    }
  }
  return htmlItem;

  function getPrevItemInSequence(item, step) {
    let presented = QTI.SEQUENCE.filter(entry=>entry.presented);
    let idx = Math.max(0, presented.findIndex(entry=>entry==item)+step)
    return presented[idx];
  }

  function getNextItemInSequence(item, step) {
    if (!item)
      return QTI.SEQUENCE[0];

    let nextItem = applyBranchRules(item) || QTI.SEQUENCE[item.seq+step];
    DEBUG("getNextItemInSequence", step, item, nextItem);    
    if (!nextItem) {
      return item;
    } if (nextItem.type=="end") {
      return getNextItemInSequence(nextItem, 1);
    } else if (!checkPreconditions(nextItem)) {
      let seq = nextItem.end? nextItem.end.seq: nextItem.seq;
      return getNextItemInSequence(QTI.SEQUENCE[seq], 1);
    } else if (nextItem.type=="begin"){
      return getNextItemInSequence(nextItem, 1);
    } else {
      return nextItem;
    }

    function checkPreconditions(item) {
      let result = [...item.elem.children]
          .filter(ch=>ch.tagName=="preCondition")
          .every(pc=>exec(pc));
      return result;
    }

    function applyBranchRules(item) {
      if (item && item.type!=="begin") {
        let rules = [...item.elem.children]
            .filter(ch=>ch.tagName=="branchRule");
        for(let r=0; r<rules.length; r++) {
          let applies = exec(rules[r]);
          DEBUG("applyBranchRules", rules[r], applies);
          if (applies)
            return getBranchRuleTarget(rules[r]);
        }
      }
      return null;
    }

    function getBranchRuleTarget(rule) {
      let target = rule.getAttribute("target");
      return target
        ? QTI.SEQUENCE.find(entry=>identifier(entry.elem)===target)
        : null;
    }
  }
  
  // Generates the sequence of items to be presented.
  function generateSequence() {
    let sequence = [];
    let itemCount = 0;

    function descend(elem) {
      [...elem.children].forEach(child=>{
        switch(child.tagName) {
        case "testPart":
        case "assessmentSection":
          let begin = {
            type: "begin",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          };
          sequence.push(begin);
          descend(child);
          let end = {
            type: "end",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          };
          begin.end = end;
          end.begin = begin;
          begin.count = end.count = end.seq-begin.seq-1;
          if (begin.count==0)
            sequence.pop();
          else
            sequence.push(end);
          break;
        case "assessmentItem":
          let slide = {
            type: "item",
            elem:child,
            seq:sequence.length,
            identifier: identifier(child),
          }
          child.seq = ++itemCount;
          sequence.push(slide);
          break;
        case "testFeedback":
          if (child.getAttribute("access")=="atEnd") {
            let slide = {
              type: "item",
              elem:child,
              seq:sequence.length,
              identifier: identifier(elem),
            }
            sequence.push(slide);
          }
          break;
        }
      });
    }
    descend(QTI.ROOT);
    return sequence;
  }
}

// Display SEQUENCE on console (for debugging)
function dumpSequence(sequence=QTI.SEQUENCE) {
  let seq=0;
  [...sequence].forEach(entry=>console.log(seq++, entry));
}
                       
// Determines the first "current" item and initializes it.
function initializeCurrentItem() {
  if (!QTI.CURRENT_ITEM_INITIALIZED) {
    setCurrent(getNextItem(), false);
    QTI.CURRENT_ITEM_INITIALIZED = true;
  }
} 

// Sets attributes such as offstage, noreview, current of a
// container based on the children.   For example, a section
// is "current" if it contains the "current" item; a section
// is "offstage" if all its child elements are offstage; etc.
function setContainerAttributes(elem=QTI.ROOT, depth=0) {
  let offstage = true, noreview = true, current = false;
  let htmlElem = document.getElementById(elem.id);

  if (elem.tagName==="assessmentItem") {
    current = htmlElem.classList.contains(CURRENT);
    offstage = htmlElem.classList.contains(OFFSTAGE);
    noreview = htmlElem.classList.contains(NO_REVIEW);
  } else {
    [...elem.children].forEach(child=>{
      switch(child.tagName) {
      case "assessmentItem":
      case "testPart":
      case "assessmentSection":
        let [ch_offstage, ch_noreview, ch_current]
          = setContainerAttributes(child, depth+1);
        offstage &= ch_offstage;
        noreview &= ch_noreview;
        current  |= ch_current;
        break;
      }
    });
  }
  if (htmlElem) {
    if (noreview && !htmlElem.classList.contains(NO_REVIEW))
      htmlElem.classList.add(NO_REVIEW);
    else if (!noreview && htmlElem.classList.contains(NO_REVIEW))
      htmlElem.classList.remove(NO_REVIEW);    
    if (offstage && !htmlElem.classList.contains(OFFSTAGE))
      htmlElem.classList.add(OFFSTAGE);
    else if (!offstage && htmlElem.classList.contains(OFFSTAGE))
      htmlElem.classList.remove(OFFSTAGE);    
    if (current && !htmlElem.classList.contains(CURRENT))
      htmlElem.classList.add(CURRENT);
    else if (!current && htmlElem.classList.contains(CURRENT))
      htmlElem.classList.remove(CURRENT);
  }
  return [offstage, noreview, current];
}

//////////////////////////////////////////////////////////////////////////////
//
// validate.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Validates an item response and returns an array of errors.
function validateAssessmentItem(item) {
  let interactions = {
    associateInteraction:         validateAssociations,
    customInteraction:            validateCustomInteraction,
    choiceInteraction:            validateChoices,
    drawingInteraction:           ()=>[],
    endAttemptInteraction:        ()=>[],
    extendedTextInteraction:      validateExtendedText,
    gapMatchInteraction:          validateAssociations,
    graphicAssociateInteraction:  validateAssociations,
    graphicGapMatchInteraction:   validateAssociations,
    graphicOrderInteraction:      validateChoices,
    hotspotInteraction:           validateChoices,
    hottextInteraction:           validateChoices,
    inlineChoiceInteraction:      ()=>[],
    matchInteraction:             validateAssociations,
    mediaInteraction:             validatePlays,
    orderInteraction:             validateChoices,
    selectPointInteraction:       validateChoices,
    sliderInteraction:            ()=>[],
    textEntryInteraction:         validateText,
    uploadInteraction:            ()=>[],
  }
  let errors = [];
  for (let interaction of Object.keys(interactions)) {
    let interactionErrors = [...item.querySelectorAll(interaction)]
        .map(i=>interactions[interaction](i));
    errors = errors.concat(...interactionErrors);
  }
  LOG("validateAssessmentItem:", identifier(item), errors);
  return errors;


  function validateAssociations(interaction) {
    let id = interaction.getAttribute("responseIdentifier");
    let declarations = getDeclarations(interaction);
    let decl = declarations[id];
    let errors = validateMinMax(interaction, decl, "Associations");
    return errors;
  }

  function validateChoices(interaction) {
    let id = interaction.getAttribute("responseIdentifier");
    let declarations = getDeclarations(interaction);
    return validateMinMax(interaction, declarations[id], "Choices");
  }

  // Validates min/maxChoices and min/maxAssociations
  function validateMinMax(interaction, decl, suffix) {
    let max = interaction.getAttribute(`max${suffix}`)||1;
    let min = interaction.getAttribute(`min${suffix}`)||0;
    let count = 0;
    if (decl.value)
      count = Array.isArray(decl.value)? decl.value.length: 1;
    if (max && count>max)
      return [{id: MSG_TOO_MANY, interaction:interaction}];
    else if (min && count<min)
      return [{id: MSG_TOO_FEW, interaction:interaction}];
    else
      return [];
  }

  function validatePlays(interaction) {
    // min/maxPlays
    return [];
  }

  function validateCustomInteraction(interaction) {
    return [];
  }

  function validateText(interaction) {
    // integer/float, baseType, base, patternMask
    return [];
  }

  function validateExtendedText(interaction) {
    // integer/float, base, patternMask, min/maxStrings
    return [];
  }
}
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

//////////////////////////////////////////////////////////////////////////////
//
// processing.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** PROCESSING
*/

// Executes Response Processing.
function responseProcessing(item) {
  item.declarations.numAttempts.value++;
  if (!isAdaptive(item))
    resetOutcomeVariables(item);

  let rpblocks = [...item.getElementsByTagName("responseProcessing")];
  let completion = (elem, processing)=>{
    processingComplete(elem, processing);
    outcomeProcessing()
  };

  if (rpblocks.length) {
    rpblocks.forEach(rp=>{
      INFO("responseProcessing", identifier(item), clock()+"msecs");
      execProcessing(rp,completion);
    });
  } else {
    completion(item);
  }
  return true;
}

// Returns true if an item is adaptive.
function isAdaptive(item) {
  return item.getAttribute("adaptive")==="true";
}

// Initializes outcome variables
function resetOutcomeVariables(elem) {
  Object.getOwnPropertyNames(elem.declarations).forEach(id=>{
    if (elem.declarations[id].elem.tagName=="outcomeDeclaration")
      elem.declarations[id].value=null;
  });
}
                                
// Executes Outcome Processing 
function outcomeProcessing(test=QTI.ROOT) {
  DEBUG("outcomeProcessing", identifier(test), clock()+"msecs");
  [...test.getElementsByTagName("outcomeProcessing")].forEach(op=>{
    execProcessing(op, processingComplete);
  });
  return true;
}

// Executes templateDefault and templateProcessing for a
// single assessmentItem, or for all assessmentItems in a testPart.
//
// The spec states that templateDefaults and templateProcessing are
// invoked (1) for items in linear testParts after response
// processing, outcome processing (and presumably any branchRules) are
// done on the preceding items, and after preConditions on the current
// item, but before the first attempt of the candidate on the item;
// and (2) for non-linear testParts, on all items in the part at the
// "start" of the part, presumably in selection/ordering order. Obviously,
// templateDefaults are applied before templateProcessing is executed.
function templateProcessing(elem) {
  DEBUG("templateProcessing", identifier(elem), clock()+"msecs");

  switch (elem.tagName) {
  case "assessmentItem":
    // Run templateDefaults/templateProcessing for the
    [...elem.getElementsByTagName("templateDefault")].forEach(tmplDefault=>{
      exec(tmplDefault);
    });

    let tpblocks = [...elem.getElementsByTagName("templateProcessing")];
    if (tpblocks.length)
      tpblocks.forEach(tp=>execProcessing(tp, processingComplete));
    else
      processingComplete(elem);
    break;
    
  case "testPart":
    // Run templateDefaults/templateProcessing for all items
    // in the testPart
    [...elem.getElementsByTagName("assessmentItem")]
      .forEach(item=>templateProcessing(item));
    break;
  }
  elem.templateProcessed = true;
}

// Executes Response/Template/Outcome Processing, asynchronously
// loading the XML from a template if not previously done.  Note that
// a "template" attribute on templateProcessing is, for some reason,
// not valid QTI syntax.
function execProcessing(processing, completed) {
  let elem = processing.parentElement;

  DEBUG("start", processing.tagName,
            identifier(elem), elem.declarations["completionStatus"]);

  if (processing.children && processing.children.length) {
    exec(processing);
    completed(elem, processing);
  } else {
    let template = processing.getAttribute("template");
    if (template) {
      loadXml(template, elem, (dom)=>{
        dom = dom.children[0];
        elem.replaceChild(dom, processing);
        exec(dom);
        completed(elem, processing);
      });
    } else {
      completed(elem, processing);
    }
  }
  DEBUG("end", processing.tagName);
}

// Completion routine for processing.
function processingComplete(elem, processing) {
  triggerShowHide(elem);
  updatePrintedVariables(elem);
  updateMathMLVariables(elem);
  pivotTables(document)
}

// Untrigger ModalFeedback blocks
function untriggerModalFeedback() {
  [...document.querySelectorAll(MODAL_SEL)]
    .forEach(modal=>modal.classList.remove(TRIGGERED));
}

// Trigger showHide elements (Feedbacks, templates, and interaction
// components like choices, gaps, gap fills, etc.)
function triggerShowHide(item) {
  let htmlItem = getHTMLItemById(item.id);

  [...htmlItem.querySelectorAll(SHOWHIDE_SEL)].forEach(elem=>{
    let variable = elem.getAttribute(OUTCOME_ID)
        || elem.getAttribute(TEMPLATE_ID);
    let id = elem.getAttribute(ID);
    let decl = item.declarations[variable];

    if (decl) {
      let value = decl.value;
      let triggered = elem.classList.contains(TRIGGERED);
      if (!value || (Array.isArray(value) && value.length==0))
        value = getDefaultValue(decl);
      if (matchesOrMember(id, value)) {
        if (!triggered)
          setDirty(item);
        elem.classList.add(TRIGGERED)
      } else if (triggered) {
        setDirty(item);
        elem.classList.remove(TRIGGERED);
      }
    }
  });
}

// Updates printed variables with latest variable values.
function updatePrintedVariables(item) {
  let printedVars;
  if (item.tagName=="assessmentItem") {
    let htmlItem = getHTMLItemById(item.id);
    printedVars = [...htmlItem.querySelectorAll(PRINTEDVAR_SEL)];
  } else if (item.tagName=="assessmentTest") {
    let sel = `${TEST_FDBK_SEL} ${PRINTEDVAR_SEL}`
    printedVars = [...document.querySelectorAll(sel)];
  }
  if (printedVars) {
    printedVars.forEach(pv=>{
      let variable = pv.getAttribute(ID);
      let decl = item.declarations[variable];
      if (decl) {
        let value = coerce(decl, decl.value, getDefaultValue(decl));
        if (decl.cardinality==="multiple")
          value = value.join(pv.getAttribute(DELIMITER));
        let prefix = pv.getAttribute(PREFIX_ATTRIB)||"";
        let suffix = pv.getAttribute(SUFFIX)||"";
        let prevInnerHTML = pv.innerHTML;
        pv.innerHTML = prefix+value+suffix;
        if (pv.innerHTML != prevInnerHTML)
          setDirty(item);
      }
    });
  }
}

// Updates MathML elements with latest variable values.
function updateMathMLVariables(item) {
  if (!window.MathJax)
    return;
  
  let htmlItem = getHTMLItemById(item.id);
  let math = [...htmlItem.querySelectorAll(`script[type="math/mml"]`)];
  let updated = false;
  
  math.forEach(m=>{
    let re = /<[mc]i[^>]*>([^<]*)<\/[mc]i>/g;
    m.innerHTML = m.innerHTML.replace(re, (match,...vars)=>{
      vars.forEach(v=>{
        let decl = item.declarations[v];
        if (decl) {
          match = match.replace(v, coerce(decl, decl.value));
          updated = true;
          setDirty(item);
        }
      });
      return match;
    });
  });
  if (updated) {
    QTI.PROMISES.push(new Promise(function(resolve, reject){
      MathJax.Hub.Queue(["Reprocess", MathJax.Hub, htmlItem, function(){
        DEBUG("MathJax Reprocess", htmlItem);
        resolve(true);
      }]);
    }));
  }
}

// This "pivots" any tables classed as "pivotable" where
// there is more than the maximum number columns and pivoting
// would reduce the number of columns.
function pivotTables(htmlItem) {
  htmlItem.querySelectorAll(PIVOTABLE_SEL).forEach(table=>{
    let maxCols = +table.getAttribute(MAXCOLS)||MAX_TABLE_COLS;
    let rows = tableRows(table);
    let cols = tableCols(table);
    if(cols>maxCols && rows<cols)
      pivot(table);
  });
}

// Executes a template/response/outcome processing block.
function processing(elem) {
  const MAX_ITERATIONS = 100;
  let iterations = 1;

  while (iterations <= MAX_ITERATIONS) {
    try {
      let result = QTI.TRANSFORMING? null: container(elem);
      if (iterations>1)
        DEBUG(elem.tagName,"for",identifier(elem.parentElement),
            "iterations",iterations);
      return result;
    } catch(e) {
      if (e==="constraintViolation") {
        iterations++;
        continue;
      } else if (e==="exitTest"
                 || e==="exitResponse"
                 || e==="exitTemplate") {
        break;
      } else {
        WARN("EXCEPTION: ", e);
        break;
      }
    }
  }
}

// Executor. In transform phase returns null (i.e. no transform).
// Otherwise returns result of executing first child.
function expression(elem) {
  return QTI.TRANSFORMING? no_transform(elem): execChildren(elem,0,1)[0];
}

// Executor which just executes all its child elements and
// concatenates the results.
function container(elem, ctx) {
  return execChildren(elem).join("")
}

// "Transparent" container.
function fragment(elem) {
  return execChildren(elem);
}

// Executes the children of an element, returning an array of the
// results.
function execChildren(elem,from=0,to) {
  let children = [...elem.children];
  if (from || to)
    children = children.slice(from,to);
  return children.map(ch => exec(ch));
}

// Executor which throws an exception if first child does not return
// true.
function constraint(elem) {
  if (!exec(elem.children[0]))
    throw "constraintViolation";
}

// Executor which executes the children of the element
// until one of the executions returns true.
function condition(elem) {  
  let child = [...elem.children];
  let i = 0;
  while (i<child.length && !exec(child[i])) {
    i++
  }
}

// Executor which executes the first child expression, (the condition),
// and if it returns true, executes the rest of the children.
function conditionIf(elem) {
  let cond = exec(elem.children[0]);
  let result = cond? execChildren(elem,1): false;
  return result;
}

// Sets outcome variable by evaluating child expression
// and translating that value through the LUT (matchTable or
// interpolationTable) associated with the variable.
function lookupOutcomeValue(elem) {
  setVar(elem, (decl,value)=> {
    let method;
    if (decl.interpolationTable) {
      method = function(K) {
        let entries = decl.interpolationTable.entries;
        let keys = Object.getOwnPropertyNames(entries);
        for(let k of keys.sort().reverse()) {
          let entry = entries[k];
          let includeBoundary = entry.includeBoundary!=="false";
          if (k<K || (includeBoundary && k==K))
            return entry.targetValue;
        }
        return decl.interpolationTable.defaultValue;
      }
    } else if (decl.matchTable) {
      method = function(K) {
        let entry = decl.matchTable.entries[K];
        if (!entry && decl.baseType=="pair")
          entry = decl.matchTable.entries[swapPair(K)];
        return entry? entry.targetValue: decl.matchTable.defaultValue;
      }
    } else {
      return null;
    }
    return method? mapLookup(decl, method, value): null;
  });
}

// Calls "method", or for a "multiple" or "ordered" input, maps the
// method over the input.
function mapLookup(decl, method, value=decl.value) {
  if (decl.cardinality=="multiple" || decl.cardinality=="ordered") {
    if (!Array.isArray(value))
      value = [value];
    return value.map(method);
  } else {
    return method(value);
  }
}

// Helper for setOutcomeValue, setTemplateValue, and
// lookupOutcomeValue.
function setVar(elem, getter=(decl,value)=>value) {
  let declarations = getDeclarations(elem);
  let decl = declarations[identifier(elem)];
  if (decl) {
    let value = getter(decl, execChildren(elem,0,1)[0]);
    decl.value = coerce(decl, value);
    logVarChange(elem.tagName, decl);
  }
}

// Sets attribute of a variable, such as "correctResponse"
function setVarAttribute(elem, values) {
  execChildren(elem);
  if (!values)
    values = elem.values;
  let parent = elem.parentElement;
  let id = identifier(parent);
  let decl = getDeclarations(elem)[id];
  decl[elem.tagName] = coerce(decl, values);
}
  
// Gets the response variable for an HTML-domain interaction.
function getResponseVariable(htmlInteraction, variable) {
  const item = getQTIItemById(htmlInteraction.getAttribute(ITEM));
  variable = variable || htmlInteraction.getAttribute(RESPONSE_ID);
  return item.declarations[variable];
}

// Sets the response variable of an HTML-domain interaction
function setResponseVariable(htmlInteraction, variable, value) {
  let decl = getResponseVariable(htmlInteraction, variable, value);
  if (decl)
    decl.value = value;
}

// The dirty flag indicates that an item has changed in a way which
// the candidate should see, such as showHide-controlled content
// becoming visible.  "one-click continue" navigation is supposed to
// remain on the "current" item if it is dirty, forcing the user to
// interact with the item at least one more time before
// proceeding to the "next" item -- if only to click the "continue"
// button (e.g. an arrow) again.  The "dirty" flag is implemented as a
// special pre-declared "$dirty" variable on the item.
function setDirty(item, value=true) {
  if (item.declarations["$dirty"])
    item.declarations["$dirty"].value = value;
}

// Sets the dirty flag on all the items and containers in a test, part,
// section, etc.
function setDirtyAll(value=true) {
  let sel = "assessmentTest, testPart, assessmentSection, assessmentItem";
  [...QTI.DOM.querySelectorAll(sel)].forEach(child=>{
    let decl = child.declarations;
    if (decl && decl["$dirty"])
      decl["$dirty"].value = value;
  });
}

// Returns the dirty flag for an item.
function getDirty(item) {
  return item.declarations["$dirty"].value;
}

// Ends attempt on current item.
function endAttempt(item, htmlInteraction) {
  let responseVar = htmlInteraction.getAttribute(RESPONSE_ID);
  [...item.querySelectorAll("endAttemptInteraction")].forEach(ea=>{
    let rv = ea.getAttribute("responseIdentifier");
    if (rv != responseVar) 
      item.declarations[rv].value = false;
  });
  htmlInteraction.classList.add(CLICKED);
  control({currentTarget:htmlInteraction}, +1);
}
  
// Logs a variable value change on the console (for debugging).
function logVarChange(tag, decl, prev) {
  let itemId = identifier(decl.ctx);
  let varId = decl.identifier;
  DEBUG(tag,`${itemId}.${varId} = ${decl.value} ${prev?prev:""}`);
}

// Sets variable attribute to the value of element.
// Helper for setCorrectResponse, setDefaultValue
function setAtt(elem, attrib) {
  let value = execChildren(elem,0,1)[0];
  let variable = identifier(elem);
  let decl = getDeclarations(elem)[variable];
  decl[attrib] = coerce(decl, value);
}

// Executor for templateDefault.  Noop if invoked during transform.
// Similar to setDefaultValue if invoked in connection with
// templateProcessing.
function templateDefault(elem) {
  if (QTI.TRANSFORMING)
    return null;
  else {
    let templateVar = elem.getAttribute("templateIdentifier");
    let decl = getDeclarations(elem)[templateVar];
    decl.defaultValue = coerce(decl, execChildren(elem,0,1)[0]);
    return true;
  }
}

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

function countItems(elem, selOp) {
  let filters = getFilters(elem);
  return QTI.SEQUENCE.filter(selOp)
    .filter(item=>filterItem(item.elem, filters))
    .length;
}

function isSelected(frame) {
  return frame.elem.tagName=="assessmentItem";
}

function isPresented(frame) {
  return frame.elem.tagName=="assessmentItem"
    && frame.presented;
}

function isResponded(frame) {
  return frame.elem.tagName=="assessmentItem"
    && getSetResponseVariables(frame.elem).length>0;
}

// Returns true if all the response variables for the item which have
// correctResponse defined have a value which matches the
// correctResponse.
function isCorrect(frame) {
  if (frame.elem.tagName=="assessmentItem") {
    let vars = getResponseVariables(frame.elem);
    let correct = vars.filter(decl=>{
      return decl.correctResponse
        && decl.value
        && match(decl.correctResponse, decl.value);
    })
    return correct.length==vars.length;
  } else {
    return false;
  }
}

function isIncorrect(frame) {
  return isResponded(frame) && !isCorrect(frame);
}

// Logs textContent of element on console.
function consoleLog(elem) {
  console.log("console: ",trim(elem.textContent));
}

//////////////////////////////////////////////////////////////////////////////
//
// rptemplates.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** BUILT-IN RESPONSE PROCESSING TEMPLATES
*/

QTI.XML_CACHE["match_correct"] =
  `<responseProcessing><responseCondition><responseIf><match><variable identifier="RESPONSE"/><correct identifier="RESPONSE"/></match><setOutcomeValue identifier="SCORE"><baseValue baseType="float">1</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue></responseElse></responseCondition></responseProcessing>`;

QTI.XML_CACHE["map_response"] =
  `<responseProcessing><responseCondition><responseIf><isNull><variable identifier="RESPONSE"/></isNull><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0.0</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="SCORE"><mapResponse identifier="RESPONSE"/></setOutcomeValue></responseElse></responseCondition></responseProcessing>`;

QTI.XML_CACHE["map_response_point"] =
  `<responseProcessing><responseCondition><responseIf><isNull><variable identifier="RESPONSE"/></isNull><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="SCORE"><mapResponsePoint identifier="RESPONSE"/></setOutcomeValue></responseElse></responseCondition></responseProcessing>`;

QTI.XML_CACHE["CC2_match_basic"] =
  `<responseProcessing><responseCondition><responseIf><match><variable identifier="RESPONSE"/><correct identifier="RESPONSE"/></match><setOutcomeValue identifier="SCORE"><variable identifier="MAXSCORE"/></setOutcomeValue><setOutcomeValue identifier="FEEDBACKBASIC"><baseValue baseType="identifier">correct</baseValue><setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="FEEDBACKBASIC"><baseValue baseType="identifier">incorrect</baseValue></setOutcomeValue></responseElse></responseCondition></responseProcessing>`;

QTI.XML_CACHE["CC2_match"] =
  `<responseProcessing><setOutcomeValue identifier="FEEDBACK"><variable identifier="RESPONSE"/></setOutcomeValue><responseCondition><responseIf><match><variable identifier="RESPONSE"/><correct identifier="RESPONSE"/></match><setOutcomeValue identifier="SCORE"><variable identifier="MAXSCORE"/></setOutcomeValue></responseIf></responseCondition></responseProcessing>`;

QTI.XML_CACHE["CC2_map_response"] =
  `<responseProcessing><responseCondition><responseIf><isNull><variable identifier="RESPONSE"/></isNull><setOutcomeValue identifier="SCORE"><baseValue baseType="float">0.0</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="SCORE"><mapResponse identifier="RESPONSE"/></setOutcomeValue></responseElse></responseCondition><responseCondition><responseIf><equal toleranceMode="exact"><variable identifier="MAXSCORE"/><variable identifier="SCORE"/></equal><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">correct</baseValue></setOutcomeValue></responseIf><responseElse><setOutcomeValue identifier="FEEDBACK"><baseValue baseType="identifier">incorrect</baseValue></setOutcomeValue></responseElse></responseCondition></responseProcessing>`;

//////////////////////////////////////////////////////////////////////////////
//
// durations.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** DURATIONS AND TIMING
*/

// Sets duration
function setDuration(elem, session) {
  let duration = elem.declarations["duration"];
  if (!duration.value)
    duration.value = [];
  duration.value.push(session);
}

// Updates the rendered timeLimits elements.
function updateTimeLimits(elem=document) {
  [...elem.querySelectorAll(TIME_LIMITS_SEL)].forEach(tl =>{
    let timeLimits = QTI.DOM.getElementById(tl.id);
    let now = new Date();
    let maxTime = timeLimits.getAttribute("maxTime");
    let minTime = timeLimits.getAttribute("minTime");
    let duration = timeLimits.parentElement.declarations["duration"];
    let sessions = duration.value;
    let lastSession = sessions[sessions.length-1];
    let elapsed = now.getTime() - lastSession[0].getTime();

    tl.innerHTML = `<span>${formatSeconds(Math.round(elapsed/1000))}`
      + (maxTime? ` / Max: ${formatSeconds(maxTime)}`: "")
      + (minTime? ` / Min: ${formatSeconds(minTime)}`: "")
      +"</span>";

    if (isOvertime(elapsed, maxTime)) {
      tl.classList.add(OVERTIME);
      if (timeLimits.getAttribute("allowLateSubmission")!=="true")
        tl.parentElement.classList.add(OVERTIME);
    } else if (isUndertime(elapsed, minTime)) {
      tl.parentElement.classList.add(UNDERTIME);
    } else {
      tl.parentElement.classList.remove(UNDERTIME);
    }
  });

  // Formats seconds in "99h 99m 99s" format.
  function formatSeconds(sec) {
    if (sec==0) {
      return "";
    } else if (sec<60) {
      return sec+"s";
    } else if (sec < 3600) {
      return Math.floor(sec/60)+"m "+formatSeconds(sec%60);
    } else {
      return Math.floor(sec/3600)+"h "+formatSeconds(sec%3600);
    }
  }

  // Formats milliseconds in 99:99:99 format.
  function formatSeconds2(millisecs) {
    let H = Math.floor(millisecs/3600000);
    let M = Math.floor((millisecs-H*360000)/60000);
    let S = Math.floor((millisecs-H*360000-M*60000)/1000);
    if (H<10) H = '0'+H;
    if (M<10) M = '0'+M;
    if (S<10) S = '0'+S;
    let formatted = (+H!='00'? `${H}:${M}:${S}`: `${M}:${S}`);
  }                 
  
  function isOvertime(elapsed, maxTime) {
    return maxTime && (elapsed/1000 > maxTime);
  }
                                                                    
  function isUndertime(elapsed, minTime) {
    return minTime && (elapsed/1000 < minTime);
  }    
}

//////////////////////////////////////////////////////////////////////////////
//
// results.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** RESULTS SUBMISSION
*/

// Submits the variables of an item to a server, using
// the QTI Results Reporting XML format.
function submit(item) {
  if (!QTI.RESULTS_ENDPOINT)
    return;

  DEBUG("submit: endpoint=",  QTI.RESULTS_ENDPOINT,
       "headers=", QTI.RESULTS_HEADERS);

  let assessmentResult = QTI.DOM.createElement("assessmentResult");
  let context = QTI.DOM.createElement("context");
  let sessionIdentifier = QTI.DOM.createElement("sessionIdentifier");
  let testResult, itemResult;
  let now = new Date().toISOString();
  
  sessionIdentifier.setAttribute("sourceId", window.location.origin);
  sessionIdentifier.setAttribute("identifier", getUuidFromStorage(KEY_SESSIONID));
  context.setAttribute("sourcedId", QTI.SOURCEDID||getUuidFromStorage(KEY_USERID));
  context.appendChild(sessionIdentifier);
  assessmentResult.appendChild(context);

  let emit = (elem) => {
    switch (elem.tagName) {
    case "assessmentTest":
      testResult = QTI.DOM.createElement("testResult");
      testResult.setAttribute("identifier", identifier(elem));
      testResult.setAttribute("datestamp", now);
      if (appendVariables(testResult, elem.declarations))
        assessmentResult.appendChild(testResult);
      break;      
    case "assessmentItem":
      itemResult = QTI.DOM.createElement("itemResult");
      itemResult.setAttribute("identifier", identifier(elem));
      itemResult.setAttribute("sequenceIndex", elem.seq);
      itemResult.setAttribute("datestamp", now);
      itemResult.setAttribute("sessionStatus", "final");
      if (appendVariables(itemResult, elem.declarations))
        assessmentResult.appendChild(itemResult);
      break;
    case "testPart":
    case "assessmentSection":
      // NYI
      break;
    }
  }

  // This emits variables of structures other than the item being
  // submitted, including other items if they are dirty.
  let sel = "assessmentTest, testPart, assessmentSection, assessmentItem";
  [...QTI.DOM.querySelectorAll(sel)].forEach(child=>{
    if (child!=item
        && (child.tagName!=="assessmentItem"
            || (child.declarations["$dirty"]
                && child.declarations["$dirty"].value))) {
      INFO("submit", identifier(child), child.declarations["$dirty"]);
      emit(child);
    }
  });

  // This emits the item variables.
  emit(item);

  // Send results
  post(QTI.RESULTS_ENDPOINT, QTI.RESULTS_HEADERS, assessmentResult);
  
  function appendVariables(result, declarations) {
    let appended = 0;
    
    [...Object.getOwnPropertyNames(declarations)].forEach(id=>{
      let decl = declarations[id];
      if (decl.value
          && (!Array.isArray(decl.value) || decl.value.length>0)
          && !(decl.view=="testConstructor" || decl.view=="author")) {
        let variable, valuesParent;
        let values = !Array.isArray(decl.value)? [decl.value]: decl.value;
        
        switch(decl.elem.tagName) {
        case "responseDeclaration":
          variable = QTI.DOM.createElement("responseVariable");
          valuesParent = QTI.DOM.createElement("candidateResponse");
          variable.appendChild(valuesParent);
          break;
        case "outcomeDeclaration":
          variable = valuesParent = QTI.DOM.createElement("outcomeVariable");
          break;        
        case "templateDeclaration":
          variable = valuesParent = QTI.DOM.createElement("templateVariable");        
          break;
        }
        if (variable) {
          values.forEach(v=>{
            let value = QTI.DOM.createElement("value");
            value.textContent = v;
            valuesParent.appendChild(value);
          });
          variable.setAttribute("identifier", id);
          variable.setAttribute("cardinality", decl.cardinality);
          variable.setAttribute("baseType", decl.baseType);
          result.appendChild(variable);
          appended++;
        }
      }
    });
    return appended;
  }
}

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

//////////////////////////////////////////////////////////////////////////////
//
// graphic_utils.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** HELPERS FOR GRAPHIC INTERACTIONS
*/

// Given x, y in client coordinates, converts to
// x,y in svg viewbox coordinates.
function viewboxOffset(svg, x, y) {
  let svgRect = svg.getBoundingClientRect();
  let [vbMinX, vbMinY, vbWidth, vbHeight]
      = svg.getAttribute("viewBox").split(" ");
  x -= svgRect.x;
  y -= svgRect.y;
  x = Math.round((x*vbWidth)/svg.clientWidth);
  y = Math.round((y*vbHeight)/svg.clientHeight);
  return [x,y];
}

// Given width in client coordinates, scales to the
// the svg viewbox.
function viewboxScaleWidth(svg, width) {
  let svgRect = svg.getBoundingClientRect();
  let [vbMinX, vbMinY, vbWidth] = svg.getAttribute("viewBox").split(" ");
  return Math.round((width*vbWidth)/svg.clientWidth);
}

// Given height in client coordinates, scales to the
// svg viewbox.
function viewboxScaleHeight(svg, height) {
  let svgRect = svg.getBoundingClientRect();
  let [vbMinX, vbMinY, vbWidth, vbHeight]
      = svg.getAttribute("viewBox").split(" ");
  return Math.round((height*vbHeight)/svg.clientHeight);
}
    
// Gets position, width, and height of a hotspot in SVG
// coordinate system.
function getDimensions(hotspot) {
  let x,y,r,height,width;
  switch(hotspot.tagName) {
  case "circle":
    cx = +hotspot.getAttribute("cx");
    cy = +hotspot.getAttribute("cy");
    r = +hotspot.getAttribute("r");
    x = cx - r;
    y = cy - r
    width = height = 2*r;
    break;
  case "ellipse":
    cx = +hotspot.getAttribute("cx");
    cy = +hotspot.getAttribute("cy");
    rx = +hotspot.getAttribute("rx");
    ry = +hotspot.getAttribute("ry");
    x = cx - rx;
    y = cy - ry;
    width = 2*rx;
    height = 2*ry;
    break;
  case "polygon":
    let points = getPolygonPoints(hotspot);
    let max = {x:-10000, y:-10000}; min={x:100000,y:10000};
    x = points[0].x*1;
    y = points[0].y*1;
    for (let p=0; p<points.length; p++) {
      max.x=Math.max(points[p].x, max.x);
      max.y=Math.max(points[p].y, max.y);      
      min.x=Math.min(points[p].x, min.x);
      min.y=Math.min(points[p].y, min.y);      
    }
    cx = max.x-min.x;
    cy = max.y-min.y;
    r = cx/2;
    break;
  case "rect":
  case "image":  
    height = +hotspot.getAttribute("height");
    width = +hotspot.getAttribute("width");
    x = +hotspot.getAttribute("x");
    y = +hotspot.getAttribute("y");
    cx = x + Math.round(width/2);
    cy = y + Math.round(height/2);
    r = (cx+cy)/2;
    break;
  }
  return {x:x,y:y,height:height,width:width,cx:cx,cy:cy,r:r};
}

// Converts "points" attribute to array of polygon points
function getPolygonPoints(points) {
  let points = elem.getAttribute("points");
  points = points.split(" ");
  points = points.map(pt => {
    pt = pt.split(",");
    return {x: pt[0], y:pt[1]}
  });
  return points;
}

// Sets SVGViewBox after stage image has loaded.
function setSVGViewboxFromStage(img) {
  let svg = img.parentElement.querySelector("svg");
  svg.setAttribute("viewBox", `0 0 ${img.naturalWidth} ${img.naturalHeight}`);  
}

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

//////////////////////////////////////////////////////////////////////////////
//
// xhr.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** LOADING
*/

// Sends a HEAD request.
function head(uri, completed) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    completed(uri, this.status);
  });
  xhr.open("HEAD", uri);
  xhr.send();
}

// Sends a POST request.
function post(uri, headers, xmlDocument) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", uri);
  xhr.setRequestHeader("Content-Type", "application/xml");
  if (headers) {
    Object.getOwnPropertyNames(headers).forEach(h=>{
      xhr.setRequestHeader(h, headers[h]);
    });
  }
  xhr.send(new XMLSerializer().serializeToString(xmlDocument));
}

// Gets a script and appends it to the HTML document,
// resulting in it being executed.
function getScript(uri) {
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
    if (this.status==200) {
      DEBUG("appending script", uri);
      appendScript(this.responseText);
    }
  });
  xhr.open("GET", uri);
  xhr.send();
}
  
// Load XML file
function loadXml(uri, base, loaded, failed) {
  let cacheKey = uri.toString();
  if (QTI.XML_CACHE[cacheKey]) {
    DEBUG("loaded from cache", cacheKey);
    if (loaded)
      setTimeout(()=>{loaded(parse(QTI.XML_CACHE[cacheKey]))},0);
  } else if (uri.indexOf("/rptemplates")>=0) {
    let simplifiedUri = simplifyUri(uri);
    if (QTI.XML_CACHE[simplifiedUri]) {
      DEBUG("loaded rptemplate from cache");
      if (loaded)
        setTimeout(()=>{loaded(parse(QTI.XML_CACHE[simplifiedUri]))},0);
    }
  } else {
    DEBUG("cache miss", cacheKey);
    QTI.LOADING_COUNT++;
    QTI.PROMISES.push(new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();  
      uri = new URL(uri, getBase(base));
      xhr.addEventListener("load", function() {
        QTI.LOADING_COUNT--;
        if (!QTI.XML_CACHE[cacheKey]) {
          DEBUG("caching", cacheKey);
          QTI.XML_CACHE[cacheKey] = this.responseText;
        }
        let xmldom = parse(this.responseText);
        let status = this.status;
        if (status != 200) {
          if (failed)
            failed(uri, status);
        } else {
          setXMLBase(xmldom.children[0], uri);
          INFO("loaded",  uri.toString(), clock()+"msecs");
          if (loaded)
            loaded(xmldom);
        }
        resolve({uri,status});
      });
      DEBUG("loading", uri+"", QTI.LOADING_COUNT);
      xhr.open("GET", uri);
      xhr.send();
    }));
  }

  // Sets xml:base for a node.
  function setXMLBase(node, uri) {
    node.setAttributeNS(XML_NS, "xml:base", uri);
  }
    
  // This turns a URI into a "simplified" cache key.
  // Basically remove everything in the uri except the final part
  // of the path.  Also remove an ".xml" extension, if present.
  function simplifyUri(uri) {
    let parts = uri.split("/");
    return parts[parts.length-1].replace(".xml","");
  }
    
  // Calls DOMParser to parse XML, after first removing
  // the "<?xml" tag at the beginning.  Also "m:" prefix
  // is removed.  If MathML namespace prefix isn't "m:", then
  // there could be problems.  If QTI elements are in an
  // "qti:" namespace, we are also in trouble.
  function parse(xmlString) {
    xmlString = xmlString
        .replace(/<\?xml[^>]*>\n/,"")
        .replace(/<m:/g,"<")
        .replace(/<\/m:/g,"<\/");
    return new DOMParser().parseFromString(xmlString,"application/xml");
  }
}

//////////////////////////////////////////////////////////////////////////////
//
// main.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

let LOAD_TIME = new Date();

window.addEventListener("load",function() {
  INFO("window.onload", clock()+"msecs");

  let params = new URL(document.location).searchParams;
  let docroot = document.children[0];
  let indexUri = params.get("root")||"index.xml"

  indexUri = new URL(indexUri, document.baseURI).toString();
  QTI.SOURCEDID = params.get("sourcedid");
  QTI.TEST_CLASS = params.get("class");
  loadXml(indexUri, docroot, loadIndex, function(uri, status) {
    loadXml("imsmanifest.xml", docroot, loadManifest);
  });
  DEBUG("end window.onload", clock()+"msecs");

  
  // Loads index file.
  // The root document is fully expanded all the way down,
  // with selection/ordering, transform, and for non-linear
  // testParts, template processing.
  function loadIndex(index) {
    let theme = params.get("theme")||DEFAULT_THEME;

    DEBUG("index loaded", clock()+"msecs");
    QTI.DOM = index;
    QTI.ROOT = index.children[0];
    document.title = QTI.ROOT.getAttribute("title");

    // If no "stylesheet" tag at assessmentTest level, add one.
    if (!QTI.ROOT.querySelector(STYLESHEET_SEL))
      addStylesheet(QTI.ROOT,`${theme}/style.css`, indexUri);

    if (QTI.ROOT.tagName=="assessmentItem") {
      // The root XML document is a standalone assessmentItem.
      append(doTransforms(QTI.ROOT));
      setupAssessmentItem(QTI.ROOT);
      setTimeout(start, START_DELAY_ITEM);
    } else {

      if (QTI.ROOT.tagName=="assessmentSection") {
        // The root XML document is a standalone assessmentSection.
        // Construct a testPart and an assessmentTest on-the-fly
        // in which to root the section.
        let test = QTI.DOM.createElement("assessmentTest");
        let testPart = QTI.DOM.createElement("testPart");
        test.setAttribute("identifier", "TEST");
        test.setAttribute("title", "Test");
        testPart.setAttribute("identifier", "PART");
        testPart.setAttribute("title", "Test Part");
        testPart.setAttribute("navigationMode", "nonlinear");
        testPart.setAttribute("submissionMode", "individual");
        test.appendChild(testPart);
        testPart.appendChild(QTI.ROOT);
        QTI.ROOT = test;
        QTI.DOM.appendChild(QTI.ROOT);
      }

      // Expands all sectionRefs in the XML root all the way down.
      // When all sectionRefs are resolved, selection, ordering, and
      // transformation to HTML are done, again all the way down, for
      // all sections in all selected testParts and sections.
      // Transformation of sections has as a side-effect that selected
      // ItemRefs contained by the section are resolved, loaded, and
      // transformed, and for items in non-linear testParts, template
      // processing is run on those items.  This means that before the
      // first item is presented to the candidate, all items for the
      // test in all selected test parts and sections have been
      // downloaded, selected, ordered, and (for non-linear test
      // parts) template-processed.
      DEBUG("start expansion", clock()+"msecs");
      expandSectionRefs(QTI.ROOT);
      waitForSectionExpansion(QTI.ROOT,function() {
        QTI.SECTIONS_EXPANDED = true;
        QTI.PROMISES = [];
        
        selectAndOrder(QTI.ROOT);
        setInstances(QTI.ROOT);
        addAtEndTestFeedback(QTI.ROOT);
        append(doTransforms(QTI.ROOT));
        setupNavigationUI();
        updatePrintedVariables(QTI.ROOT);
        if (window.MathJax)
          MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        DEBUG("end expansion", clock()+"msecs");
        setTimeout(start, START_DELAY_TEST);
      });
    }
  }
  
  // Reads manifest and loads first test.
  function loadManifest(manifest) {
    manifest = manifest.children[0];
    let sel = "[type=imsqti_test_xmlv2p1],[type=imsqti_test_xmlv2p2]"
    let test = manifest.querySelector(sel)
    if (test) {
      let href = test.getAttribute("href");
      loadXml(href, docroot, loadIndex);
    } else {
      WARN("No test in manifest");
    }
  }

  // Adds a "stylesheet" element to the QTI XML.  This will
  // get transformed later into a <link rel=stylesheet...> element
  // in the HTML, which will bring about the actual load
  // of the stylesheet.
  function addStylesheet(parent, uri, base) {
    let style = document.createElement("stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", new URL(uri, base));
    parent.insertBefore(style, parent.firstElementChild);
  }

  // Called when everything is supposedly loaded.  Body display is
  // changed from "none" to "block", hopefully avoiding a FOUC.  At
  // present, this is called from a timeout after START_DELAY_TEST
  // msecs. This is not ideal, since that may be not enough, or too
  // much.
  function start() {
    INFO("start", clock()+"msecs")
    loadThemeScript();
    document.body.style.display="block";
    beginInteractionSessions(QTI.ROOT);
    setTimeout(initializeCurrentItem, 100);
    setInterval(updateTimeLimits, 100);
    DEBUG("end start", clock()+"msecs");
  }

  // Checks a CSS custom property giving the name of a "theme script",
  // and, if found, loads it.   
  function loadThemeScript() {
    if (QTI.ENABLE_THEME_SCRIPT) {
      let theme = params.get("theme")||DEFAULT_THEME;
      let computedStyle = window.getComputedStyle(document.body);
      QTI.THEME_JS = computedStyle.getPropertyValue(THEME_SCRIPT).trim();
      if (QTI.THEME_JS) {
        let themeScript = `${theme}/${QTI.THEME_JS}`;
        getScript(themeScript);
      }
    }
  }
  
  // Expands assessmentSectionRefs in an element.
  function expandSectionRefs(elem) {
    [...elem.children].forEach(child => {
      switch(child.tagName) {
      case "assessmentSectionRef":
        let href = child.getAttribute("href")
        loadXml(href, elem, (ref)=>{
          ref = ref.children[0];
          elem.replaceChild(ref, child);
          expandSectionRefs(ref);
        });
        break;
      default:
        expandSectionRefs(child);
        break;
      }
    });
  }
  
  // Repeatedly waits on the QTI.PROMISES until QTI.LOADING_COUNT is 0.
  // Promise.all is called iteratively because between the time it is
  // called and the time when those promises resolve, there may have
  // been additional, nested, loads creating more outstanding promises
  // whose resolution also needs to be waited upon.
  //
  // Only 20-sections-deep is allowed in order to prevent hanging due
  // to a circular expansion loop.
  function waitForSectionExpansion(dom, onexpansion, iterations=0) {
    if (iterations<=20) { 
      Promise.all(QTI.PROMISES).then(function(values) {
        if (QTI.LOADING_COUNT==0) {
          if (onexpansion)
            onexpansion();
        } else {
          waitForSectionExpansion(dom, onexpansion, iterations+1);
        }
      });
    }
  }

  // Starts the duration times on all the elements which maintain them.
  function beginInteractionSessions(elem) {
    let session = [new Date(),null];
    let sel = "assessmentTest, testPart, assessmentSection, assessmentItem";
    setDuration(elem, session);
    [...elem.querySelectorAll(sel)].forEach(child=>
      setDuration(child, session));
  }

  // If there is no "atEnd" testFeedback in an assessmentTest, we
  // add one.
  function addAtEndTestFeedback() {
    if (QTI.ROOT.tagName=="assessmentTest") {
      let tf = QTI.DOM.querySelector("testFeedback[access=atEnd]");
      if (!tf) {
        tf = QTI.DOM.createElement("testFeedback");
        tf.setAttribute("access","atEnd");
        tf.innerHTML = QTI.LANG.END_TEST;
        QTI.ROOT.appendChild(tf);
      }
    }
  }
});

