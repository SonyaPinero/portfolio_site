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
			var div = $("<div />", { "id":"loading"}).append($("<h1>Loading...</h1>"))
			div.css({"text-align": "center", "margin-top": "25px"});
			$("#container").prepend(div)
			div.delay(1000).fadeOut('fast');
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

})