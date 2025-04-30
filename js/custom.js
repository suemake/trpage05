$(function () {
  $(".main_sec01_slide").slick({
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    speed: 1000,
  });

  $(".main_sec01 .arrows .prev").on("click", function () {
    $(".main_sec01_slide").slick("slickPrev");
  });

  $(".main_sec01 .arrows .next").on("click", function () {
    $(".main_sec01_slide").slick("slickNext");
  });

  $(".main_sec02_slide").slick({
    slidesToShow: 4,
    arrows: false,
    dots: true,
  });

  $(".main_sec02 .arrows .prev").on("click", function () {
    $(".main_sec02_slide").slick("slickPrev");
  });

  $(".main_sec02 .arrows .next").on("click", function () {
    $(".main_sec02_slide").slick("slickNext");
  });
});
