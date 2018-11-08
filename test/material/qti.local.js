// qti.local.js for the "material" test

setTimeout(setupHeartsInteraction,1500);

function setupHeartsInteraction() {
  // "Check" first heart in hearts interactions.
  // This could be removed if qti.js set initial state
  // of the hearts choiceInteraction from the defaultValue
  [...document.querySelectorAll(".hearts input[data-qtijs-identifier=L1]")]
    .forEach(heart=>{
      heart.checked=true;
      let wrap = heart.parentElement.parentElement;
      wrap.classList.add("checked");
    });

  // Adds/clear "checked" attribute to/from input-wrap.
  // This is needed for the CSS for the custom radios/checkboxes to work.
  const RADIO_SEL = "input[type=radio]";
  const CHECKBOX_SEL = "input[type=checkbox]";
  document.querySelectorAll(RADIO_SEL+","+CHECKBOX_SEL).forEach(input=>{
    let prevOnChange = input.onchange;
    input.onchange=(evt)=>{
      let name = input.getAttribute("name");
      [...document.querySelectorAll(`input[name=${name}]`)].forEach(input=>{
        let wrap = input.parentElement.parentElement;
        wrap.classList[input.checked?"add":"remove"]("checked");
      });
      prevOnChange(evt);
    };
  });
}

console.log("material/qti.local.js loaded");

