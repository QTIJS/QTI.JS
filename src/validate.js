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
