// JavaScript Document


$(function(){
		if(window.matchMedia('(min-width:1024px)').matches){
			$('.top-nav').click(function(){
			$('.top-nav').css('border-bottom','4px solid #222');
			$('.fv-text-box').removeClass('active');
			$('.nav').removeClass('active');
			$('.fv-text').html('Komiya Daichi');
			$('.fv-subtext').html('Portfolio');
			$('.work').removeClass('active');
			$('.work-box').fadeOut(300);
			$('.profile').fadeOut(100);
			$('.skill-box').fadeOut(300);
			$('.skill').removeClass('active');
			$('.profile').removeClass('active');
			$('.work-nav').removeClass('active');
			$('.skill-nav').removeClass('active');
			$('.profile-nav').removeClass('active');
		});
		}
});

$(function(){
		if(window.matchMedia('(min-width:1024px)').matches){
			$('.work-nav').click(function(){
			$('.work-nav').addClass('active');
			$('.work-box').fadeIn(300);
			$('.work').addClass('active');
			$('.fv-text-box').addClass('active');
			$('.nav').addClass('active');
			$('.fv-text').html('WORKS');
			$('.fv-subtext').html('作品紹介');
			$('.skill').removeClass('active');
			$('.profile').removeClass('active');
			$('.skill-nav').removeClass('active');
			$('.profile-nav').removeClass('active');
			$('.top-nav').css('border-bottom','none');
			$('.profile').fadeOut(100);
			$('.skill-box').fadeOut(300);
		});
		}
});


$(function(){
		if(window.matchMedia('(min-width:1024px)').matches){
			$('.skill-nav').click(function(){
			$('.skill-nav').addClass('active');
			$('.fv-text-box').addClass('active');
			$('.nav').addClass('active');
			$('.skill').addClass('active');
			$('.skill-box').fadeIn(300);
			$('.fv-text').html('SKILL');
			$('.fv-subtext').html('スキル');
			$('.work').removeClass('active');
			$('.work-nav').removeClass('active');
			$('.work-box').fadeOut(300);
			$('.profile').fadeOut(100);
			$('.profile').removeClass('active');
			$('.profile-nav').removeClass('active');
			$('.top-nav').css('border-bottom','none');
		});
		}
});

$(function(){
		if(window.matchMedia('(min-width:1024px)').matches){
			$('.profile-nav').click(function(){
			$('.profile').fadeIn(100);
			$('.fv-text-box').addClass('active');
			$('.nav').addClass('active');
			$('.profile').addClass('active');
			$('.profile-nav').addClass('active');
			$('.fv-text').html('PROFILE');
			$('.fv-subtext').html('自己紹介');
			$('.work').removeClass('active');
			$('.work-nav').removeClass('active');
			$('.work-box').fadeOut(300);
			$('.skill-box').fadeOut(300);
			$('.skill').removeClass('active');
			$('.skill-nav').removeClass('active');
			$('.top-nav').css('border-bottom','none');
		});
		}
});


$(function(){
	$('.work1-next').click(function(){
		$('html,body').animate({scrollTop:$('.work2').offset().top},500);
	});
});

$(function(){
	$(".scroll-up").click(function(){		
		$("html,body").animate({scrollTop:0},800);
	});
});


$(function(){
	$('.res-scroll-up').click(function(){
		$('html,body').animate({scrollTop:0},800);
	});
});




$(function(){
		if(window.matchMedia('(max-width:1024px)').matches){
			$('.work-nav').click(function(){
				$('html,body').animate({scrollTop:$('.work').offset().top},500);
		});
		}
});


$(function(){
		if(window.matchMedia('(max-width:1024px)').matches){
			$('.skill-nav').click(function(){
				$('html,body').animate({scrollTop:$('.skill').offset().top},500);
		});
		}
});

$(function(){
		if(window.matchMedia('(max-width:1024px)').matches){
			$('.profile-nav').click(function(){
				$('html,body').animate({scrollTop:$('.profile').offset().top},500);
		});
		}
});
