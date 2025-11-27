

$(crAdd).click( 
    function () {
let crName = $("#crInput").val();
let crEyes = $("#eyenumber").val();
let crcolor = $("#crcolor").val();

if (crName == "") {

}
else {
$("#creature-list").append('      <div class="creature"></div> <div class="creature-body">${crName}</div>');
 
   
    //"</br>" + crName + ", Color: " + crcolor +  ", Number of Eyes: " + crEyes

$("#crInput").val(""); 
$("#eyenumber").val("");
}



}
)

