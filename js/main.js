const responsive={
	0:{
		nav: true,
        items:1
    },
    400:{
		nav: true,
        items:2
    },
    600:{
		nav: true,
	  items: 3
	},
	1000:{
		nav: true,
	  items: 4
	},
	1200:{
		nav: true,
	  items: 5
	}
}

$(document).ready(function(){

    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('nav').toggleClass('active')
    });

    $(window).scroll(function () {
        var totalHeight = $(window).scrollTop();
        if (totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }
	});
	
	/* Owl Carousel for blog*/
	$('#owl-carousel, #owl-carousel-2, #owl-carousel-3, #owl-carousel-4, #owl-carousel-5,#owl-carousel-6').each(function() {
		$(this).owlCarousel({
			margin:10,
			loop: true,
			autoplay: true,
			autoplayTimeout: 3000,
			dots: false,
			nav: true,
			navText:[$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
			responsive:responsive
		});
	});
	$(".owl-nav-next").click(function(){$(this).closest('.site-slider').find('.owl-carousel').trigger('owl.next');})
  	$(".owl-nav-prev").click(function(){$(this).closest('.site-slider').find('.owl-carousel').trigger('owl.prev');}) 
})