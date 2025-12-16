import Swiper from 'swiper';
import 'swiper/css/bundle';

const pricingSwiperEl = document.querySelector('.pricing-swiper-container');
const pricingDots = document.querySelectorAll('.pricing-dot');

let pricingSwiper;

pricingSwiper = new Swiper('.pricing-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 12,
  centeredSlides: true,
  grabCursor: true,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      initialSlide: 1,
      slidesPerView: 3,
      spaceBetween: 0,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document.querySelector('.pricing-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updatePricingDots(this.realIndex);
    },
  },
});

function updatePricingDots(index) {
  pricingDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

pricingDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    pricingSwiper.slideTo(index);
  });
});
