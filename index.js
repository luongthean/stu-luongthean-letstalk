$(document).ready(function(){

	$("span.menu").click(function(){
		$(".m-sub").toggle();
	});

	

	$("li.m-nav").click(function(){
		$("ul.m-nav").slideToggle('slow'); 
		if($("li.m-nav >a").hasClass("active")){
			$("li.m-nav >a").removeClass("active");
		}else{
			$("li.m-nav >a").addClass("active");
		}
	});

	$(window).scroll(function(){
	    if ($(this).scrollTop() > 100) {
	        $('.scr-top').fadeIn();
	    } else {
	        $('.scr-top').fadeOut();
	    }
	});

	$('.scr-top').click(function(){
    	$('html, body').animate({scrollTop : 0},600);
    	return false;
	});

	
});

