(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Header carousel - static banner with clickable buttons
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: false,
        nav: false,
        autoplayTimeout: 10000,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        freeDrag: false,
        rewind: false,
        autoplayHoverPause: true
    });
    
    // Prevent default touch actions that could cause dragging
    $(".header-carousel").on('touchstart touchmove', function(e) {
        if (e.type === 'touchstart' || e.type === 'touchmove') {
            e.preventDefault();
            e.stopPropagation();
        }
    });


   // Service-carousel
   $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1200:{
            items:2
        }
    }
    });


    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fa fa-angle-right"></i>',
            '<i class="fa fa-angle-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:2
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('fast');
    } else {
        $('.back-to-top').fadeOut('fast');
    }
    
    // Navbar transparency effect
    if ($(this).scrollTop() > 100) {
        $('.transparent-navbar').addClass('scrolled');
        // Change logo to logo.png when navbar is white
        $('.navbar-logo').attr('src', 'img/logo.png');
    } else {
        $('.transparent-navbar').removeClass('scrolled');
        // Change logo to logo2.png when navbar is transparent
        $('.navbar-logo').attr('src', 'img/logo2.png');
    }
    });
    
    // Initialize logo based on initial scroll position
    if ($(window).scrollTop() > 100) {
        $('.navbar-logo').attr('src', 'img/logo.png');
    } else {
        $('.navbar-logo').attr('src', 'img/logo2.png');
    }
    
    $('.back-to-top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop : 0}, 300, 'easeInOutExpo');
        return false;
    });


})(jQuery);