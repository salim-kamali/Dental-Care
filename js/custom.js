
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

});