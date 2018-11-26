//////////////////////////////////////////////////////////////////////////////
//
// dragdrop_interactions.js
// (c) Copyright 2018, Brian Mottershead. All rights reserved.
//

// Common code for setting up associateInteraction, orderInteraction,
// and gapMatchInteraction, all of which involve drag-and-drop.
function setupDragAndDropInteraction(interaction) {
  let type = interaction.getAttribute(TAG);
  let qtiInteraction = QTI.DOM.getElementById(interaction.id);
  let draggables = [...interaction.querySelectorAll("[draggable]")]
  let gaps = [...interaction.querySelectorAll(GAP_SEL)];
  let choices = [...interaction.querySelectorAll(CHOICES_SEL)];
  let dragging;
  let ghost;

  draggables.forEach(draggable=>setDraggableHandlers(draggable));  
  gaps.concat(choices).forEach(g=>setDropZoneHandlers(g));

  function setDropZoneHandlers(dropzone) {                               
    dropzone.ondragover = handleDragOver;
    dropzone.ondragleave = handleDragLeave;
    dropzone.ondrop = handleDrop;
  }

  function setDraggableHandlers(draggable) {
    draggable.ondragstart = handleDragStart;
    draggable.ondragend = handleDragEnd;
    draggable.ondragover = handleDragOver;
    draggable.ondragleave = handleDragLeave;
    draggable.ondrop = handleDrop;
  }
  
  // On drag start, create the ghost element for the drag image
  // and set "dragging"
  function handleDragStart(evt) {
    let rect = this.getBoundingClientRect();
    let x = evt.clientX - rect.left;
    let y = evt.clientY - rect.top;
    
    dragging = this;
    if (dragging) {
      ghost = document.createElement("div");
      dragging.classList.add(DRAGGING);
      ghost.innerHTML = dragging.innerHTML;
      ghost.classList.add(GHOST);
      ghost.style.width = rect.width+"px";
      ghost.style.height = rect.height+"px";
      this.parentElement.appendChild(ghost);
      evt.dataTransfer.setDragImage(ghost,x,y);
    }
  }

  // Event handler for drag over events: sets dragover style.
  // For order interactions, reorder choices.
  function handleDragOver(evt) {
    if (dragging && dragging!=this) {
      if (this.classList.contains(GAP))
        this.classList.add(DRAGOVER);
      switch(type) {
      case "orderInteraction":
        if (dragging.parentElement==this.parentElement)
          reorder(dragging, this);
        else
          evt.preventDefault();
        break;
      default:   
      case "associateInteraction":
        evt.preventDefault();
        break;
      }
    }
  }

  // Reorder the choices during an orderInteraction drag-and-drop.
  function reorder(a, b) {
    if (isBefore(b, a))
      [a, b] = [b, a]
    a.parentElement.insertBefore(a, b.nextElementSibling);
  }

  // Returns true if a is before b.
  function isBefore(a, b) {
    let siblings = [...a.parentElement.children];
    return siblings.indexOf(a) < siblings.indexOf(b);
  }

  // Event handler for drag leave, clear dragover style.
  function handleDragLeave(evt) {
    if (dragging && dragging!=this)
      this.classList.remove(DRAGOVER);
  }

  // Drop event handler.
  function handleDrop(evt) {
    if (dragging && dragging!=this) {
      if (type=="orderInteraction") {
        if (this.classList.contains(CHOICES)
            && dragging.parentElement!=this) {
          this.appendChild(dragging);
        }
      } else if (type=="associateInteraction") {
        if (this.classList.contains(GAP)) {
          if (this.firstElementChild)
            this.firstElementChild.remove();
          let choiceId=dragging.getAttribute("choiceId");
          let drop = choiceId? dragging: clone(dragging);
          if (drop.parentElement)
            drop.parentElement.removeAttribute(GAP_FILL_ID);
          this.appendChild(choiceId? dragging: clone(dragging));
          this.setAttribute(GAP_FILL_ID, drop.getAttribute("choiceId"));
        } else if (this.classList.contains(CHOICES)) {
          dragging.parentElement.removeAttribute(GAP_FILL_ID);
          dragging.remove();
        }
        setMaxMatches();
      } else if (type=="gapMatchInteraction") {
        if (this.classList.contains(GAP)) {
          this.innerHTML = dragging.innerHTML;
          this.setAttribute(GAP_FILL_ID, dragging.id);
          this.classList.add(FILLED);
          setMaxMatches();
        }
      }
    }

    function clone(choice) {
      let elem = document.createElement(choice.tagName);
      [...choice.attributes].forEach(a=>elem.setAttribute(a.name,a.value));
      elem.setAttribute("choiceId",choice.id);
      elem.removeAttribute("id");
      elem.innerHTML = choice.innerHTML;
      setDraggableHandlers(elem);
      return elem;
    }
  }

  // Set MAX_MATCHES style on gapText's which have met
  // or exceeded their matchMax
  function setMaxMatches() {
    qtiInteraction.querySelectorAll("[matchMax]").forEach(ch => {
      let max = +ch.getAttribute("matchMax");
      if (max > 0) {
        let matches = 0;
        gaps.forEach(g => {
          if (ch.id===g.getAttribute(GAP_FILL_ID))
            matches++
        })
        let htmlChoice = document.getElementById(ch.id);
        htmlChoice.classList[matches>=max?"add":"remove"](MAX_MATCHES);
      }
    });
  }

  // Drag end
  function handleDragEnd(evt) {
    deleteGhosts();
    if (dragging) {
      dragging = null;
      let nodes = document.querySelectorAll(DRAGGING_SEL);
      nodes.forEach(n=>n.classList.remove(DRAGGING));
      nodes = document.querySelectorAll(DRAGOVER_SEL);
      nodes.forEach(n=>n.classList.remove(DRAGOVER));     
      setDropResponseVariable();
    }
  }

  // Delete div created for drag image.
  function deleteGhosts() {
    let ghosts = document.querySelectorAll(GHOST_SEL);
    [...ghosts].forEach(g => g.parentElement.removeChild(g));
    ghost = null;
  }

  function setDropResponseVariable() {
    let value;

    if (type=="orderInteraction") {
      let choices=[...interaction.querySelectorAll(SIMPLECHOICE_SEL)];
      let qtiInteraction = QTI.DOM.getElementById(interaction.id);
      let maxChoices = +qtiInteraction.getAttribute("maxChoices")||1;

      if (qtiInteraction.selectionArea) {
        choices = choices.filter(choice=>{
          return choice.parentElement.classList.contains(SELECTION_AREA)
        });
      }
      value = choices.map(choice=>choice.getAttribute(ID));
      if (maxChoices && maxChoices<value.length)
        value = value.slice(0, maxChoices);

    } else if (type=="associateInteraction") {
      let table = interaction.querySelector(ASSOC_TABLE_SEL);
      value = [...table.rows].map(row=>{
        let fills = [row.cells[0].firstElementChild,
                     row.cells[2].firstElementChild]
        if (!(fills[0] && fills[1]))
          return null;
        else
          return fills.map(fill=>fill.getAttribute(ID)).join(" ");
      }).filter(pair=>pair!=null);

    } else if (type=="gapMatchInteraction") {
      let gaps = [...interaction.querySelectorAll(GAP_SEL)];
      value = gaps.map(gap=>{
        let fill = gap.getAttribute(GAP_FILL_ID);
        fill = document.getElementById(fill);
        return fill
          ? fill.getAttribute(ID) + " " + gap.getAttribute(ID)
          : null;
      }).filter(pair=>pair!=null);
    }

    postResponseVariable(interaction, value);  
  }
}

