jQuery(function($) {'use strict';
    // portfolio filter
    $(window).load(function(){

        var $portfolio_selectors = $('.projectChoice > li > a');
       
        if($portfolio_selectors.length) {
           
            var $portfolio = $('.projetcItem_area');
            $portfolio.isotope({
                itemSelector : '.projectItem',
                layoutMode : 'fitRows'
            });
           
            $portfolio_selectors.on('click', function(){
                $portfolio_selectors.removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $portfolio.isotope({ filter: selector });
                return false;
            });
        }
    }); 

    var $section = $('#teamID');
   
    function loadDaBars() {
        $('.progress').each(function(){
                $(this).find('.progress-bar').animate({
                    width:$(this).attr('data-percent')
                },1200);
            });
    }
    $(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();            
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
        //    alert(scrollOffset + " bars " + containerOffset)
            loadDaBars();
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }

    });

    var $sectionn = $('#countID');
    function loadDaNum() {
        $('.count-num').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
        }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                  $(this).text(Math.ceil(now));
                }
            });
        });
    }
    $(document).bind('scroll', function(ev) {
        var containerOffsett = $sectionn.offset().top - window.innerHeight;
        var scrollOffsett = $(document).scrollTop();        
        if (scrollOffsett > containerOffsett) {
      //      alert(scrollOffsett +"num" + containerOffsett);
            loadDaNum();
            // unbind event not to load scrolsl again
           // $(document).unbind('scroll');
        }
    });

});