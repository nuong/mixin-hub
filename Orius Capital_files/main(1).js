$(function ($) {

    "use strict";


    /*=========================== preloader ===========================*/
    // Wait for window load
    $(window).on('load', function () {
        $(".se-pre-con").fadeOut("slow");;
    });

    /*=========================== preloader ===========================*/


    /*=========================== poup search ===========================*/


    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });

    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    /*=========================== poup search ===========================*/


    /*=========================== click to top ===========================*/
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').on('click', function () {      // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0                       // Scroll to top of body
        }, 500);
    });

    /*=========================== click to top ===========================*/


    /*=========================== hero slider ===========================*/
    var owls = $("#hero_slider_owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 1400,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots: false,
        nav: true,
        lazyLoad: true,

        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeInLeft',
        navText: ["<i class='fas fa-angle-left fa-2x'></i>", "<i class='fas fa-angle-right fa-2x'></i>"]
    });
    /*=========================== hero slider ===========================*/


    /*=========================== team slider ===========================*/
    var owls = $("#team_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
                nav: false
            },
            1100: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });

    /*=========================== team slider ===========================*/

    /*=========================== team slider two ===========================*/
    var owls = $("#team_slider_owl_two");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: false,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1100: {
                items: 3,
                loop: true
            }
        },
        navText: ["<i class='fas fa-angle-left fa-2x'></i>", "<i class='fas fa-angle-right fa-2x'></i>"]

    });

    /*=========================== team slider two ===========================*/


    /*=========================== blog slider ===========================*/
    var owls = $("#blog_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
                nav: false
            },
            767: {
                items: 2,
                nav: false
            },
            1100: {
                items: 3,
                nav: false,
                loop: true
            }
        }
    });

    /*=========================== blog slider ===========================*/



    /*=========================== testimonial slider ===========================*/
    var owls = $("#testimonials_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: true,
        nav: false,
    });

    /*=========================== testimonial slider ===========================*/


    /*=========================== testimonial three slider ===========================*/
    var owls = $("#testimonial_three_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        stagePadding: 0,
        dots: true,
        nav: false,
    });

    /*=========================== testimonial three slider ===========================*/



    /*=========================== testimonial two slider ===========================*/
    var owls = $("#testimonial_two_owl");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 3,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
        }
    });

    /*=========================== testimonial two slider ===========================*/


    /*=========================== partner logo slider ===========================*/
    var owls = $("#partner_slider_owl");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            768: {
                items: 3,
                nav: false,
                loop: true
            }
        }

    });

    /*=========================== partner logo slider ===========================*/


    /*=========================== service page slider ===========================*/
    var owls = $("#owl_slider_pages");
    owls.owlCarousel({

        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        center: false,
        margin: 30,
        stagePadding: 0,
        dots: true,
        nav: false,
    });

    /*=========================== service page slider ===========================*/


    /*=========================== popup video ===========================*/
    $('.popup-youtube').magnificPopup({
        type: 'iframe',

        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                +
                '</div>'
        },


    });

    /*===========================close popup video ===========================*/


    /*=========================== popup image ===========================*/


    //popup gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-link',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    //popup-blog
    $('.image-popup-fit-width').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: false
        }
    });
    /*=========================== popup image ===========================*/




    /*=========================== isotop active ===========================*/

    // Isotope for portfolio
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 0
        }
    });



    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.filter-button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });


    /*=========================== isotop active ===========================*/

    /*=========================== counter js active ===========================*/

    $('.counter').counterUp({
        delay: 4,
        time: 4000
    });

    /*=========================== close counter js active ===========================*/

    /*swith price*/
    $(".switcher_price .switch input").on("click", function () {
        $(".monthly").toggleClass("show_title");
        $(".yearly").toggleClass("hide_title");

        $(".price_inside_full_two.show_content").toggleClass("show_con");
        $(".price_inside_full_two.hide_content").toggleClass("hide_con");
    });

    // ------------------------------- AOS Animation 
    AOS.init({
        duration: 1000,
        mirror: true
    });

    //youtube video bg
    //yt player
    $('#video-background').YTPlayer({
        videoId: '7-VvFlwsWic',
        fitToBackground: false,
        mute: true,
        pauseOnScroll: false,
        playerVars: {
            modestbranding: 0,
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            wmode: 'transparent',
            branding: 0,
            rel: 0,
            autohide: 0,
            loop: 1,
            origin: window.location.origin
        }
    });


});

//slider 
var owls = $("#slider-custom");
owls.owlCarousel({

    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    items: 4,
    loop: true,
    center: false,
    margin: 30,
    stagePadding: 0,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
            nav: false
        },
        767: {
            items: 2,
            nav: false
        },
        1100: {
            items: 4,
            nav: false,
            loop: true
        }
    }
});

