# jQuery Slideshow Plugin - offbeatSlider

Easy to use jQuery plugin to create an image slideshow for a thumbnail preview or
for page headers.

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

## Usage

### HTML
To transform a div into a slideshow add the class ``ofp-slider`` to a div and append some images as direct childs:
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
Put this piece of code at the end of your page:
```javascript
$(".ofp-slider").offbeatSlider({"slideStartIndex": 3});
```

Option ``slideStartIndex`` sets the first slide image for all slideshow containers if no
data-attribute ``slider-index`` is specified in the corresponding div with the class ``ofp-slider``.

## Customisation

### Position of navigation controls

**Combined**

Slider dots and arrows as one:
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

#### Classes for positioning

todo

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