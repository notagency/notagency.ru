/*if (typeof WOW != 'undefined') {
    var wow = new WOW({
        callback: function(el) {
            initAnimation($(el));
        }
    });
    wow.init();
}*/

//animation
function initAnimation($el){
    $el.each(function(){
        var $el = $(this),
            delay = parseInt($el.data('delay'));
        setTimeout(function(){
            $el.addClass('start-animation');
            /*setTimeout(function(){
                executeDigitsAnimation($('[data-digit]', $el));
            }, 200);*/
        }, delay);
    })        
}

function initDigits(){
    $('[data-digit]').each(function(){
        var digit = $(this).text();
        $(this).data('final-digit', digit).text(0);    
    })
}

function executeDigitsAnimation($el){
    var finalDigit = parseInt($el.data('final-digit')),
        timeout = 500 / finalDigit;
    (function drawDigit($el, digit){
        if(!digit) digit = 0;
        $el.text(digit);
        if (digit < finalDigit) {
            setTimeout(function(){
                drawDigit($el, digit+1);
            }, timeout);
        }
    })($el);
}

$(function(){
    //animation
    if (!$('body').hasClass('no-animation')){
        initAnimation($('.animate[data-delay]').not('.wow'));
    }
    //initDigits();
    
    //navigation
    /*$('[data-scroll-to]').click(function(e){
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
    
    $('[data-role="portfolio-list"]').owlCarousel({
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