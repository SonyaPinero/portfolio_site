console.log('index.js loaded')
$(function() {


	$("#sonya-img").fadeIn('slow');

   $("#sonya-img").delay(3500).animate({ 
        marginLeft: "+=1000px",
    }, 3000 );

	$("#top").animate({height: 125, width: 1200}, 4000);
	$("#nav").animate({height: 1200, width: 125}, 4000);


	var elements = $("#pdf, #contact-info, #projects, #sonya-about, #default");
	

	$("span").click(function() {
		if ($(this).attr("id") == "resume") {
			elements.addClass("invisible");
			$("#pdf").removeClass("invisible");
		} else if ($(this).attr("id") == "contact") {
			elements.addClass("invisible");
			$("#contact-info").removeClass("invisible");
		} else if ($(this).attr("id") == "portfolio") {
			elements.addClass("invisible");
			$("#projects").removeClass("invisible");
		} else if ($(this).attr("id") == "about") {
			elements.addClass("invisible");
			$("#sonya-about").removeClass("invisible");
		} else {
			elements.addClass("invisible");
			$("#default").removeClass("invisible");
		}
	});


	// $("#resume").click(function() {
	// 	$("#pdf").removeClass("invisible");
	// });


})