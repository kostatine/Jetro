$(function(){
    
    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.slider__nav',
        nextArrow: '<button class="slick-arrow slick-next"><img src="/img/icon/nextArrow.png" alt=""></button>',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="/img/icon/prevArrow.png" alt=""></button>'
      
    });

    $('.slider__nav').slick({
        
        asNavFor: '.slider__inner',
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        variableWidth: true,
        infinite:true

      });

      $('.header__menu-btn').on('click', function(){
        $('.header-nav ul').slideToggle();
      });
          
  });
 