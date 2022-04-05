/* Preloader */
$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut();
});

// for active link css
$(function () {
  $(".links > li > a").each(function () {
    var url = window.location.href;
    var href = $(this).prop("href");
    if (url == href) {
      $(this).css({
        color: "#28367D",
        "font-weight": "bold",
        "border-bottom": "1px solid #28367D",
        "padding-bottom": "5px",
      });
    }
  });
});

// for menu links
$(".nav-btn").on("click", function () {
  $(".sidebar").addClass("show-links");
  $(".nav-logo").css("z-index", "-1");
});
$(".close-btn").on("click", function () {
  $(".sidebar").removeClass("show-links");
});

$(function () {
  if ($(window).width() > 680) {
    $("#client-logo").owlCarousel({
      items: 6,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: [
        "<img src='images/up-arrow.svg'>",
        "<img src='images/up-arrow.svg'>",
      ],
    });
  } else {
    $("#client-logo").owlCarousel({
      items: 3,
      autoplay: false,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      nav: true,
      dots: false,
      navText: [
        "<img src='images/up-arrow.svg'>",
        "<img src='images/up-arrow.svg'>",
      ],
    });
  }
});
