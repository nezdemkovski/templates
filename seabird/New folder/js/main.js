$(document).ready(function(){
	$('.toggle-nav').click(function(){
		$('.main-menu').slideToggle(300);
	});
	
	$('.service div').click(function(){
			$('.service div').removeClass('active');
			$(this).addClass('active');
	});
	
	$('.bxslider').bxSlider(
		defaults = {
			auto: true,
			nextText: '›',
			prevText: '‹'
		});
});

