var wow = new WOW({
    callback: function(el) {
        initAnimation($(el));
    }
});
wow.init();

//animation
function initAnimation($el){
    $el.each(function(){
        var $el = $(this),
            delay = parseInt($el.data('delay'));
        setTimeout(function(){
            $el.addClass('start-animation');
        }, delay);
    })        
}

//fix hero slide height
function fixHeroHeight(){
    var minHeroHeight = 400,
        heroHeight = $(window).height();
    heroHeight = heroHeight > minHeroHeight ? heroHeight : minHeroHeight;
    $('.slide_hero').height(heroHeight);
    $('.content').css('top', heroHeight + 'px');        
}
 
$(function(){
    //fix hero slide height only if width AND height both changed
    fixHeroHeight();
    var lastWindowWidth = $(window).width(),
        lastWindowHeight = $(window).height();
    $(window).resize(function(){
        console.log(this);
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();
        if (windowWidth != lastWindowWidth && windowHeight != lastWindowHeight){
            fixHeroHeight();
        }
        lastWindowWidth = windowWidth;
        lastWindowHeight = windowHeight;
    })

    //animation
    initAnimation($('.animate[data-delay]').not('.wow'));
    
    //navigation
    $('[data-scroll-to]').click(function(e){
        e.preventDefault();
        var scrollTo = $(this).data('scroll-to'),
            offsetTop = $('[data-slide="' + scrollTo + '"]').offset().top;
        $('html, body').animate({scrollTop:offsetTop}, 500);
    })

    //form validation
    $('[data-role="feedback-form"]').validate({
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
    
    //contacts form
    $('[data-role="feedback-form-submit"]').click(function(e){
        e.preventDefault();
        var $button = $(this),
            $form = $button.closest('[data-role="feedback-form"]');
            
        
        if (!$form.valid()){
            return false;
        }
        
        $button.addClass('btn-has-spinner');
        $form.find('[data-role="feedback-form-success"], [data-role="feedback-form-error"]').addClass('hide');
        
        
        $.ajax({
            url: $form.attr('action'),
            dataType: 'json',
            data: $form.serialize(),
            method : $form.attr('method'),
            success: function(response){
                $button.removeClass('btn-has-spinner');
                $form.find('input[type="text"], textarea').val('');
                if (response.success){
                    $form.find('[data-role="feedback-form-success"]').removeClass('hide');                
                }
                else{
                    $form.find('[data-role="feedback-form-error"]').removeClass('hide');                
                }
            },
            error: function(e){
                console.error(e);
                $button.removeClass('btn-has-spinner');
            }
        });
        
        return false;
    });
    
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