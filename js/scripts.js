$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 470) {
      $("nav").removeClass("remove-colour-bg").addClass("add-colour-bg");
      $("#menu ul").removeClass("remove-mobile-menu-nav-ul").addClass("add-mobile-menu-nav-ul");
    }
    else {
      $("nav").removeClass("add-colour-bg").addClass("remove-colour-bg");
      $("#menu ul").removeClass("add-mobile-menu-nav-ul").addClass("remove-mobile-menu-nav-ul");
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
