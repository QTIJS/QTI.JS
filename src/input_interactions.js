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

