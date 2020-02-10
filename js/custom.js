$(document).ready(function () {


  // To Hide / Show Navbar on Scroll
    var previousScroll = 0;

    $(window).scroll(function(){

  var currentScroll = $(this).scrollTop();

  if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){

    if (currentScroll > previousScroll){
      window.setTimeout(hideNav, 300);

    } else {
      window.setTimeout(showNav, 300);
    }

    previousScroll = currentScroll;
  }

});

function hideNav() {
  $("[data-nav-status='toggle']").removeClass("is-visible nav-bg-unique").addClass("is-hidden");
}

function showNav() {
  $("[data-nav-status='toggle']").removeClass("is-hidden container").addClass("is-visible nav-bg-unique");
}




  // Add Class active when nav-item has been clicked
  $('.navbar-nav .nav-item').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
  });


  // Smooth Scroll To Div for navbar
  $('.navbar-nav .nav-item .nav-link').click(function () {
      $('html, body').animate({ scrollTop: $('#' + $(this).data('value')).offset().top}, 1500);
  });



// Trigger Mixitup
  $('#Container').mixItUp();




  // Gallary Pictures Section
  $('.gallary-slider').owlCarousel({
    rtl:true,
    items:4,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    smartSpeed: 800,
    dots:false,
    loop: true,
    nav: true,
    responsive:{
          0:{
              items:1
          },
          400:{
              items:2
          },
          800:{
              items:3
          },
          1000:{
              items:4
          }
      }
  });



// Adding Class to label when input is focused
$( "input" ).focus(function() {
  $( this ).parent().find( "label").addClass("label-style");
  $( this ).parent().addClass(" focus-span");
});

$( "input" ).focusout(function() {
  $( this ).parent().find( "label").removeClass("label-style");
});


// Trigger AOS Animations
AOS.init({
 once: true,
duration: 1400,
});

$(window).on('load', function() {
AOS.refresh();
});



})
