$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() >= 80){
            $('body').addClass('sticky')
        }
        else{
            $('body').removeClass('sticky')
        }
    });

    $('.toggle-btn').click(function(){
        $('.menu').toggleClass('fixed')
    });

    $('.client-slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:1279,
                settings:{
                    slidesToShow:3
                }
            },
            {
                breakpoint:991,
                settings:{
                    slidesToShow:2,
                    autoplay:true
                }
            },
            {
                breakpoint:767,
                settings:{
                    slidesToShow:3
                }
            },
            {
                breakpoint:575,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    });

    $('.close').click(function(){
        $('.search-item').toggleClass('search')
    });


    // counter strat
    var a = 0;

    $('.counter').each(function(){
        $(this).prop('count',a).animate({
           count: $(this).text(),
        },
            {
                duration:2500,
                step:function(start){
                    $(this).text(Math.floor(start))
                }
            }
        )
    });

    // animation start
    AOS.init();
});