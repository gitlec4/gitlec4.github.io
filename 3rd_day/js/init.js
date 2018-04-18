jQuery(function($){
    $('#mainSlide').bxSlider({mode:'fade'});
    $('#bannerSlide_1').bxSlider();
    $('#bannerSlide_2').bxSlider(); 
    
    $('.best .tabs a').on('click',function(e){
        e.preventDefault();
        n=$('.best .tabs a').index($(this));
        $('.best .tabs li').eq(n).addClass('on').siblings().removeClass('on');
        $('.best .tab-content').eq(n).addClass('on').siblings().removeClass('on');
    })
});