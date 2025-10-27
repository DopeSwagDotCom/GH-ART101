let creaturenames = ["creature 1", "creature 2", "creature 3"]

let creatureattributes = {
disposition : ["erratic", "apathetic", "dispondent", "elated", "nuerotic", "emo...",],
color : ["green", "not green"],
height : ["3 apples tall", "4 apples tall", "5 apples tall", "6-7 apples tall"],
risk: ["true", "false"],

}
let creatureOneBio;
let creatureTwoBio;

// CREATURE BIOS


creatureOneBio =
"color:  " + creatureattributes.color[0] + 
"</br> disposition:  " + creatureattributes.disposition[2] +
"</br> height:  " + creatureattributes.height[0] +
"</br> Risk to self or others:  " + creatureattributes.risk[0];

creatureTwoBio =
"color:  " + creatureattributes.color[0] + 
"</br> disposition:  " + creatureattributes.disposition[5] +
"</br> height:  " + creatureattributes.height[3] +
"</br> Risk to self or others:  " + creatureattributes.risk[1];


$("#creatureoneattr").html(creatureOneBio);
$("#creaturetwoattr").html(creatureTwoBio);