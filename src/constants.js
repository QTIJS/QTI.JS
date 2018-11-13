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
const ACCESS            = `data-${PREFIX}-access`;
const ACTIVE            = `data-${PREFIX}-active`;
const DELIMITER         = `data-${PREFIX}-delimiter`;
const ENDPOINT1         = `data-${PREFIX}-endpoint1`;
const ENDPOINT2         = `data-${PREFIX}-endpoint2`;
const GAP_FILL_ID       = `data-${PREFIX}-gap-fill-id`;
const ID                = `data-${PREFIX}-identifier`;
const ITEM              = `data-${PREFIX}-item`;
const MATCHES           = `data-${PREFIX}-matches`;
const MATCH_MAX         = `data-${PREFIX}-match-max`;
const MAXCOLS           = `data-${PREFIX}-max-cols`;
const MESSAGE           = `data-${PREFIX}-message`;
const NAVMODE           = `data-${PREFIX}-navigation-mode`;
const OUTCOME_ID        = `data-${PREFIX}-outcome-identifier`;
const PIVOT_TARGET      = `data-${PREFIX}-pivot-target`;
const PREFIX_ATTRIB     = `data-${PREFIX}-prefix`;
const RESPONSE_ID       = `data-${PREFIX}-response-identifier`;
const SHOWHIDE          = `data-${PREFIX}-show-hide`;
const SUBMISSION_MODE   = `data-${PREFIX}-submission-mode`;
const SUFFIX            = `data-${PREFIX}-suffix`;
const TAG               = `data-${PREFIX}-tag`;
const TEMPLATE_ID       = `data-${PREFIX}-template-identifier`;

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

