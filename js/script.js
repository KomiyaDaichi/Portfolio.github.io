// JavaScript Document

$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>80){
		$('.logo').addClass('active');
	}else{
		$('.logo').removeClass('active');
	}
		});
});

$(function(){
	$(".top-nav").click(function(){		
		$("html,body").animate({scrollTop:0},800);
	});
});

$(function(){
	$(".scroll-up").click(function(){		
		$("html,body").animate({scrollTop:0},800);
	});
});


$(function(){
	$('.work-nav').click(function(){
		$('html,body').animate({scrollTop:$('.work').offset().top},500);
	});
});


$(function(){
	$('.skill-nav').click(function(){
		$('html,body').animate({scrollTop:$('.skill').offset().top},500);
	});
});

$(function(){
	$('.profile-nav').click(function(){
		$('html,body').animate({scrollTop:$('.profile').offset().top},500);
	});
});


$(function(){
	$('.res-menu').click(function(){
		$('.res-menu').toggleClass('active');
		$('.nav').fadeToggle(300);
	});
});

$(function(){
	if(window.matchMedia('(max-width:896px)').matches){
		$('.top-nav').click(function(){
			$('.nav').fadeOut(300);
			$('.res-menu').removeClass('active');
		});
	}
});


$(function(){
	if(window.matchMedia('(max-width:896px)').matches){
		$('.work-nav').click(function(){
			$('.nav').fadeOut(300);
			$('.res-menu').removeClass('active');
		});
	}
});

$(function(){
	if(window.matchMedia('(max-width:896px)').matches){
		$('.skill-nav').click(function(){
			$('.nav').fadeOut(300);
			$('.res-menu').removeClass('active');
		});
	}
});

$(function(){
	if(window.matchMedia('(max-width:896px)').matches){
		$('.profile-nav').click(function(){
			$('.nav').fadeOut(300);
			$('.res-menu').removeClass('active');
		});
	}
});