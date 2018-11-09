const TABS = `${PREFIX}-tabs`;
const TAB = `${PREFIX}-tab`;
const FOR = `data-${PREFIX}-for`;

const RADIO_SEL = "input[type=radio]";
const CHECKBOX_SEL = "input[type=checkbox]";
const FEEDBACK_DURING_SEL
      = "[data-qtijs-tag=testFeedback][data-qtijs-access=during]";
const QUILL_SEL
      ="[data-qtijs-tag=extendedTextInteraction][data-qtijs-format=xhtml] textarea";

const QUILL_SNOW_THEME_URI = "https://cdn.quilljs.com/1.3.6/quill.snow.css";
const QUILL_JS_URI = "https://cdn.quilljs.com/1.3.6/quill.js";

setTimeout(initializeParccExtensions, 1500);

function initializeParccExtensions() {

  /*
  ** QUESTION Q OF N LABELS
  */
  
  // This loops through the itemBodies adding a 'Question q of n' label.
  let idx = 0;
  let itemBodies = document.querySelectorAll("[data-qtijs-tag=itemBody]");
  itemBodies.forEach(itemBody=>{
    itemBody.setAttribute("label",`Question ${++idx} of ${itemBodies.length}`);
  });

  /*
  ** STYLING OF ACCESS=DURING TESTFEEDBACK
  */

  // This adds a button to the HTML transform of access=during
  // testFeedback.
  document.querySelectorAll(FEEDBACK_DURING_SEL).forEach(tf=>{
    let button = document.createElement("button");
    let label = tf.getAttribute("label")
        ||tf.getAttribute("title")||"Feedback";
    button.innerHTML=label;
    button.classList.add(HEADER);
    button.onclick = function(evt) {
      tf.classList.toggle(POPUP);
    }
    tf.appendChild(button);
  });

  /*
  ** ASSESSMENTSTIMULUS TAB BAR
  */
  
  // This generates the tab bar to switch between multiple
  // assessmentStimuluses.
  let items = document.querySelectorAll(ITEM_SEL);
  items.forEach(item=>{
    let nav = document.createElement("nav");
    let stims = [...item.querySelectorAll(`${STIMULUS_SEL}[title]`)];
    if (stims.length > 1) {
      let first = true;
      stims.forEach(stim=>{
        let tab = document.createElement("a");
        if (first) {
          tab.classList.add(CLICKED);
          stim.classList.add(CLICKED);
          first = false;
        }
        tab.classList.add(TAB);
        tab.setAttribute(FOR, stim.id);
        tab.onclick=handleTabBarClick;
        tab.innerHTML = stim.getAttribute("title");
        nav.appendChild(tab);
      })
      nav.classList.add(TABS);
      item.insertBefore(nav, item.firstElementChild);
    }
  });

  // This defines an onchange handler for choices which adds/removes
  // the "checked" style as they are checked/unchecked.
  document.querySelectorAll(RADIO_SEL+","+CHECKBOX_SEL).forEach(input=>{
    let prevOnChange = input.onchange;
    input.onchange=(evt)=>{
      let name = input.getAttribute("name");
      [...document.querySelectorAll(`input[name=${name}]`)].forEach(input=>{
        let wrap = input.parentElement.parentElement;
        wrap.classList[input.checked?"add":"remove"]("checked");
      });
      if (prevOnChange)
        prevOnChange(evt);
    };
  });

  // Handler for clicks on the assessmentStimulus tabs.
  function handleTabBarClick(evt) {
    [...document.querySelectorAll(CLICKED_SEL)]
      .forEach(elem=>elem.classList.remove(CLICKED));
    this.classList.add(CLICKED);
    let stim = document.getElementById(this.getAttribute(FOR));
    stim.classList.add(CLICKED);
    return true;
  }

  /*
  ** QUILL.JS ON EXTENDEDTEXTINTERACTION
  */
  
  linkStylesheet(document.body, QUILL_SNOW_THEME_URI);                    
  addScript(document.body, QUILL_JS_URI);                
  setTimeout(decorateExtendedTextInteractions, 2000);

  // Adds Quill to textareas in extendedTextInteractions with format=xhtml
  function decorateExtendedTextInteractions() {
    document.querySelectorAll(QUILL_SEL).forEach((textarea)=>{
      let div = document.createElement("div");
      textarea.parentElement.appendChild(div);
      new Quill(div,{theme:"snow"});
      textarea.remove();
    })
  }

  // Adds an external stylesheet to HTML DOM.
  function linkStylesheet(elem, uri) {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", new URL(uri, document.baseURI));
    elem.appendChild(link);
  }

  // Adds an external script to HTML DOM. 
  function addScript(elem, uri) {
    let script = document.createElement("script");
    script.setAttribute("src", uri);
    elem.appendChild(script);
  }

  console.log("parcc/qti.local.js initialized");
}
