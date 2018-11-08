//////////////////////////////////////////////////////////////////////////////
//
// durations.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

/*
** DURATIONS AND TIMING
*/

// Sets duration
function setDuration(elem, session) {
  let duration = elem.declarations["duration"];
  if (!duration.value)
    duration.value = [];
  duration.value.push(session);
}

// Updates the rendered timeLimits elements.
function updateTimeLimits(elem=document) {
  [...elem.querySelectorAll(TIME_LIMITS_SEL)].forEach(tl =>{
    let timeLimits = QTI.DOM.getElementById(tl.id);
    let now = new Date();
    let maxTime = timeLimits.getAttribute("maxTime");
    let minTime = timeLimits.getAttribute("minTime");
    let duration = timeLimits.parentElement.declarations["duration"];
    let sessions = duration.value;
    let lastSession = sessions[sessions.length-1];
    let elapsed = now.getTime() - lastSession[0].getTime();

    tl.innerHTML = `<span>${formatSeconds(Math.round(elapsed/1000))}`
      + (maxTime? ` / Max: ${formatSeconds(maxTime)}`: "")
      + (minTime? ` / Min: ${formatSeconds(minTime)}`: "")
      +"</span>";

    if (isOvertime(elapsed, maxTime)) {
      tl.classList.add(OVERTIME);
      if (timeLimits.getAttribute("allowLateSubmission")!=="true")
        tl.parentElement.classList.add(OVERTIME);
    } else if (isUndertime(elapsed, minTime)) {
      tl.parentElement.classList.add(UNDERTIME);
    } else {
      tl.parentElement.classList.remove(UNDERTIME);
    }
  });

  // Formats seconds in "99h 99m 99s" format.
  function formatSeconds(sec) {
    if (sec==0) {
      return "";
    } else if (sec<60) {
      return sec+"s";
    } else if (sec < 3600) {
      return Math.floor(sec/60)+"m "+formatSeconds(sec%60);
    } else {
      return Math.floor(sec/3600)+"h "+formatSeconds(sec%3600);
    }
  }

  // Formats milliseconds in 99:99:99 format.
  function formatSeconds2(millisecs) {
    let H = Math.floor(millisecs/3600000);
    let M = Math.floor((millisecs-H*360000)/60000);
    let S = Math.floor((millisecs-H*360000-M*60000)/1000);
    if (H<10) H = '0'+H;
    if (M<10) M = '0'+M;
    if (S<10) S = '0'+S;
    let formatted = (+H!='00'? `${H}:${M}:${S}`: `${M}:${S}`);
  }                 
  
  function isOvertime(elapsed, maxTime) {
    return maxTime && (elapsed/1000 > maxTime);
  }
                                                                    
  function isUndertime(elapsed, minTime) {
    return minTime && (elapsed/1000 < minTime);
  }    
}

