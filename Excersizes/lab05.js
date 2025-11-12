

function askNumber(whatNumber) {
let usernumber = prompt("guess 1-10")
if (userNumber == whatNumber) {
$("#output").html("Yeah ok whatever... you win... I dont care.");
}
else {
    $("#output").html("Nope!!!! Try Harder!");
}
}

$("#swag-button").click(function () {
    askNumber(5);
});