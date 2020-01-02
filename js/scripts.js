$(document).ready(function () {
    /**
     * FIRST SCREEN SLIDER
     */
    $("#firstScreenSlider").owlCarousel(
        {
            dots: true,
            loop: true,
            margin: 10,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                641: {
                    items: 2,
                    nav: true
                },
                900: {
                    items: 3,
                    nav: true
                }
            }
        }
    );

    /**
     * FEEDBACK SLIDER
     */
    $("#feedbackSlider").owlCarousel(
        {
            dots: false,
            loop: true,
            margin: 0,
            nav: true,
            navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                641: {
                    items: 2,
                    nav: true
                },
                900: {
                    items: 3,
                    nav: true
                }
            }
        }
    );

    /**
     * MODAL
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
        beforeShow: function() {
            $('html').addClass('scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('scroll-disable');
        }
    });
});