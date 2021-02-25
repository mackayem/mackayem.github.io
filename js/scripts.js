$(document).ready(function() {

// Adds background colour on scroll for desktop nav bar
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $("nav").removeClass("no-menu-colour").addClass("add-menu-colour");
    }
    else {
      $("nav").removeClass("add-menu-colour").addClass("no-menu-colour");
    }
  });

// Provides smooth scrolldown to elements when clicking navbar link
  $('a[href$="-section"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top-50
    }, 1000, 'swing');
  });

// Opens sources menu
  $(function(){
    $("#toggle-sources").on("click", function(){
      $("div.sources").slideToggle();
    });
  });

});
