//Create button
//Create a numerical variable "clicks" set at a value of 0. 
let numberclicks = 0; 

let sentencestart = "you... You CLICKED me... ";
let sentencetail = " TIMES!!! I think im gonna be SICK!!!!"; 

$("#MySwagButton").click( function() {
numberclicks = numberclicks + 1;

let fullsentence = sentencestart + numberclicks + sentencetail; 

$("#MySwagButton").html(fullsentence)

}); 

$(#imsorry).click( function() {
let apologysent = "Kick Rocks!!!"
$("#imsorry").html(apologysent)
});

//When the button is clicked, add one (1) to the "clicks" variable
    //If clicks = "0", return "Try click me" on the face of the button
    //if clicks > "0", update button text to "clicked [clicks value] times"

    //If still bored in 25 minutes, Kill Self. 