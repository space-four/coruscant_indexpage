$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
      $("#primaryHeader").addClass("backdrFilter");
  }
  else {
      $("#primaryHeader").removeClass("backdrFilter");
  }
});

// Corresponding Classes rest in css/style.css