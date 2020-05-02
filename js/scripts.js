$(document).ready(function() {

  $(window).scroll(function() {
    if ($(document).scrollTop() > 470) {
      $("nav").removeClass("remove-colour-bg").addClass("add-colour-bg");
    }
    else {
      $("nav").removeClass("add-colour-bg").addClass("remove-colour-bg");
    }
  });
  

  $('a[href$="-section"]').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000, 'swing');
  });


  $(function(){
    $("#toggle-sources").on("click", function(){
      $("div.sources").slideToggle();
    });
  });

});
