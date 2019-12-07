/* global $ */
/* global location */
/*exported direction*/
/* eslint-env jquery */



$('document').ready(function () {

    /* FOR STICKY NAVIGATION*/
    $('.js-section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass(
                'sticky');
        } else {
            $('nav').removeClass('sticky');
        }
       // $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '60px;'
    });

    /* FOR BUTTONS*/

    $('.js-plans-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-plans').offset().top
        }, 1000);
    });

    $('.js-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js-section-features').offset().top
        }, 1000);
    });

    /* NAVIGATION SCROLL*/

            $(function() {
            $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
/*Animation on scrolling down*/
    
    $('.js-section-features').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    },{
        offset: '150px;'
    });
    
        $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animated fadeInUp');
    },{
        offset: '300px;'
    });
    
        $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animated fadeIn');
    },{
        offset: '300px;'
    });
    
        $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animated pulse');
    },{
        offset: '300px;'
    });




});
