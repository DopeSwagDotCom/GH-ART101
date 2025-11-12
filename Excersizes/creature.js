

$(crAdd).click( 
    function () {
let crName = $("#crInput").val();

if (crName == "") {

}
else {
$("#creature-list").append("</br>" + crName);
$("#crInput").val(""); 
}


}
)