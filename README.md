# offbeatSlider - a jQuery Slideshow Plugin

Easy to use jQuery plugin to create an image slideshow for a thumbnail preview or
for page headers.

**Version: 0.9.1.1**

## Installation

Just copy the [css](https://raw.githubusercontent.com/PioBeat/offbeatSlider/master/css/offbeat-slider.css) and [js](https://raw.githubusercontent.com/PioBeat/offbeatSlider/master/js/offbeat-slider.js) file into your project directory.
Then include it like this in your web page:
```html
<!doctype html>
<html lang="">
<head>
    <!-- YOUR HEADER -->
    <link rel="stylesheet" href="css/offbeat-slider.css">
</head>
<body>

    <!-- YOUR CONTENT -->

    <!-- jQuery -->
    <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>

    <!-- offbeatSlider Plugin -->
    <script src="js/offbeat-slider.js"></script>
</body>
</html>
```

## Quick Example

This example shows two different styles for the positioning of the navigation controls and the setting of the start image:

<img src="/art/example1.png" width="49%" />

Code:
```html
<!-- Left example -->

<div class="ofp-slider" data-slider-index="1">
    <img class="ofp-slides" src="img/Hydrangeas.jpg">
    <img class="ofp-slides" src="img/Jellyfish.jpg">
    <img class="ofp-slides" src="img/Koala.jpg">

    <div class="ofp-slider-navigation ofp-center ofp-middle">
        <div class="ofp-arrow-left">&#10094;</div>
        <div class="ofp-arrow-right">&#10095;</div>
    </div>
    <div class="ofp-slider-navigation ofp-bottom-middle">
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
    </div>
</div>


 <!-- Right example -->

<div class="ofp-slider" data-slider-index="2">
    <img class="ofp-slides" src="img/Hydrangeas.jpg">
    <img class="ofp-slides" src="img/Jellyfish.jpg">
    <img class="ofp-slides" src="img/Koala.jpg">

    <div class="ofp-slider-navigation ofp-top-right">
        <div class="ofp-arrow-left"> &#10096;</div>
        <div class="ofp-arrow-right"> &#10097;</div>
    </div>
    <div class="ofp-slider-navigation ofp-center ofp-bottom-middle">
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
    </div>
</div>
```

## Basic Usage

### HTML
To transform a div into a slide show add the class ``ofp-slider`` to a div and append some images as direct child. For each image
add the class ``ofp-slides``.
```html
<div class="ofp-slider" data-slider-index="1">
    <img class="ofp-slides" src="img/Hydrangeas.jpg">
    <img class="ofp-slides" src="img/Jellyfish.jpg">
    <img class="ofp-slides" src="img/Koala.jpg">

    <div class="ofp-slider-navigation ofp-center ofp-middle">
        <div class="ofp-arrow-left">&#10094;</div>
        <div class="ofp-arrow-right">&#10095;</div>
    </div>
    <div class="ofp-slider-navigation ofp-bottom-middle">
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
        <span class="ofp-slider-dots"></span>
    </div>
</div>
```
The data attribute ``slider-index`` specifies the index of the first slide to show.

### JavaScript
Next, put this piece of code at the end of your page:
```javascript
$(".ofp-slider").offbeatSlider({"slideStartIndex": 1});
```
The option ``slideStartIndex`` defines the index of the first slide to show for every slide show div if
the data attribute ``slider-index`` is not defined.

## Options

**First slide** (JavaScript / data-attribute)

JavaScript property ``slideStartIndex`` sets the first slide image for all slide show containers if no
data-attribute ``slider-index`` is specified in the corresponding div with the class ``ofp-slider``.

**Animation**

You can set the transition animation for each slide in the slide show with these options:
```javascript
$(".ofp-slider").offbeatSlider({
                                   animate: true,
                                   duration: 1000,
                                   easing: "linear" //easein, linear, ...
                               });
```
You can adjust the duration and the easing function. The name for the easing functions are the same as in jQuery.

**Carousel**

Automatically show the available slides in sequence with these options:
```javascript
$(".ofp-slider").offbeatSlider({
            carousel: true, //auto-animate ?
            carouselDelay: 3000
        });
```

The default of the carousel animation is ``false`` which means the slides won't be shown automatically one by one.

## Customisation

### Positioning of navigation controls

**Combined**
Slider dots and arrows as one unit:
```html
<div class="ofp-slider-navigation ofp-center ofp-middle">
    <div class="ofp-arrow-left">&#10094;</div>
    <div class="ofp-arrow-right">&#10095;</div>
    <span class="ofp-slider-dots"></span>
    <span class="ofp-slider-dots"></span>
    <span class="ofp-slider-dots"></span>
</div>
```
Both controls will be displayed centered horizontally and vertically within the image.

**Separated**
Use two div-containers with class ``ofp-slider-navigation``:
```html
<div class="ofp-slider-navigation ofp-center ofp-top-middle">
    <div class="ofp-arrow-left">&#10094;</div>
    <div class="ofp-arrow-right">&#10095;</div>
</div>

<div class="ofp-slider-navigation ofp-center ofp-bottom-middle">
    <span class="ofp-slider-dots"></span>
    <span class="ofp-slider-dots"></span>
    <span class="ofp-slider-dots"></span>
</div>
```
Arrow controls will be displayed at the top and the dots are displayed at the bottom within the image.

#### <a name="positioning"></a> Classes for positioning

Any meaningful combination of the listed css classes is possible to position
the navigation controls or the image description.

```css
ofp-center
ofp-top-left
ofp-top-right
ofp-bottom-left
ofp-bottom-right
ofp-middle
ofp-left
ofp-right
ofp-top-middle
ofp-bottom-middle
```

### Text slide

You can have a text-only slide if you add the css class ``ofp-slides-text`` next to ``ofp-slides``:
```html
<div class="ofp-slider" data-slider-index="1">
    <div class="ofp-slides ofp-slides-text">
        I'm a nice text slide
    </div>
    <img class="ofp-slides" src="img/Hydrangeas.jpg">
    <div class="ofp-slides ofp-slides-text">
        I'm the <strong>last</strong> nice text slide
    </div>
    <div class="ofp-slider-navigation ofp-top-right">
        <div class="ofp-arrow-left">&#10096;</div>
        <div class="ofp-arrow-right">&#10097;</div>
    </div>
</div>
```
With this piece of code you have 3 slides consisting of a text slide, image slide, and a text slide. The
navigation is placed at the top right corner.

### Image slide with description
For that case:
```html
<div class="ofp-slides">
    <img src="img/Hydrangeas.jpg">
    <p class="ofp-top-middle" style="color: #efefef; font-size: 1em; font-weight: bold;">
        Description for the picture
    </p>
</div>
```
For the positioning of the description use the same classes as described in <a href="#positioning">Classes for positioning</a>

### Arrow symbols

Use any character within the div-container with class ``ofp-arrow-left`` to represent the left arrow and with
class ``ofp-arrow-right`` for the right arrow.

To change the _size of the symbols_ add the ``font-size`` property to the mentioned classes.

**Examples**

The following table shows some common arrow symbols with their corresponding HTML codes:

HTML code| Symbol
---------|---------
``&#10094;``|&#10094;
``&#10095;``|&#10095;
``&#10096``|&#10096;
``&#10097``|&#10097;
``&#171;``|&#171;
``&#187;``|&#187;

### Further examples

Please look into the [test page](index.html) for further examples.

## Websites using the <i>offbeat-slider</i>

<p>( feel free to send me your website using this component! :) )</p>

* [DollStuff](http://www.dollstuff.de/)