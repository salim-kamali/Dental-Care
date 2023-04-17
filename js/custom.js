
$(document).ready(function () {


    $(".ba_slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        swipe: false,
        infinite: false,
        arrows: true,
        autoplay: false,
        variableWidth: true,
        draggable: false,
        pauseOnHover: true,
        appendArrows: '.ba-arrows',
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.000,

                }
            }]
    });


    $(".rev-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        swipe: true,
        infinite: false,
        arrows: true,
        autoplay: false,
        draggable: true,
        pauseOnHover: true,
        appendArrows: '.rev-arrows',
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.000,
                    variableWidth: false,
                    autoplay: false,
                    adaptiveHeight: true,

                }
            }]
    });


    if ($(window).width() < 990) {

        $(".cta-slider").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.00,
                }
            }]
        });
        $(".meet-the-team .row").slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1.00,
                }
            }]
        });
    }

});