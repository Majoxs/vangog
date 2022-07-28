import Swiper from '../vendor/swiper-bundle.min';
import vars from '../_vars';

const swiper = new Swiper(vars.bannerSlider, {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.banner-pag',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.banner-button-next',
    prevEl: '.banner-button-prev',
  },
});

const swiperRent = new Swiper(vars.rentSlider, {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.rent-button-next',
    prevEl: '.rent-button-prev',
  },
  pagination: {
    el: '.rent-pag',
    type: 'bullets',
    clickable: true,
  },
});
