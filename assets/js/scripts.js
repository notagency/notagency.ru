new WOW().init();
 
$(function(){
    $('[data-scroll-to]').click(function(e){
        e.preventDefault();
        var scrollTo = $(this).data('scroll-to');
        $('body').animate({scrollTop:$('[data-slide="' + scrollTo + '"]').offset().top}, 500);
    })
    
    /*$('[data-role="portfolio-list"]').owlCarousel({
        loop:true,
        margin: 40,
        nav: true,
        dots: false,
        navText: ['сюда', 'туда']
    });
    
    $('[data-role="technologies-list"]').owlCarousel({
        autoHeight:true,
        loop:true,
        nav: false,
        items: 7,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
    });*/
})