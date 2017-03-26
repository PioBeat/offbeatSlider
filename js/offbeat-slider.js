/**
 * Plugin offbeatSlider
 *
 * @author Dominik Grzelak
 * @since 2017-03-26
 */
(function ($) {

    $.fn.offbeatSlider = function (options) {
        var settings = $.extend({}, $.fn.offbeatSlider.settingsDefault, options);

        this.filter(".ofp-slider").each(function () {
            var sliderContainer = $(this);
            // console.log("each:", sliderContainer);
            var tmpIx = sliderContainer.data("slider-index");
            if (tmpIx === undefined) {
                tmpIx = settings.slideStartIndex;
            }
            init(sliderContainer, tmpIx);
        });
    };

    function init(sliderContainer, indexStartSlide) {
        var dots = sliderContainer.find(".ofp-slider-dots");
        for (i = 0; i < dots.length; i++) {
            $(dots[i]).removeClass("ofp-slider-dots-active");
            $(dots[i]).click({index: i + 1, sliderContainer: sliderContainer}, clLis);
        }
        var left = sliderContainer.find(".ofp-arrow-left");
        var right = sliderContainer.find(".ofp-arrow-right");
        left.click({sliderContainer: sliderContainer}, clLis2);
        right.click({sliderContainer: sliderContainer}, clLis2);
        showDivs(indexStartSlide, sliderContainer);
    }

    var clLis = function (event) {
        var index = event.data.index;
        var sliderContainer = event.data.sliderContainer;
        var dots = sliderContainer.find(".ofp-slider-dots");
        var slides = sliderContainer.find("img");
        // sliderContainer.data("slider-index", index);
        showSlideAtIndex(index, slides, dots);
    };

    var clLis2 = function (event) {
        var sliderContainer = event.data.sliderContainer;
        var dots = sliderContainer.find(".ofp-slider-dots");
        var slides = sliderContainer.find("img");
        var index = sliderContainer.data("slider-index");
        // console.log("index", index, event);
        if ($(event.target).hasClass("ofp-arrow-left")) {
            console.log("links");
            index += -1;
        } else {
            console.log("rechts");
            index += 1;
        }
        console.log("set to index", index);
        showSlideAtIndex(index, slides, dots);
    };


    function showDivs(slideIndex, sliderContainer) {
        var x = sliderContainer.find("img");
        var dots = sliderContainer.find(".ofp-slider-dots");

        slideIndex = checkSlideIndex(slideIndex, x.length);
        // var slideIndex = sliderContainer.data("slider-index");
        console.log("slideIndex", slideIndex);

        for (i = 0; i < x.length; i++) {
            $(x[i]).css("display", "none");
        }

        $(dots[slideIndex - 1]).addClass("ofp-slider-dots-active");
        $(x[slideIndex - 1]).css("display", "block");
    }

    function checkSlideIndex(index, maximum) {
        if (index === undefined || index > maximum) index = 1;
        if (index < 1) {
            index = maximum;
        }
        return index;
    }

    function showSlideAtIndex(index, elementsSlides, elementsDots) {
        index = checkSlideIndex(index, elementsSlides.length);
        console.log("showSlideAtIndex", index);
        $(elementsSlides).parent().data("slider-index", index);
        for (i = 0; i < elementsSlides.length; i++) {

            if (index === (i + 1)) {
                $(elementsDots[i]).addClass("ofp-slider-dots-active");
                $(elementsSlides[i]).css("display", "block");
            } else {
                $(elementsDots[i]).removeClass("ofp-slider-dots-active");
                $(elementsSlides[i]).css("display", "none");
            }
        }
    }

    $.fn.offbeatSlider.settingsDefault = {
        slideStartIndex: 1,
    };

})(jQuery);
