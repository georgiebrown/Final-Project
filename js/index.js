$(document).ready(start);

function start(){
  setupNav();
  $('.show-more-button').click(showMoreContent);
  $('.show-less-button').click(showLessContent);
  $('#hamburger-button').click(showMobileNav);
  $('.email-us').click(sendEmail);
  $('.service').click(showDesktopContent)
  $('#emergencies').click(scrollToEmegencies);
  $('.services, #services').click(scrollToServices);
  $('#about-button, #about').click(scrollToAbout);
  $('#contact').click(scrollToContactUs);
  $('#book-now').click(scrollToBookNow);
  $('#home').click(scrollToHome);

}

function setupNav() {
  var stickyNavTop = $('.main-nav').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('.main-nav').addClass('sticky');
  } else {
      $('.main-nav').removeClass('sticky');
  }
};
  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  })};

// WAYPOINT

// function setUpWaypoint(){
// $(".bio").waypoint(function() {
// alert("waypoint hit");
// });﻿
// }

  // var $bio = $('.bio');
  //
  //   $bio.waypoint(function (){
  //     console.log('waypoint');
  //   });
  //
  // var waypoint = new Waypoint({
  //   element: document.getElementById('waypoint'),
  //   handler: function(direction) {
  //     console.log('Scrolled to waypoint!')
  //   }
  // })

  // END WAYPOINT


function showMoreContent(){
  var wrapper = $(this).closest('.hidden-content-wrapper');
  wrapper.find('.hidden-text').slideDown();
  console.log(wrapper);
  $(this).hide();
}

function showLessContent(){
  var wrapper = $(this).closest('.hidden-content-wrapper')
  wrapper.find('.hidden-text').slideUp(function() {
    wrapper.find('.show-more-button').show();
  });
}

function showMobileNav(){
  $('.nav').slideToggle();
}


function sendEmail(){
  console.log('clicked');
window.open('mailto:dr.richardgbrown@aapt.net.au?subject=Appointment&body=');
}

function showDesktopContent (){
    $('#hide-me-in-mobile').slideToggle();

  }

function showServices (){
  $('.hide-me').show();
}

function scrollToEmegencies(){
  $(window).scrollTo($('.contact-content'), 2000);
}

function scrollToServices(){
  showServices();
  $(window).scrollTo($('.hide-me'), 2000);
}

function scrollToContactUs(){
  $(window).scrollTo($('.contact-information'), 2000);
}

function scrollToAbout(){
  $(window).scrollTo($('.main-content'), 2000);
}

function scrollToBookNow(){
  $(window).scrollTo($('.opening-hours'),2000);
}

function scrollToHome(){
  $(window).scrollTo($('.container'),2000);
}
