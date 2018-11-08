//////////////////////////////////////////////////////////////////////////////
//
// media_interaction.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Sets up a mediaInteraction
function setupMediaInteraction(interaction) {
  interaction.querySelectorAll("video, audio").forEach(media=>{
    media.onplay = function() {
      postResponseVariable(interaction,1);
    }
  });
}

// For media interactions using YouTube videos, we use the
// YouTube IFrame API to tell when the video is played.
// TBD
function onYouTubeIframeAPIReady() {    
  DEBUG("youtube api ready");
}

