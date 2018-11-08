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

