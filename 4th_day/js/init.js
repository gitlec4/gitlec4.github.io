jQuery(function($){
  
    $one_depth_menu=$('.gnb>li>a');
    $_li=$('.gnb>li')
    $submenu=$('.gnb>li>ul');
    
    $_li.on({
      mouseenter:function(){
          $submenu.slideUp(200);
          $this.find('ul').slideDown(200);
      },
      mouseleave: function(){
        $submenu.slideUp(200);
      }
    });
    
    $one_depth_menu.on('focus',function(){
      $(this).parent().trigger('mouseenter')
    })
    /*
    $one_depth_menu.on('mouseover',function(){
      $submenu.slideUp(200);
      $(this).next('ul').slideDown(200);
    }).parent().on('mouseleave',function(){
        $submenu.slideUp(200);
    });
    */
    $('.kids>a').on('blur',function(){
        $(this).parent().trigger('mouseleave');
    })
    $('#mainSlide').bxSlider({mode:'fade'});
    var obj1=$('#bannerSlide_1').bxSlider({
        pagerCustom:'#slide_1_Pager'
    });
    
    $('.btn_next_slide1').click(function(e){
        e.preventDefault();
        var o1_i=obj1.getCurrentSlide();
        obj1.goToNextSlide(o1_i) + 1;
    });
        
    $('#bannerSlide_2').bxSlider(); 
      
    $('.best .tabs a').on('click',function(e){
        e.preventDefault();
        n=$('.best .tabs a').index($(this));
        $('.best .tabs li').eq(n).addClass('on').siblings().removeClass('on');
        $('.best .tab-content').eq(n).addClass('on').siblings().removeClass('on');
    })
});