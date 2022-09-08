$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#primaryHeader").addClass("backdrFilterNavbar");
  }
  else {
      $("#primaryHeader").removeClass("backdrFilterNavbar");
  }
});

// Corresponding Classes rest in css/style.css