(function($) {
    $(document).ready(function() {
           
        /* --------------- bxslider for blog ---------------- */
        
        $('.bxslider-top').bxSlider({
            mode:'horizontal',
            auto:true,
            pause:15000,
            autoHover:true,
            responsive:false,
            controls:true,
            captions:false,
            pager:false
        });

        /* --------------- bxslider for blog ---------------- */
        
        $('.bxslider-blog').bxSlider({
            mode:'horizontal',
            auto:true,
            pause:10000,
            autoHover:true,
            responsive:false,
            controls:false,
            captions:false
        });

        /* --------------- quicksand ---------------- */ 
        
        var $portfolio = $(".portfolio").clone(); // Clone portfolio items to get a second collection for Quicksand plugin

        // Attempt to call Quicksand on every click event handler
        $(".filter a").click(function(e){

            $(".filter li").removeClass("current");	

            // Get the class attribute value of the clicked link
            var $filterClass = $(this).parent().attr("class");

            if ( $filterClass == "all" ) {
                var $filteredPortfolio = $portfolio.find("li");
            } else {
                var $filteredPortfolio = $portfolio.find("li[data-type~=" + $filterClass + "]");
            }

            // Let's call quicksand. Quicksand! Quicksand! Quicksand! Where are you?
            // Ooooh, here you are.
            $(".portfolio").quicksand( $filteredPortfolio, { 
                duration:500, 
                easing:'easeInOutQuad' 
            });

            $(this).parent().addClass("current");
            e.preventDefault(); // Prevent the browser jump to the link anchor
        });
        
        /* --------------- smooth scroll ---------------- */
        
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
	    });

    });
})(jQuery);