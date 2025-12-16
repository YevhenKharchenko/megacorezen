import Swiper from 'swiper';
import 'swiper/css/bundle';

const labSwiperEl = document.querySelector('.lab-swiper-container');
const labDots = document.querySelectorAll('.lab-dot');

let labSwiper;

labSwiper = new Swiper('.lab-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 1,
  spaceBetween: 0,
  centeredSlides: true,
  grabCursor: true,
  allowTouchMove: true,
  breakpoints: {
    1440: {
      initialSlide: 1,
      slidesPerView: 'auto',
    },
  },
  on: {
    init: () => {
      document.querySelector('.lab-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateLabDots(this.realIndex);
    },
  },
});

function updateLabDots(index) {
  labDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

labDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    labSwiper.slideTo(index);
  });
});
