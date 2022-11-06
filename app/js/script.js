$('.achievements__slider').slick( {

    arrows: false,
    dots: true,
    dotsClass: 'slider-dots',
    mobileFirst: true,
    responsive: [ {

      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    }

    ]
  }

);

$('.slider-team').slick( {
    arrows: false,
    dots: true,
    dotsClass: 'slider-dots',
    mobileFirst: true,
  }

);
