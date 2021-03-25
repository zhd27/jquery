



var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
	animateOut:'fadeOut',
	responsive:{
        0:{
            items:1,
     
        },
        600:{
            items:1,
       
        },
        1000:{
            items:1,     
         
        }
    }
});

new WOW().init();

// mixitup start it's off due to isotope is using in below so need to keep live only one plugin as they are same
		// var mixer = mixitup('.mixup');
// mixitup End

// init Isotope start
var $grid = $('.final_div').isotope({
  // options
});
// filter items on button click
$('.isoto').on( 'click', 'a ', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

  // counte start

$('.counter').counterUp({
	 delay: 10,
    time: 2000
});

//slick slider start

$('.slick_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
	autoplay:true,
	focusOnSelect:true,
  slidesToShow: 1,
  slidesToScroll: 1,
	prevArrow: '<i class="fa fa-angle-left prev_icon"></i>',
    nextArrow: '<i class="fa fa-angle-right next_icon"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
	
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



$('.venobox').venobox({
                           // default: ''
    frameheight: '450px',                            // default: ''
    border     : '10px',                             // default: '0'
    bgcolor    : 'gray',                          // default: '#fff'
    titleattr  : 'jahid',                       // default: 'title'
    numeratio  : true,                               // default: false
    infinigall : true,                               // default: false
	spinner:'three-bounce',
	spinColor:'red',
	
numerationPosition:'bottom',
    share      : ['facebook', 'twitter', 'download'] // default: []
});

$('.sytle a').prettyPhoto();


       $('.circlechart').circlechart(); 










