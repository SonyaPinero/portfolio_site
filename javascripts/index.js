console.log('index.js loaded')
$(function() {


			$("#sonya-img").fadeIn('slow');

    	$("#sonya-img").delay(3500).animate({ 
        marginLeft: "+=1000px",
    }, 3000 );

	$("#top").animate({height: 125, width: 1200}, 4000);
	$("#nav").animate({height: 1200, width: 125}, 4000);


})