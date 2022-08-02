'use strict';

var swiper = new Swiper('.swiper-container', {
	navigation: {
	nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',

	},
  slidesPerView: 1,
  slideToClickedSlide: true,
  loop: true,
  dots: true,
  infinite: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  pauseOnHover: true,
  accessibility: true,
  swipe: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true
	},
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

