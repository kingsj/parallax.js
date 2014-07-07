//https://github.com/nothingrandom/parallax.js

//call function whenever the window is scrolled
$(window).scroll(function(e) {
  parallax();
});
//create function called parallax
function parallax() {
	//create a variable to hold the amount that the window has scrolled
	var scrolled = $(window).scrollTop();
	//set the div that you want to scroll at a different speed
	//set it to negative scroll so that is goes at the same speed

	//*x.x is the times faster you want it to scroll
	//in this case 0.65px
	$('#div').css('top', -(scrolled * 0.65) + 'px');
}
