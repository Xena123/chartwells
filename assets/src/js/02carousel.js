(function($){

	"use strict";

	// Global variables
	var completedVisible = 0;

  var bodyClass = $('body').attr('class');
  var wrapper = $('.wrapper');
  var carouselItem = $(".carousel-item");
  var scrollButtonsContainer = $('.scroll-buttons');
  var scrollButtons = $('.scroll-button');
  var bottomLink = $('.bottomLink');
  
  var currentPos = $(window).scrollTop();

  carouselItem.last().addClass("last");

  function clickButtons() {
  
    carouselItem.each(function(index, value){
 

      var newLink = $('<li id="section-' + (index+1) + '" class="scroll-button"></li>');
			carouselItem.eq(index).addClass('section-'+ (index+1));


      newLink.on("click", function() {
        var buttonID = $(this).attr('id');

        // remove carousel-current class from carousel items
        $('body .carousel-item').removeClass('carousel-current');
        $('body').find("."+ buttonID).addClass('carousel-current');

        // Scroll to section on click
        $('html, body').animate({
            scrollTop: $('.' + buttonID).offset().top
        }, 1000);

      });

      scrollButtonsContainer.append(newLink);

      scrollButtonsContainer.find('li').first().addClass('activeLink');
      carouselItem.eq(0).addClass('carousel-current');
      
    });
  }

  
  function scrollAction() {
    $(window).scroll(function (event) {
        // Do something
        
        
    });

  }

  /* Handle arrow navigation
   ------------------------------------------------------------------------------------------
   */
	function handleArrowNavigation() {

		$(".bottomLink").on("click", function () {

		  var currentSlideIndex= $(".wrapper .carousel-item.carousel-current").index(),
          section = ".section-" + (currentSlideIndex + 2);

		  console.log(section);
	

			// Scroll to section on click
			$('html, body').animate({
				scrollTop: $(section).offset().top
			}, 1000);

		});

	}

  /* Change colour of some elements when the current section has class dark
  ------------------------------------------------------------------------------------------
  */
  function changeNavigationColour() {

    var colourElements = $('.scroll-buttons, .bottomLink');

		if ($(".carousel-item.carousel-current").hasClass("dark")) {
			colourElements.addClass('dark');
		} else {
			colourElements.removeClass('dark');
		}

  }

  /* Current Slide handler
   -----------------------------------------------------------------------------------------
   */
	function setCurrentSlide() {

		$(".carousel-item").each(function () {

			var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = $(window).scrollTop() + $(window).height() + ($(window).height() / 2),
			    verticalMenuItem = $(".scroll-buttons li");

      /* If the object is completely visible in the window, it is current */
			if (bottom_of_window > bottom_of_object) {

        /* Add current class to the slide */
        $(".carousel-item").removeClass("carousel-current");
				$(this).addClass('carousel-current');

        /* Change vertical navigation item to active */
				if ($(this).hasClass("carousel-current")) {
					verticalMenuItem.removeClass("activeLink");
					verticalMenuItem.eq($(".wrapper .carousel-item.carousel-current").index()).addClass("activeLink");
        }

				/* Hide bottom arrow navigation in the last slide  */
				if ($(".carousel-current").hasClass("last")) {
				  $(".bottomLink").addClass("hide");
        } else {
					$(".bottomLink").removeClass("hide");
        }

			}

		});
	}

  /* Fire animations when elements are displayed on viewport
   -----------------------------------------------------------------------------------------
   */
	function visbleOnScroll() {

		$(".animate, .animate-left, .animate-opacity, .animate-right").each(function () {

			$(".carousel-item").removeClass("visible");

			var bottom_of_object = $(this).offset().top + $(this).outerHeight(),
          bottom_of_window = $(window).scrollTop() + $(window).height() + ($(window).height() / 4);

      /* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
					$(this).addClass('visible');
			}

			if($(window).scrollTop() + $(window).height() === $(document).height()) {
				completedVisible = 1;
			}


		});
	}



  /* Events block
   -----------------------------------------------------------------------------------------
   */

	$(document).ready(function () {
		clickButtons();
		scrollAction();
		changeNavigationColour();
		visbleOnScroll();
		setCurrentSlide();
		handleArrowNavigation();
	});


	$(window).scroll(function () {
		setCurrentSlide();
		changeNavigationColour();
		if(completedVisible === 0) {
			visbleOnScroll();
		}
	});

})(jQuery);