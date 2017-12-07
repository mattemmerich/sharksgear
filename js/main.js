var images = document.getElementsByClassName("img-fluid");

var modals = document.getElementsByClassName("modal");
//if you don't know what these ACTUALLY RETURN, type the variable names into your console to see
var closeBtns = document.getElementsByClassName("close");

for(var i = 0; i < modals.length; i++) {
	(function(i) {
	images[i].addEventListener("click", function() {
		$(modals[i]).show();
	});
	closeBtns[i].addEventListener("click", function() {
		$(modals[i]).hide();
	});
	}(i));


}