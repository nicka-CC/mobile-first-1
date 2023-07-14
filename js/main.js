$(function(){
  $('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.png" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/1.svg" alt="prev"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
        }
      },
      
      {
        breakpoint: 641,
        settings: {
          arrows: false
        }
      }

    ]
  });
  $('.ask-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,

  });
});