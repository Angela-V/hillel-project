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

(function () {

  const burger = document.querySelector('.header__btn')
  const menu = document.querySelector('.header__menu-list')
  const overlay = document.querySelector('.header__overlay')
  const body = document.querySelector('.body')
  burger.addEventListener('click', toggleMenu)
  overlay.addEventListener('click', toggleMenu)
  function toggleMenu() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    overlay.classList.toggle('active')
    body.classList.toggle('stop-scroll')
  }
}

)();
