//https://github.com/nothingrandom/parallax.js
function parallax(){var e=$(window).scrollTop();$("#div").css("top",-(e*.65)+"px")}$(window).scroll(function(e){parallax()})