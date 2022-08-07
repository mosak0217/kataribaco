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

AOS.init();







var mediaQuery = matchMedia('(max-width: 1300px)');

// ページが読み込まれた時に実行
handle(mediaQuery);

// ウィンドウサイズが変更されても実行されるように
mediaQuery.addListener(handle);

function handle(mq) {
  if (mq.matches) {
    // ウィンドウサイズが798px以下のとき
  } else {
    // それ以外
    $(function() {
      var topBtn = $('.header-nav, .sns-icons-header');     
      //スクロールが100に達したらボタン非表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 30) {
              topBtn.slideUp();
              topBtn.addClass('scroll-active');
              
          } else {
              topBtn.slideDown();
              topBtn.removeClass('scroll-active');
              
             
          }
      });
    });
    
    $(".header-logo").click(function(){
      $(".header-nav, .sns-icons-header").slideToggle();
      $(".header-nav, .sns-icons-header").toggleClass('scroll-active');
    });
  }
}
