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

