new WOW().init();
 
$(function(){
    $('[data-scroll-to]').click(function(e){
        e.preventDefault();
        var scrollTo = $(this).data('scroll-to');
        $('body').animate({scrollTop:$('[data-slide="' + scrollTo + '"]').offset().top}, 500);
    })
    
    $('[data-role="conacts-form"]').validate({
        errorPlacement: function(error,element) { return true },
        highlight: function (element) {
            $(element)
                .closest('.form-group')
                    .removeClass('has-success')
                    .addClass('has-error');
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-group')
                    .removeClass('has-success')
                    .removeClass('has-error');        
        },
        success: function (element) {
            $(element)
                .addClass('valid')
                .closest('.form-group')
                    .removeClass('has-error')
                    .addClass('has-success');
        }
    });
    
    $('[data-role="conacts-form"]').submit(function(){
        if ($(this).valid())
        {
            $.ajax({
                url: '/',
                dataType: 'json',
                data: $(this).serialize(),
                success: function(){
                
                },
                error: function(e){
                    console.error(e);
                }
            });
        }
        return false;
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