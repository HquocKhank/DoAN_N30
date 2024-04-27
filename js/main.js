$(document).ready(function(){

    $('.slide-banner').slick({
        prevArrow:" <a class=' a-left control-c prev slick-prev'><img alt='left arrow' src='/././images/l-arrow.png'></a>",
        nextArrow:" <a class=' a-right control-c next slick-next'><img alt='right arrow' src='/././images/r-arrow.png'></a>",
        autoplay: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:true,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ]
    });

    $('.slider-news').slick({
        prevArrow:" <a class='btn-slide a-left control-c prev slick-prev'><img alt='left arrow' src='/././images/l-arrow.png'></a>",
        nextArrow:" <a class='btn-slide a-right control-c next slick-next'><img alt='left arrow' src='/././images/r-arrow.png'></a>",
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1.21,
                    slidesToScroll: 1,
                    centerMode:true,
                }
            },
        ]
    });
    $('.story-slider').slick({
        prevArrow:" <a class='btn-slide a-left control-c prev slick-prev'><img alt='left arrow' src='/././images/l-arrow.png'></a>",
        nextArrow:" <a class='btn-slide a-right control-c next slick-next'><img alt='left arrow' src='/././images/r-arrow.png'></a>",
        dots: false,
        autoplay: false,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: false,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true
                },
            },
        ]
    });

})