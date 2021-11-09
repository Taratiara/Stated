$(document).ready(function(){
    $('.houses').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow : $('.prev'),
      nextArrow : $('.next'),
    });
  });

  $(document).ready(function(){
    $('.slides').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow : $('.previous'),
      nextArrow : $('.next-slide'),
    });
  });