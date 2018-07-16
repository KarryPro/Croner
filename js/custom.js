$(document).ready(function(){
 
   	//Fixed header
   	// scrollTop() >= x --- Should be equal the height of the header
    $(window).scroll(function(){
		if ($(window).scrollTop() >= 90) {
	    	$('#header').addClass('fixed-header');
		}
		else {
	    	$('#header').removeClass('fixed-header');
		}
	});

    //Toggle menu with animation
    $(".button-toggle").click(function(){
        $(".mobile-menu").toggle("slow", "linear");
        $(".toggle-line").toggleClass("toggle");
        $(".button-toggle_text").toggleClass("toggle");
    });

    //Smooth anchor moving
    $("#desctop-menu, #mobile-menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 500);
    });

    //Owl carousel
    $('.owl-carousel').owlCarousel({
        margin:15,
        slideBy: 3,
        rewind: true,
        pagination: false,
        nav:true,
        navText: ["","<button class='button-sm outline-button outline-blue'>Еще отзывы</button>"],
        responsive:{
            0:{
              items:1
            },
            720:{
              items:2
            },
            1200:{
              items:3
            }
        }
    });

    //input mask for numbers
    var cleave = new Cleave('.input-phone', {
      phone: true,
      phoneRegionCode: 'UA'
    });

    //Changing phone value on click 
    $('.input-phone').click(function(){
      $(this).val('+380');
      /*$('#total').text('Product price: $2000');*/
    });

});




