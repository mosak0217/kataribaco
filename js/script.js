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

// ハンバーガーボタン
  
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

// メニューが表示されている時に画面をクリックした場合
$('.header-nav__link').on('click', function() {
// ativeクラスを削除して、メニューを閉じる
$('.globalMenuSp, .hamburger').removeClass('active').removeClass;
});


