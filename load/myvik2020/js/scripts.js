(function($) {
	'use strict';
	$(window).on('load', function() {
		$('.loader').fadeOut(1000);
		var wow = new WOW({
			offset: 150,
			mobile: false
		});
		wow.init();
	});
	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 1000,
		outDuration: 700,
		linkElement: 'a.project-box',
		loading: true,
		loadingParentElement: 'body',
		loadingClass: 'spinner',
		loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>',
		timeout: false,
		timeoutCountdown: 5000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration'],
		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'body',
		transition: function(url) {
			window.location.href = url;
		}
	});
	$('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-with-zoom',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
	$('.navbar-toggle').on('click', function() {
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});
	$('.close-menu, .click-capture, .menu-list li a').on('click', function() {
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});
	$('.menu-list li a').on('click', function() {
		$('.menu-list li').removeClass('active');
		$(this).closest('li').addClass('active');
	});
	$('.col-resume').on('mouseover', function() {
		$('.section-bg.mask').addClass('hide');
		$(this).prev('.resume-header').addClass('text-dark');
	});
	$('.col-resume').on('mouseleave', function() {
		$('.section-bg.mask').removeClass('hide');
		$('.resume-header').removeClass('text-dark');
	});
	if ($('.owl-carousel').length > 0) {
		$(".review-carousel").owlCarousel({
			responsive: {
				0: {
					items: 1
				},
				720: {
					items: 1,
				},
				1280: {
					items: 1
				}
			},
			responsiveRefreshRate: 0,
			nav: false,
			navText: [],
			dots: true
		});
	}
	if ($('.pagepiling').length > 0) {
		$('.pagepiling').pagepiling({
			scrollingSpeed: 280,
			loopBottom: true,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8','page9','page10'],
			afterLoad: function(anchorLink, index) {
				if ($('.pp-section.active').scrollTop() > 0) {
					$('.navbar').removeClass('navbar-white');
				} else {
					$('.navbar').addClass('navbar-white');
				}
			}
		});
	}
	$('#pp-nav').remove().appendTo('.animsition').addClass('white right-boxed d-none d-sm-block');
	$('.pp-nav-up').on('click', function() {
		$.fn.pagepiling.moveSectionUp();
	});
	$('.pp-nav-down').on('click', function() {
		$.fn.pagepiling.moveSectionDown();
	});
	$('.project-row a').on('mouseover', function() {
		var index = $('.project-row a').index(this)
		$('.project-row a').removeClass('active');
		$(this).addClass('active');
		$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
	});
	if ($('.js-form').length) {
		$('.js-form').each(function() {
			$(this).validate({
				errorClass: 'error',
				submitHandler: function(form) {
					$.ajax({
						type: "POST",
						url: "mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.form-group-message').show();
							$('#error').hide();
							$('#success').show();
						},
						error: function() {
							$('.form-group-message').show();
							$('#success').hide();
							$('#error').show();
						}
					});
				}
			});
		});
	}
})(jQuery);
document.getElementById('username').innerHTML = avatar + " " + name;
document.getElementById('username1').innerHTML = name;
if (comment < 1) {
	document.getElementById('commentthings').innerHTML = "万年老潜水就是你？"
} else if (comment > 0 && comment < 10) {
	document.getElementById('commentthings').innerHTML = "这么点评论也想开军舰？"
} else if (comment > 9 && comment < 25) {
	document.getElementById('commentthings').innerHTML = "还行吧，普普通通"
} else if (comment > 24 && comment < 100) {
	document.getElementById('commentthings').innerHTML = "大家似乎都记住了你"
} else if (comment > 99 && comment < 300) {
	document.getElementById('commentthings').innerHTML = "要我说，老灌水了"
} else {
	document.getElementById('commentthings').innerHTML = "就是你把龙王庙冲了？"
}
if (comment < 300) {
	var comments = comment / 4;
	document.getElementById('commentthings').style.width = comments + "%"
} else {
	document.getElementById('commentthings').style.width = "100%"
}
document.getElementById('usercomment').innerHTML = comment;
if (post < 1) {
	document.getElementById('postthings').innerHTML = "您还不是up主呢，有时间发一篇试试？"
} else if (post > 0 && post < 20) {
	document.getElementById('postthings').innerHTML = "Vikacg感谢你对我们网站的贡献，请记得去申请OneDrive网盘哦"
} else {
	document.getElementById('postthings').innerHTML = "感谢大佬对我们小站的贡献，感谢您这一年的陪伴。"
}
if (post < 20) {
	var posts = post * 5;
	document.getElementById('postthings').style.width = posts + "%"
} else {
	document.getElementById('postthings').style.width = "100%"
}
document.getElementById('userpost').innerHTML = post;
if (fans < 1) {
	document.getElementById('fansthings').innerHTML = "萌新"
} else if (fans > 0 && fans < 20) {
	document.getElementById('fansthings').innerHTML = "大萌新"
} else if (fans > 19 && fans < 50) {
	document.getElementById('fansthings').innerHTML = "dalao"
} else {
	document.getElementById('fansthings').innerHTML = "julao"
}
if (post < 100) {
	document.getElementById('fansthings').style.width = fans + "%"
} else {
	document.getElementById('fansthings').style.width = "100%"
}
document.getElementById('userfans').innerHTML = fans;
if (post < 100) {
	document.getElementById('fothings').style.width = follow + "%"
} else {
	document.getElementById('fothings').style.width = "100%"
}
document.getElementById('userfo').innerHTML = follow;
if (jifen < 1) {
	document.getElementById('jifenthings').innerHTML = "你居然没有积分！！"
} else if (comment > 0 && comment < 10000) {
	document.getElementById('jifenthings').innerHTML = "一定有很多想要的资源吧"
} else if (comment > 9999 && comment < 100000) {
	document.getElementById('jifenthings').innerHTML = "大佬，失敬失敬"
} else {
	document.getElementById('jifenthings').innerHTML = "你是不是和核弹有什么py？"
}
document.getElementById('userjifen').innerHTML = jifen;
document.getElementById('regtime').innerHTML = viktime;
window.setTimeout("share_data_time()", 1000);
BirthDay = new Date(viktime);
today = new Date();
timeold = (today.getTime() - BirthDay.getTime());
secondsold = Math.floor(timeold / 1000);
e_daysold = timeold / (24 * 60 * 60 * 1000);
daysold = Math.floor(e_daysold);
document.getElementById('userdate').innerHTML = daysold;
if (daysold < 10) {
	document.getElementById('timethings').innerHTML = "才注册没几天的家伙"
} else if (daysold > 9 && daysold < 60) {
	document.getElementById('timethings').innerHTML = "混熟了"
} else if (daysold > 59 && daysold < 365) {
	document.getElementById('timethings').innerHTML = "结交了许多新朋友呢"
} else {
	document.getElementById('timethings').innerHTML = "是元老诶，感谢这一年的陪伴"
}
var vikhuoyue = (comment * 0.01) + (post * 0.05) + (fans * 0.1) + (follow * 0.07) + (jifen * 0.2);
vikhuoyue = vikhuoyue.toFixed(2);
document.getElementById('userhuoyue').innerHTML = vikhuoyue;
var shouchong = (comment * 0.01) + (post * 0.1) + (jifen * 0.00003);
shouchong = shouchong.toFixed(2);
document.getElementById('usershouchong').innerHTML = shouchong;