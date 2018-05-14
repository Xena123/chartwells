$(document).ready(function(){

  if ($('.homeSlideInit').length) {

    $('.homeSlideInit').slick({
      dots: true,
      arrows: true
    });
  }
  
  // if ($('.sliderFor').length) {
  //   $('.sliderFor').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: true,
  //     asNavFor: '.slider-nav'
  //   });
  // }
  // if ($('.sliderFor').length) {
  //   $('.sliderNav').slick({
  //     slidesToShow: 6,
  //     slidesToScroll: 1,
  //     asNavFor: '.sliderFor',
  //     dots: true,
  //     centerMode: true,
  //     focusOnSelect: true
  //   });
  // }        

});