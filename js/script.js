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

















$(window).on('load resize', function(){
  let w = $(window).width();
  if(w <= 1600){
    // ウィンドウサイズ1600px以下のときの処理
    
    
  }else{
    // それ以外の処理

    $(function() {
      var topBtn = $('.header-nav, .sns-icons-header');     
      //スクロールが30に達したらボタン非表示
      $(window).scroll(function () {
          if ($(this).scrollTop() > 30) {
              topBtn.fadeOut();
              // topBtn.addClass('scroll-active');
              
          } else {
              topBtn.fadeIn();
              // topBtn.removeClass('scroll-active');
              
             
          }
      });
    });
    
    $(".header-logo").click(function(){
      $(".header-nav, .sns-icons-header").fadeToggle();
      $(".header-nav, .sns-icons-header").toggleClass('scroll-active');
    });

    
    
    
    
  }
});




