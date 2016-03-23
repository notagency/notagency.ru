$(function(){    
    //fix hero slide height
    function fixHeroHeight(){
        var detect = new MobileDetect(window.navigator.userAgent),
            minHeroHeight = 400,
            heroHeight = $(window).height();
        heroHeight = heroHeight > minHeroHeight ? heroHeight : minHeroHeight;
        if (!detect.mobile()) {
            $('.slide_hero').height(heroHeight);
            $('.content').css('top', heroHeight + 'px');        
        }
    }
    
    $(window).resize(function(){
        fixHeroHeight();
    })
    fixHeroHeight();
})