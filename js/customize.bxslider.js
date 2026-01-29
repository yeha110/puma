$(function(){
    $(".mainTopSlider").bxSlider({
        mode: 'horizontal',
        speed: 800, 
        ticker: false, 
        tickerHover: false,

        startSlide: 1, 
        randomStart: false,

        infiniteLoop: true, 
        hideControlOnEnd: false,

        adaptiveHeight: true, 
        adaptiveHeightSpeed: 800,

        pager: true, 
        pagerType: 'full', 

        controls: true, 
        nextSelector: '.btn_next',   
        prevSelector: '.btn_prev', 
        nextText: '다음',    
        prevText: '이전',

        maxSlides: 1,
        minSlides: 1,
        slideWidth: 1920,
        moveSlides: 1,

        auto: true, 
        autoControls: true, 
        autoStart: true, 
        pause: 4000, 
        autoDelay: 1000,
        autoHover: true, 
        stopAutoOnClick: true, 

        keyboardEnabled: true,

        wrapperClass: 'bx-wrapper',
            
        touchEnabled: false
    });
});