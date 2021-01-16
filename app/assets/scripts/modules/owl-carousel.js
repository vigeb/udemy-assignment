$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        responsive : {
            0: {
                items: 1.5, 
                margin: 16,
                slideBy: 1, 
                nav: false,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
                touchDrag: true,
            },
            600: {
                items: 2, 
                margin: 16,
                slideBy: 2, 
                nav: true,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            },
            700: {
                items: 3, 
                margin: 16,
                slideBy: 2, 
                nav: true,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            },
            992: {
                items: 4, 
                margin: 16,
                slideBy: 3, 
                nav: true,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            },
            1200: {
                items: 5, 
                margin: 16,
                slideBy: 4, 
                nav: true,
                navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            },
            
        }
        
    });
  });