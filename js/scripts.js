$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 470) {
        if (window.matchMedia("(min-width: 900px)").matches) {
          $("nav").removeClass("remove-colour-bg").addClass("add-colour-bg");
        }
      $("nav").removeClass("mobile-menu-remove-colour-bg").addClass("mobile-menu-add-colour-bg");
      $("#menu ul").removeClass("mobile-menu-remove-nav-ul").addClass("mobile-menu-add-nav-ul");
    }
    else {
      if (window.matchMedia("(min-width: 900px)").matches) {
        $("nav").removeClass("add-colour-bg").addClass("remove-colour-bg");
      }
      $("nav").removeClass("mobile-menu-add-colour-bg").addClass("mobile-menu-remove-colour-bg");
      $("#menu ul").removeClass("mobile-menu-add-nav-ul").addClass("mobile-menu-remove-nav-ul");
    }
  });


  $('a[href$="-section"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top-50
    }, 1000, 'swing');
  });


  $(function(){
    $("#toggle-sources").on("click", function(){
      $("div.sources").slideToggle();
    });
  });

});
