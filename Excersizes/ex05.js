let numberclicks = 0; 
let colors = ["Lime", "Turquoise", "Hotpink", "PaleGreen", "Plum", "Greenyellow", "LightSalmon" ];
let sentencestart = "you... You CLICKED me... ";
let sentencetail = " TIMES!!! I think im gonna be SICK!!!!"; 

function allfiller () { 
    if (colors[reminder] =="Plum"){
    $("#AllFiller").html.append(" ok")
}
}

//Click Function
$("#MySwagButton").click( function() {
numberclicks = numberclicks + 1;

let reminder= numberclicks % colors.length; 
let fullsentence = sentencestart + numberclicks + sentencetail; 

$("#MySwagButton").html(fullsentence);

$("body").css("background-color", colors[reminder]);

allfiller();

}); 

//Sorry Function
$("#ImSorry").click( function() { 
    let apologysent = "I dont buy it!"
    if (numberclicks >= 1 && numberclicks < 50 ) {
    apologysent = "Did you actually just do that dude... like are you serious??";        
    } else if (numberclicks >=50 && numberclicks < 100) {
        apologysent = "Im actually gonna kick your ass im not even kidding"
    }
    else if (numberclicks >= 100 && numberclicks < 500){
        apologysent = "just stop..."

    } else if (numberclicks >= 500) {
        apologysent = "dude..."

    }
    else {
        apologysent = "Dude What? seriously dont im not even kidding";
    }
$("#ImSorry").html(apologysent);
$("AllFiller").html(apologysent);
    } );



//When the button is clicked, add one (1) to the "clicks" variable
    //If clicks = "0", return "Try click me" on the face of the button
    //if clicks > "0", update button text to "clicked [clicks value] times"

    //If still bored in 25 minutes, Kill Self. 