'use strict';

var swiper = new Swiper('.swiper-container', {
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

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
  speed: 1000,
	effect: "fade",
	/* これが必要 */
	fadeEffect: { 
		crossFade: true
	},
});

