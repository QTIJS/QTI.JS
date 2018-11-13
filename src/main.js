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
    if (window.MathJax)
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    beginInteractionSessions(QTI.ROOT);
    setTimeout(initializeCurrentItem, 100);
    setInterval(updateTimeLimits, 100);
    document.body.style.display="block";
    INFO("end start", clock()+"msecs");
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

