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

