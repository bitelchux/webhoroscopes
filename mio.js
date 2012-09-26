function espera() {
    $.blockUI({ message: '<img src="loading.gif" /><br/><h3>Loading...</h3>' });
    timerunblock = setTimeout("$.unblockUI()", 50000);
}
var timer = null
var timerunblock = null
function ira(donde) {
    timer = setTimeout(document.location.href = donde, 1000);
}
$(document).ready(function () {    
    $(".externo").click(function () {
        espera();
    });
	/*
    var online = navigator.onLine;
    if (!online) {
        document.location.href = "error.html"
    } 
	*/     
});
