$(".slideTitle").each(function() {
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
var $currentSlide = $(".homeSlide:eq(0)");
var InitialAnimation = new TimelineMax();
InitialAnimation.fromTo(".homeLogo", 0.4, {
    opacity: 0
}, {
    opacity: 1
}, 0).staggerFromTo(".navigationRightside > div", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08).fromTo(".mainNavigation", 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}).fromTo($currentSlide.find(".tagLine"), 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, "+=0.001").staggerFromTo($currentSlide.find(".slideTitle .l"), 0.4, {
    opacity: 0,
    y: 30,
    rotation: 20
}, {
    opacity: 1,
    y: 0,
    rotation: 0
}, 0.02, "+=0.01").fromTo($currentSlide.find(".overview"), 0.05, {
    opacity: 0
}, {
    opacity: 1
}, "-=0.2").staggerFromTo($currentSlide.find(".overview p"), 0.4, {
    opacity: 0,
    y: 30
}, {
    opacity: 1,
    y: 0
}, 0.08, "-=0.2").fromTo($currentSlide.find(".rightSvg"), 0.4, {
    opacity: 0,
    scale: 0.4
}, {
    opacity: 1,
    scale: 1,
    ease: Elastic.easOut
}, "-=0.02").fromTo($currentSlide.find(".cta"), 0.4, {
    opacity: 0,
    skewX: 20
}, {
    opacity: 1,
    skewX: 0,
    ease: Elastic.easOut
}, "-=0.02").staggerFromTo(".sliderNav .wrapper > div", 0.4, {
    opacity: 0,
    y: -30
}, {
    opacity: 1,
    y: 0
}, 0.2);
InitialAnimation.progress(0).pause();
$(window).on("load", function() {
    $("section.homepage").css("opacity", 1);
    $('.homeSlide[data-index="1"]').addClass("current").siblings().removeClass("current");
    $('.sliderNavigation > div[data-index="1"]').addClass("current").siblings().removeClass("current");
    InitialAnimation.play()
});
$(document).ready(function() {
    $(".homeSlide").each(function() {
        var h = '<div data-index="' + $(this).attr("data-index") + '"><span class="tagline">' + $(this).find(".tagLine").text() + '</span><span class="title">' + $(this).find(".slideTitle").text() + "</span></div>";
        $(".sliderNavigation").append(h)
    });
    var b = $(".homeSlide").length;
    var g = $(".homeSlider").width();
    var f = b * g;
    $(".homeSlider > div.hs_cos_wrapper").addClass("clearfix").css({
        width: f
    });
    $(".homeSlide").css({
        width: (100 / b) + "%",
        "float": "left"
    });
    $(".sliderNavigation > div").css({
        width: (100 / b) + "%"
    });
    var c = false;
    function d(n) {
        var l = parseInt(n);
        var j = parseInt($(".homeSlide.current").attr("data-index"));
        var i = g * (j - 1);
        var m = g * (l - 1);
        if (c == false && l != j) {
            var h = $('.homeSlide[data-index="' + j + '"]');
            var k = $('.homeSlide[data-index="' + l + '"]');
            $('.homeSlide[data-index="' + l + '"]').addClass("current").siblings().removeClass("current");
            $('.sliderNavigation > div[data-index="' + l + '"]').addClass("current").siblings().removeClass("current");
            var p = new TimelineMax();
            p.fromTo(h.find(".rev"), 0.3, {
                opacity: 1
            }, {
                opacity: 0
            }, 0).staggerFromTo(h.find(".slideTitle .l"), 0.3, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, 0.02, "+=0.01").fromTo(".homeSlider > div.hs_cos_wrapper", 0, {
                x: -i
            }, {
                x: -m
            }, "+=0.2").fromTo(k.find(".tagLine"), 0.4, {
                opacity: 0,
                y: -30
            }, {
                opacity: 1,
                y: 0
            }, "+=0.001").staggerFromTo(k.find(".slideTitle .l"), 0.4, {
                opacity: 0,
                y: random(-50, 50),
                rotation: random(-180, 180)
            }, {
                opacity: 1,
                y: 0,
                rotation: 0
            }, 0.02, "+=0.01").fromTo(k.find(".overview"), 0.05, {
                opacity: 0
            }, {
                opacity: 1
            }, "-=0.2").staggerFromTo(k.find(".overview p"), 0.4, {
                opacity: 0,
                y: 30
            }, {
                opacity: 1,
                y: 0
            }, 0.08, "-=0.2").fromTo(k.find(".rightSvg"), 0.4, {
                opacity: 0,
                scale: Math.random()
            }, {
                opacity: 1,
                scale: 1,
                ease: Elastic.easOut
            }, "-=0.02").fromTo(k.find(".cta"), 0.4, {
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
    $(".sliderNavigation > div").on("click", function() {
        d($(this).attr("data-index"))
    });
    var a = new TimelineMax();
    a.fromTo(".fullscreen-navigation", 0.35, {
        opacity: "0",
        visibility: "hidden"
    }, {
        opacity: "1",
        visibility: "visible"
    }, 0).fromTo(".close-menu", 0.2, {
        opacity: 0
    }, {
        opacity: 1
    }, "-=0.05").staggerFromTo(".fullscreen-navigation li a", 0.4, {
        opacity: 0,
        y: 30
    }, {
        opacity: 1,
        y: 0
    }, 0.05).staggerFromTo(".fullscreen-navigation .social-icons a", 0.2, {
        opacity: 0,
        scale: 1.2
    }, {
        opacity: 1,
        scale: 1
    }, 0.05, "+=0.2");
    a.progress(0).pause();
    $(".menuExpand").on("click", function() {
        $(".close-menu,.menuExpand").addClass("open");
        a.play()
    });
    $(".close-menu").on("click", function() {
        a.reverse(0);
        $(".close-menu,.menuExpand").removeClass("open")
    });
    var e = setInterval(function() {
        if ($(".subscribeBox .submitted-message").length > 0) {
            $(".subscribeBox .submitted-message").css({
                opacity: "0",
                visibility: "hidden"
            });
            $(".subscribeBox .form-title").html($(".subscribeBox .submitted-message").text());
            clearInterval(e)
        }
    }, 100);
    $(window).on("resize", function() {
        b = $(".homeSlide").length;
        g = $(".homeSlider").width();
        f = b * g;
        currentSlide = parseInt($(".homeSlide.current").attr("data-index"));
        var h = g * (currentSlide - 1);
        $(".homeSlider > div.hs_cos_wrapper").css({
            width: f,
            transform: " matrix(1, 0, 0, 1, -" + h + ", 0)"
        })
    })
});
function random(b, a) {
    return Math.floor(Math.random() * (1 + a - b) + b)
}
function triggerFocus() {
    $("#searchExpand").focus().addClass("focus")
}
;