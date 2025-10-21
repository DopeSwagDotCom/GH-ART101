
let clicks = 0;
let colors = ["red", "orange", "green", "yellow"]

$("#magic-button").click( function() {
clicks = clicks + 1;
let indexedcolors = clicks % colors.length;

$("body").css("background-color", colors[indexedcolors]);

}); 