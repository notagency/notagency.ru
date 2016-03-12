$(function(){
    
    //fix hero slide height
    function fixHeroHeight(){
        var minHeroHeight = 400,
            heroHeight = $(window).height();
        heroHeight = heroHeight > minHeroHeight ? heroHeight : minHeroHeight;
        $('.slide_hero').height(heroHeight);
        $('.content').css('top', heroHeight + 'px');        
    }
    
    //fix hero slide height only if width AND height both changed
    fixHeroHeight();
    var lastWindowWidth = $(window).width(),
        lastWindowHeight = $(window).height();
    $(window).resize(function(){
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();
        if (windowWidth != lastWindowWidth && windowHeight != lastWindowHeight){
            fixHeroHeight();
        }
        lastWindowWidth = windowWidth;
        lastWindowHeight = windowHeight;
    })
    
    
})