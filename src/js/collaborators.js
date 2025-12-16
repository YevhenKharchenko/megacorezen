import Swiper from 'swiper';
import 'swiper/css/bundle';

const collaboratorsSwiperEl = document.querySelector(
  '.collaborators-swiper-container'
);
const collaboratorsDots = document.querySelectorAll('.collaborators-dot');

let collaboratorsSwiper;

collaboratorsSwiper = new Swiper('.collaborators-swiper-container', {
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
      document
        .querySelector('.collaborators-swiper-container')
        .classList.add('show');
    },
    slideChange: function () {
      updateCollaboratorsDots(this.realIndex);
    },
  },
});

function updateCollaboratorsDots(index) {
  collaboratorsDots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

collaboratorsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    collaboratorsSwiper.slideTo(index);
  });
});
