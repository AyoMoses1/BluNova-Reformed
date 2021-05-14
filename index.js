// $('.carousel-container').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// })
$('.carousel-container').slick({
    autoplay:true,
    autoplaySpeed:3000,
    nextArrow:$('.next'),
    prevArrow:$('.prev'),
})
$('.banner').slick({
    autoplay:true,
    autoplaySpeed:4000,
    nextArrow:$('.hero-next'),
    prevArrow:$('.hero-prev'),
})
var height = $('header').height();

$(window).scroll(function(){
    if($(this).scrollTop() > height ){
        $('.navbar').addClass('fixed')
    }
    else{
        $('.navbar').removeClass('fixed')
    }
});

 