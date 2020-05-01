$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $("nav").removeClass("remove-colour-bg").addClass("add-colour-bg");
    }
    else {
      $("nav").removeClass("add-colour-bg").addClass("remove-colour-bg");
    }
  });
});
