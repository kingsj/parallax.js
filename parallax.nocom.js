//https://github.com/nothingrandom/parallax.js

$(window).scroll(function(e) {
  parallax();
});
function parallax() {
	var scrolled = $(window).scrollTop();
	$("#div").css("top", -(scrolled * 0.65) + "px");
}