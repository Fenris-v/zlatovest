$(document).ready(function () {
    /**
     * FIRST SCREEN SLIDER
     */
    $("#firstScreenSlider").owlCarousel(
        {
            dots: true,
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: false,
            responsive: {
                0: {
                    items: 3,
                    nav: false,
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
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: false,
            responsive: {
                0: {
                    items: 3,
                    nav: false,
                }
            }
        }
    );
});