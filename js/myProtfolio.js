$(document).ready(function () {
  // Change nav link color on click
  $(".nav-item").click(function () {
    $(".nav-item").css("color", "#ffffff");
    $(this).css("color", "#00ff88");
    $("#navPhone").hide();
  });

  /*----- menu icon toggle -----*/
    $("#navPhone").hide();
    $(".menu-btn").click(function(){
        $("#navPhone").fadeToggle();
    });



  // Smooth scroll
  $('a[href^="#"]').click(function (e) {
    e.preventDefault();
    let target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 600);
  });

  // Add class to header on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("header").addClass("scrolled");
    } else {
      $("header").removeClass("scrolled");
    }
  });
});
