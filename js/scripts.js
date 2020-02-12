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

    /**
     * ONLY NUMBS
     */
    let itemCount = $('#item__buy__count');

    itemCount.on('keypress', function (e) {
        let key = e.keyCode;
        key = String.fromCharCode(key);
        let regex = /[0-9]/;
        if (!regex.test(key)) {
            e.returnValue = false;
            if (e.preventDefault) e.preventDefault();
        }
    });

    itemCount.on('blur', () => {
        if (!itemCount.val() || itemCount.val() === '' || parseInt(itemCount.val()) === 0) {
            itemCount.val(1);
        }
    });

    /**
     * NUMS CONTROLS
     */
    let btnPlus = $('.item__buy__count__plus');
    let btnMinus = $('.item__buy__count__minus');

    btnPlus.on('click', (e) => {
        e.preventDefault();
        itemCount.val(parseInt(itemCount.val()) + 1);
    });

    btnMinus.on('click', (e) => {
        e.preventDefault();
        let minus = itemCount.val() - 1;
        if (minus < 1) return;
        itemCount.val(minus);
    });

    /**
     * SLICK SLIDER
     */
    let slider = $('.item_top__slider');

    if(slider.length > 0) {

        slider.slick({
            asNavFor: '.item_top__slider__nav',
            responsive: [{
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            },
            ]
        });

        $('.item_top__slider__nav').slick({
            slidesToShow: 5,
            asNavFor: '.item_top__slider',
            arrows: false,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 6,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
});