// get the image
let image = document.getElementById("image");
let imageStyle = getComputedStyle(image);
let initStyle = imageStyle.filter;
// get fields
let brightRange = document.getElementById("brightRange");
let brightInput = document.getElementById("brightInput");
let contrastRange = document.getElementById("contrastRange");
let contrastInput = document.getElementById("contrastInput");
let blurRange = document.getElementById("blurRange");
let blurInput = document.getElementById("blurInput");
let shadowColor = document.getElementById("shadowColor");
let xOffsetRange = document.getElementById("xOffsetRange");
let xOffsetInput = document.getElementById("xOffsetInput");
let yOffsetRange = document.getElementById("yOffsetRange");
let yOffsetInput = document.getElementById("yOffsetInput");
let shadowBlurRange = document.getElementById("shadowBlurRange");
let shadowBlurInput = document.getElementById("shadowBlurInput");
let grayRange = document.getElementById("grayRange");
let grayInput = document.getElementById("grayInput");
let hueRange = document.getElementById("hueRange");
let hueInput = document.getElementById("hueInput");
let invertRange = document.getElementById("invertRange");
let invertInput = document.getElementById("invertInput");
let opacityRange = document.getElementById("opacityRange");
let opacityInput = document.getElementById("opacityInput");
let saturateRange = document.getElementById("saturateRange");
let saturateInput = document.getElementById("saturateInput");
let sepiaRange = document.getElementById("sepiaRange");
let sepiaInput = document.getElementById("sepiaInput");

let brightness;
let contrast;
let blur;
let shadow;
let shadowXOffset;
let shadowYOffset;
let shadowBlur;
let grayscale;
let hue;
let invert;
let opacity;
let saturate;
let sepia;

if (initStyle == "none") {

}

const setFilter = () => {

}