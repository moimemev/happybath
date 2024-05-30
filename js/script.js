$(document).ready(function(){
    $('.slides').slick({
        autoplay:true,
        autoplaySpeed:3000,
        infinite:true,
        swipe:true,
        dots:true,    
    });

    $('.btn-open').click(function(){
        $('#header .m-menu').animate({left:0},'easeInOutCubic')
    })

    $('.btn-close').click(function(){
        $('#header .m-menu').animate({left:'-100%'},'easeInOutCubic')
    })
});