// JavaScript Document

$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>100){
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
