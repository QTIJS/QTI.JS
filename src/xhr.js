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

