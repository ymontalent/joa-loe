$(document).ready(function(){
    $('.gallery-slider').slick({
        slidesToShow: 1.5, // Shows 2 full + partial third image
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.3,
                    slidesToScroll: 1
                }
            }
        ]
    });
});