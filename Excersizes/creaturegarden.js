// memorize all creatures in array

let allCreatures = [];
let emojiRandom = "";
let draggedCreature = null;
let dragOffsetX = 0;
let dragOffsetY = 0;
let crEyesHTML = "";
let newcreature = "";


  async function getRandomName() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/petname", {method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}

 async function getRandomcolor () {

   const response = await fetch(
"https://api.gofakeit.com/funcs/hexcolor", {method: "GET",});

   const colorRandom = await response.text();
   console.log("Got name:", colorRandom);
   return colorRandom;
}

async function getRandomEmoji () {

   const response = await fetch(
"https://api.gofakeit.com/funcs/emojianimal", {method: "GET",});

   const emojiRandom = await response.text();
   console.log("Got name:", emojiRandom);
   return emojiRandom;
}
  // random creature
async function randomizeCreature() {


   var  eyesRandom = Math.floor(Math.random()* 5);
   const nameRandom = await getRandomName();
   const colorRandom = await getRandomcolor();

   const randomCreature = {
       name: nameRandom,
       color: colorRandom,
       eyesNum: eyesRandom
   };

   return randomCreature;
}

async function getCreatureFromForm(){ 

    
    const freshCreature={
    name: $("#crName").val(),
    color: $("#crColor").val(),
    eyesNum: $("#crEyesNum").val(),

    };

    return freshCreature;

};


function renderCreature(creature) {


  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info"> ${emojiRandom}${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  const html = renderCreature(creature);
  $("#creature-list").append(html);
}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 15) return false;
  if (creature.eyesNum=="" || creature.eyesNum > 5) return false;
  return true;  
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");  // or keep previous if you prefer
  $("#crEyesNum").val(0);
}



// render all creatures in random order (uses the creatures array)
function renderAllCreaturesRandom() {
  $("#creature-list").empty();

  const shuffled = allCreatures.slice().sort(() => Math.random() - 0.5);

  shuffled.forEach(function (c, i) {
    const $creature = $(renderCreature(c)).hide(); 
    $("#creature-list").append($creature);
    $creature.delay(i * 120).fadeIn(300);  
  });
}

$("#add-creature").click(
    async function () {


    // create creature object based on form inputs
    newCreature = getCreatureFromForm();
    emojiRandom = await getRandomEmoji();

    if($("#crRandom").is(':checked'))
    { newCreature = await randomizeCreature();
    
    }
    else { newCreature = getCreatureFromForm();}

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }
   
   allCreatures.push(newCreature);   // remember it
   addCreatureToDOM(newCreature);    // show it
   clearForm();

    });

$("#shuffle-creatures").click(
function (){
  renderAllCreaturesRandom();

});


// ---------- DRAG & DROP (FUNCTION VERSION) ----------



function startDraggingCreature(event) {
  draggedCreature = $(this);

  const offset = draggedCreature.offset();
  dragOffsetX = event.pageX - offset.left;
  dragOffsetY = event.pageY - offset.top;

  draggedCreature.css({
    position: "absolute",
    left: offset.left,
    top: offset.top,
    "z-index": 1000,
    cursor: "grabbing"
  });

  event.preventDefault();
}

function dragCreature(event) {
  if (!draggedCreature) return;

  draggedCreature.css({
    left: event.pageX - dragOffsetX,
    top: event.pageY - dragOffsetY
  });
}

function stopDraggingCreature() {
  if (draggedCreature) {
    draggedCreature.css({ cursor: "grab" });
  }
  draggedCreature = null;
}

// event bindings
$(document).on("mousedown", ".creature", startDraggingCreature);
$(document).on("mousemove", dragCreature);
$(document).on("mouseup", stopDraggingCreature);


