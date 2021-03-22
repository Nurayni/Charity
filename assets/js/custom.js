$(function() {
    'use strict';
    $(window).on("scroll", function() {
        if ($(document).scrollTop() > 20) {
            $(".custom-nav").addClass("fixed-top");
        }
        else {
            $(".custom-nav").removeClass("fixed-top");
        }
    });
    // active nav
    $('.navbar-nav .nav-item').on('click', function() {
        $('.navbar-nav .nav-item.active').removeClass('active');
        $(this).addClass('active');
    });
    
    //preloader
    setTimeout(function(){
        $('.loader_bg').fadeToggle();
    }, 1500);
    // banner
    $('.image-slider').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        loop: true,
        margin: 20,
        dots: false,
        responsive: {
                0: {
                    items: 1
                },
        
                1000: {
                    items: 1
                },
            }
        })
        // START WOW ACTIVE JS CODE
		new WOW().init();
		// END WOW ACTIVE JS CODE
});