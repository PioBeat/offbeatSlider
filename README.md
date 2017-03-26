# jQuery Slideshow Plugin - offbeatSlider

Easy to use jQuery plugin to create a image slideshow within thumbnails or
page headers.

## Usage

### HTML
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

Data attribute ``slider-index`` specifies index of slide to show first.

### JavaScript
```javascript
$(".ofp-slider").offbeatSlider({"slideStartIndex": 3});
```
Option ``slideStartIndex`` sets the slide image for all slideshow containers if no
data-attribute ``slider-index`` is specified in the correspondig div with class
``ofp-slider``.

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

todo