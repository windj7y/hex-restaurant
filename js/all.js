$(document).ready(function () {
  $('.nav-toggler').click(function (e) { 
    e.preventDefault();
    $('.nav').toggleClass('show');
  });

  $('.heart').click(function () { 
    $(this).toggleClass('fa-solid').toggleClass('fa-regular');
  });

  $('.top-link').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });

  $(window).scroll(function () { 
    if ($(this).scrollTop() > 200) {
      $('.top-link').fadeIn();
    } else {
      $('.top-link').fadeOut();
    }
  });
});