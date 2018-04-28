// Funkcje JQUERY


$(document).ready(function() {

	// top slider

	$('#top-slider').carousel({

		interval: 4000

	});

// Promo slider


	$('#promo-slider').carousel({

		interval: 3000

	});

	// Menu mobilne 

	mobileMenu();

	//Odliczanie JQUERY

	$('.timer').countTo();

	// Skrollr 
	var s = skrollr.init({forceHeight: false});

	// Logo dla małych urządzeń 

	if (document.documentElement.clientWidth < 480) {
		$('.main-logo').html('<img src="images/logo_small.png" alt="Logo-small" />');

	};

});



// Scroll dla nagłówla 


$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
		$('.main-logo img').css('max-height', 28);
	} else {
		$('.main-header').removeClass('header-short');
		$('.main-logo img').css('max-height', 42);
	}
});


// Menu mobilne 

function mobileMenu() {
	$('#mobile-icon').bind('click', function(event) {

		event.preventDefault();                        //zapobiega domyślnej akcji elemntu a 
		$('#main-nav-mobile').show();
	});

	$('#mobile-close').bind('click', function(event) {
		event.preventDefault();                         
		$('#main-nav-mobile').hide();

	});
}