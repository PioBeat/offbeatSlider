/**
 * Plugin offbeatSlider
 *
 * Version 0.9.1
 *
 * @author Dominik Grzelak
 * @since 2017-03-26
 */
(function ($) {

    var DATA_PARAM_INDEX = "slider-index";

    var sessionObject = {};

    var settings = {};

    function createID() {
        return Math.ceil((Math.random()) * 0x100000).toString();
    }

    $.fn.offbeatSlider = function (options) {
        settings = $.extend({}, $.fn.offbeatSlider.settingsDefault, options);

        this.filter(".ofp-slider").each(function () {
            var sliderContainer = $(this);

            var uid = createID();
            // console.log("uid", uid);
            sessionObject[uid] = {
                "sliderContainer": sliderContainer
            };

            var tmpIx = sliderContainer.data(DATA_PARAM_INDEX);
            if (tmpIx === undefined) {
                tmpIx = settings.slideStartIndex;
            }
            init(uid, tmpIx);
        });
    };

    function init(uid, indexStartSlide) {
        var sliderContainer = sessionObject[uid].sliderContainer;
        sessionObject[uid].stopCarousel = false;

        var dots = sliderContainer.find(".ofp-slider-dots");
        var slides = sliderContainer.find(".ofp-slides");

        sessionObject[uid]["dots"] = dots;
        sessionObject[uid]["slides"] = slides;
        sessionObject[uid]["numSlides"] = slides.length;
        sessionObject[uid]["currentIndex"] = indexStartSlide;

        for (i = 0; i < dots.length; i++) {
            $(dots[i]).removeClass("ofp-slider-dots-active");
            $(dots[i]).click({uid: uid, index: i + 1}, clLis);
        }

        var left = sliderContainer.find(".ofp-arrow-left");
        var right = sliderContainer.find(".ofp-arrow-right");
        left.click({uid: uid}, clLis);
        right.click({uid: uid}, clLis);

        if (slides.length === 0) {
            return;
        }

        if (settings.carousel) {
            $(sliderContainer).mouseover(function () {
                sessionObject[uid].stopCarousel = true;
                clearTimeout(sessionObject[uid].carouselTimer);
            });
            $(sliderContainer).mouseout(function () {
                sessionObject[uid].stopCarousel = false;
                carousel(uid);
            });
            showNextSlide(uid);
            carousel(uid);
        } else {
            showNextSlide(uid);
        }
    }

    var clLis = function (event) {
        var uid = event.data.uid;
        var sliderContainer = sessionObject[uid].sliderContainer;
        var index = 0;
        if (event.data.index !== undefined) {
            index = event.data.index;
        } else {
            index = sliderContainer.data("slider-index");
        }

        if (!$(event.target).hasClass("ofp-slider-dots")) {
            if ($(event.target).hasClass("ofp-arrow-left")) {
                index += -1;
            } else {
                index += 1;
            }
        }

        sessionObject[uid].currentIndex = index;
        showNextSlide(uid);
    };

    function carousel(uid) {
        if (sessionObject[uid].stopCarousel) {
            clearTimeout(sessionObject[uid].carouselTimer);
        }

        carouselTimer = setTimeout(function () {
            var index = sessionObject[uid].currentIndex;
            var numSlides = sessionObject[uid].numSlides;
            index = checkSlideIndex(index + 1, numSlides);
            sessionObject[uid].currentIndex = index;
            showNextSlide(uid);
            carousel(uid);
        }, settings.carouselDelay);
        sessionObject[uid].carouselTimer = carouselTimer;
    }

    function checkSlideIndex(index, maximum) {
        if (index === undefined || index > maximum) index = 1;
        if (index < 1) {
            index = maximum;
        }
        return index;
    }

    function showNextSlide(uid) {
        var sliderContainer = sessionObject[uid]["sliderContainer"];
        var numSlides = sessionObject[uid]["numSlides"];
        var slides = sessionObject[uid]["slides"];
        var dots = sessionObject[uid]["dots"];
        var index = sessionObject[uid]["currentIndex"];

        index = checkSlideIndex(index, numSlides);

        sliderContainer.data("slider-index", index);
        sessionObject[uid].currentIndex = index;
        for (i = 0; i < slides.length; i++) {
            $(dots[i]).removeClass("ofp-slider-dots-active");
            $(slides[i]).addClass("slide-invisible");
            $(slides[i]).removeClass("slide-visible");
        }

        if (settings.animate) {
            $(slides[index - 1]).css("opacity", 0.19);
            $(slides[index - 1]).removeClass("slide-invisible");
            $(dots[index - 1]).addClass("ofp-slider-dots-active");
            $(slides[index - 1]).animate({
                opacity: 1
            }, settings.duration, settings.easing, function () {
                $(slides[index - 1]).addClass("slide-visible");
            });
        } else {
            $(dots[index - 1]).addClass("ofp-slider-dots-active");
            $(slides[index - 1]).removeClass("slide-invisible");
            $(slides[index - 1]).addClass("slide-visible");
        }
    }

    $.fn.offbeatSlider.settingsDefault = {
        slideStartIndex: 1,
        animate: true,
        carousel: false, //auto-animate ?
        carouselDelay: 3000,
        duration: 1000,
        easing: "linear" //easein, linear, ...
    };

})(jQuery);
