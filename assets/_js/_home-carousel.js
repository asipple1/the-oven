import Swiper from "swiper";

function homeCarouselInit() {
  if (!document.querySelector('.home-carousel__carousel')) {
    return;
  }
  const homeCarousel = new Swiper ('.home-carousel__carousel', {
    loop: true,
    speed: 2500,
    spaceBetween: 200,
    parallax: true,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.home-carousel__pagination',
      clickable: true,
    },
  });
}

export function init() {
  homeCarouselInit();
}