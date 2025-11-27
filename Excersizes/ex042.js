//Create button
//Create a numerical variable "clicks" set at a value of 0. 
let numberclicks = 0; 
let colors = ["Lime", "Turquoise", "Hotpink", "PaleGreen", "Plum", "Greenyellow", "LightSalmon" ];
let sentencestart = "you... You CLICKED me... ";
let sentencetail = " TIMES!!! I think im gonna be SICK!!!!"; 
let reminder= ""
let fullsentence = ""
 let apologysent = "I dont buy it!"

 let sentencebank = [
    
"Dude What? seriously dont im not even kidding",
"Did you actually just do that dude... like are you serious??",
"Im actually gonna kick your ass im not even kidding",
"just stop...",
"dude...",
]
$("#MySwagButton").click( function() {
numberclicks = numberclicks + 1;

reminder= numberclicks % colors.length; 
fullsentence = sentencestart + numberclicks + sentencetail; 

$("#MySwagButton").html(fullsentence);

$("body").css("background-color", colors[reminder]);

}); 

$("#ImSorry").click( function() { 

    if (numberclicks >= 1 && numberclicks < 50 ) {
    apologysent = sentencebank[1];        
    } else if (numberclicks >=50 && numberclicks < 100) {
        apologysent = sentencebank[2]
    }
    else if (numberclicks >= 100 && numberclicks < 500){
        apologysent = sentencebank[3]

    } else if (numberclicks >= 500) {
        apologysent = sentencebank[4]

    }
    else {
        apologysent = sentencebank[0]
    }
$("#ImSorry").html(apologysent);
$("AllFiller").html(apologysent);
    } );

//When the button is clicked, add one (1) to the "clicks" variable
    //If clicks = "0", return "Try click me" on the face of the button
    //if clicks > "0", update button text to "clicked [clicks value] times"

    //If still bored in 25 minutes, Kill Self. 