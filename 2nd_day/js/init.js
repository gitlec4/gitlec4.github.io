jQuery(function($){
    var idx=0;
    $('.control .btn-prev').on('click',function(){
        if(idx<1){idx=4}
        else{idx--;}
        
        $('.main-slider .slide').eq(idx).addClass('on').siblings().removeClass('on');
    });
    $('.control .btn-next').on('click',function(){
        if(idx>3){idx=0}
        else{idx++;}
        
        $('.main-slider .slide').eq(idx).addClass('on').siblings().removeClass('on');
    });
    
    
    $('.coupon .btn-close').bind({
        click:function(){
            $(this).parent().slideUp(); 
        },
        blur:function(){
            $(this).click();
        }
    })
});