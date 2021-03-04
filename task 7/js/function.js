$(document).ready(function(){

$(".rotate-left-up").each(function() {
    var a = $(this);
    var b = $(this).text().split(" ");
    a.empty();
    $.each(b, function(e, c) {
        var f = c.split("");
        var d = "";
        $.each(f, function(h, g) {
            d += '<span class="l">' + g + "</span>"
        });
        a.append("<span class='w'>" + d + "</span><span class='s'> </span>")
    })
});


  //menu animation
  var a = new TimelineMax();
    a.fromTo(".white-menu", 0.35, {
        opacity: "0",
        visibility: "hidden"
    }, {
        opacity: "1",
        visibility: "visible"
    }, {
        opacity: 1
    }, "-=0.05").staggerFromTo(".white-menu li", 0.3, {
        opacity: 0,
        y: 40
    }, {
        opacity: 1,
        y: 0
    }, 0.05).staggerFromTo(".white-menu .bottom-social a", 0.2, {
        opacity: 0,
        scale: 1.2
    }, {
        opacity: 1,
        scale: 1
    }, 0.05, "+=0.2");
    a.progress(0).pause();

//  main page animation

var $currentSlide = $(".content:eq(0)");
var InitialAnimation = new TimelineMax();
InitialAnimation.fromTo(".logo", 0.4, {
    opacity: 0
}, {
    opacity: 1
}, 0).staggerFromTo(".social-icon i,.menu-btn", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08).fromTo(".menu-nav h3", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}).fromTo($currentSlide.find(".head"), 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, "+=0.001").staggerFromTo($currentSlide.find(".rotate-left-up .l"), 0.4, {
    opacity: 0,
    y: 30,
    rotation: 20
}, {
    opacity: 1,
    y: 0,
    rotation: 0
}, 0.02, "+=0.01").fromTo($currentSlide.find(".test"), 0.05, {
    opacity: 0
}, {
    opacity: 1
}, "-=0.2").staggerFromTo($currentSlide.find(".test p"), 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08, "-=0.2").fromTo($currentSlide.find(".right-image"), 0.4, {
    opacity: 0,
    scale: 0.4
}, {
    opacity: 1,
    scale: 1,
    ease: Elastic.easOut
}, "-=0.02").fromTo($currentSlide.find(".button"), 0.4, {
    opacity: 0,
    skewX: 20
}, {
    opacity: 1,
    skewX: 0,
    ease: Elastic.easOut
}, "-=0.02").staggerFromTo(".tabs,.email-section", 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, 0.2);

// Tabs animation
var c= false;
function d(n) {
        var l = parseInt(n);
        var j = parseInt($(".content.current").attr("data-index"));
        if (c == false && l != j) {
            var h = $('.content[data-index="' + j + '"]');
            var k = $('.content[data-index="' + l + '"]');
            var p = new TimelineMax();
            p.fromTo(h.find(".rev"), 0.3, {
                opacity: 1
            }, {
                opacity: 0
            }, 0).staggerFromTo(h.find(".rotate-left-up .l"), 0.3, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, 0.02, "+=0.01",onComplete=function(){
            k.addClass("current").siblings().removeClass("current");
            $('.tabs > li [data-index="' + l + '"]').addClass("active").parent().siblings().find('a').removeClass("active");
            }).fromTo(k.find(".head"), 0.4, {
                opacity: 0,
                y: -30
            }, {
                opacity: 1,
                y: 0
            }, "+=0.001").staggerFromTo(k.find(".rotate-left-up .l"), 0.4, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, 0.02, "+=0.01").fromTo(k.find(".test"), 0.05, {
                opacity: 0
            }, {
                opacity: 1
            }, "-=0.2").staggerFromTo(k.find(".test p"), 0.4, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0
            }, 0.08, "-=0.2").fromTo(k.find(".right-image"), 0.4, {
                opacity: 0,
                scale: Math.random()
            }, {
                opacity: 1,
                scale: 1,
                ease: Elastic.easOut
            }, "-=0.02").fromTo(k.find(".button"), 0.4, {
                opacity: 0,
                skewX: random(-20, 20)
            }, {
                opacity: 1,
                skewX: 0,
                ease: Elastic.easOut
            }, "-=0.02");
            var o = p.duration();
            c = true;
            setTimeout(function() {
                c = false
            }, (o * 1000))
        }
    }

  var index =0;
  $('li a').click(function () {
    index = $(this)
    console.log($(this).attr("data-index"))
    d($(this).attr("data-index"))
  });

  $('.hamburger').on('click',function(){
  	$(this).toggleClass('is-active');
  });

   $('.icon-search').on('click',function(){
  	$('.search').animate({'width': 'toggle'});
  });

   $(document).mouseup(function(event){
    var not_clickable = $('.social-icon')
    if(!not_clickable.is(event.target) && not_clickable.has(event.target).length === 0 ){
      not_clickable.find('.search').hide(200);
    }
   })

   $(document).on('click','.menu-btn',function(){
    $('#nav-icon4').addClass('open');
        a.play()
       $('.main-section').fadeOut(function(){
        $('.white-menu').fadeIn();
       });
    });
    $(document).on('click','.open',async function(){
    $('#nav-icon4').removeClass('open');
        await a.reverse(0);
       $(' .white-menu').hide( function(){
        $('.main-section').show();
       });
    });

  $('.email-section').on('click',function(){
  $(this).css({'box-shadow': '2px 2px 2px white'});
  });

   $('.menu-nav h3, .hover-pink>a,.fa-paper-plane,.sub-menu li').hover(function(){
   	$(this).addClass('hvr-wobble-bottom')
   });

function random(b, a) {
    return Math.floor(Math.random() * (1 + a - b) + b)
}

});