$(document).ready(function(){
	$('.bxslider').bxSlider(
		defaults = {
			auto:true,
			responsive:false,
			pager:false,
			nextText:'',
			prevText:''
		});

	$('.pager li.page').click(function(e){
		e.preventDefault();
		
		$('.pager li.page').removeClass('active');
		$(this).addClass('active');
	});
});

