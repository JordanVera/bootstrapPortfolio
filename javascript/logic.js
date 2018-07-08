$(document).foundation();

$(document).on("scroll", function(){
if ($(document).scrollTop() > 100) {
	$(".top-bar-right a").addClass("shrink");
	$('.bg').addClass('show');
	$("#portfolioLogo").height(28);
} else {
	$(".top-bar-right a").removeClass("shrink");
	$('.bg').removeClass('show');
	$("#portfolioLogo").height(54);	
}
});