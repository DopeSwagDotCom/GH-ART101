
let creatureattributes = {
disposition : ["erratic", "apathetic", "dispondent", "elated", "nuerotic", "emo...",],
color : ["green", "not green"],
height : ["3 apples tall", "4 apples tall", "5 apples tall", "6-7 apples tall"],
risk: ["true", "false"],    
}
let creatureBioOne;
let creatureBioTwo;
let displaysecret = ["Pretty interesting stuff, Right?",
     "Quiet Don't tell anyone... Its a Secret!", 
     "Ok, now this is a super big secret, dont rat homeboy",
     "Are you seriously still doing this, its not interesting",
     "I wont budge",
     "Ok you got me, this one is super duper secret though and thats final"
]
let displaysecretcount = 0



//LIGHT SWITCH
let lighton = false;
let PageBackgroundColor = ["Black", "White"];
$("#lightswitchbutton").click (function () {

    if (lighton == false) {
        //Change Css background color
       $("body").css("background-color", PageBackgroundColor[1]);
       $("#lightswitchbutton").css("background-color", "rgba(0, 243, 0, 0.951)");
       $("#lightswitchbutton").css("color", "Black");
       $("#lightswitchbutton").animate({right: '150px'});
        //Change Light display and state
       $("#lightswitchbutton").html("Light is On");
               lighton = true; 

    }

    else if (lighton == true) {
        //change Css Background color
        $("body").css("background-color", PageBackgroundColor[0]);
        $("#lightswitchbutton").css("background-color", "rgba(243, 0, 0, 0.95)");
        $("#lightswitchbutton").css("color", "White");
        $("#lightswitchbutton").animate({left: '150px'});
        //Change Light display and state
          $("#lightswitchbutton").html("Light is Off");
        lighton = false;
    }
} );

// CREATURE BIOS


creatureBioOne =
"color:  " + creatureattributes.color[0] + 
"</br> disposition:  " + creatureattributes.disposition[2] +
"</br> height:  " + creatureattributes.height[0] +
"</br> Risk to self or others:  " + creatureattributes.risk[0];

creatureBioTwo =
"color:  " + creatureattributes.color[0] + 
"</br> disposition:  " + creatureattributes.disposition[5] +
"</br> height:  " + creatureattributes.height[3] +
"</br> Risk to self or others:  " + creatureattributes.risk[1];


$("#creatureoneattr").html(creatureBioOne);
$("#creatureoneattr").hide();
let displayone = false
$("#creaturetwoattr").html(creatureBioTwo);
$("#creaturetwoattr").hide();
let displaytwo = false

$("#displaycreature1").click( function () {
if (displayone == false) {
$("#creatureoneattr").show();
$("#displaycreature1").html("Hide");
displayone = true;
}
else  {
$("#creatureoneattr").hide();
$("#displaycreature1").html("Display Information");
displayone = false
}
});

$("#displaycreature2").click( function () {
if (displaytwo == false) {
$("#creaturetwoattr").show();
$("#displaycreature2").html("Hide");
displaytwo = true;
}
else  {
$("#creaturetwoattr").hide();
$("#displaycreature2").html("Display Information");
displaytwo = false
}
});

$("#secret").dblclick( function(){
displaysecretcount = displaysecretcount + 1

if (displaysecretcount == 1) {
$("#secret").html(displaysecret[1])
}
if (displaysecretcount == 2) {
$("#secret").html(displaysecret[2])
}
if (displaysecretcount == 3) {
$("#secret").html(displaysecret[3])
}
if (displaysecretcount == 4) {
$("#secret").html(displaysecret[4])
}
if (displaysecretcount > 7) {
$("#secret").html(displaysecret[5])
if (displaysecretcount > 8) {
    displaysecretcount = 0
    $("#secret").html(displaysecret[0])
}
}}
)

