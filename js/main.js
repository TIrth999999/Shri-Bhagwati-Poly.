(function ($) {
    "use strict";

    // Spinner - Hide immediately when DOM is ready, don't wait for images
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100); // Very short delay just to show smooth transition
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
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        rewind: false,
        autoplayHoverPause: true
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


    // Product Card Hover Effects
    $('.product-card').each(function() {
        $(this).on('mouseenter', function() {
            $(this).find('.product-card-image img').css({
                'transform': 'scale(1.1) rotate(2deg)',
                'transition': 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            });
            $(this).find('.product-card-overlay').css('opacity', '1');
            $(this).find('.product-card-overlay-content').css({
                'transform': 'scale(1) rotate(0deg)',
                'transition': 'transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            });
        }).on('mouseleave', function() {
            $(this).find('.product-card-image img').css('transform', 'scale(1) rotate(0deg)');
            $(this).find('.product-card-overlay').css('opacity', '0');
            $(this).find('.product-card-overlay-content').css('transform', 'scale(0) rotate(-180deg)');
        });
    });

    // Product Card Button Ripple Effect
    $('.product-card-btn').on('click', function(e) {
        var $button = $(this);
        var $ripple = $('<span class="ripple"></span>');
        
        var size = Math.max($button.outerWidth(), $button.outerHeight());
        var x = e.pageX - $button.offset().left - size / 2;
        var y = e.pageY - $button.offset().top - size / 2;
        
        $ripple.css({
            width: size,
            height: size,
            top: y + 'px',
            left: x + 'px'
        }).appendTo($button);
        
        setTimeout(function() {
            $ripple.remove();
        }, 600);
    });

    // Smooth scroll animation for product section
    $(window).on('scroll', function() {
        $('.product-card-animate').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    });

    // Add lazy loading to all images for better performance
    $(document).ready(function() {
        // Add loading="lazy" to all images that don't have it
        $('img').each(function() {
            if (!$(this).attr('loading')) {
                $(this).attr('loading', 'lazy');
            }
        });
    });


})(jQuery);