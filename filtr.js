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

const init = () => {
    brightRange.value = brightness;
    brightInput.value = brightness;
    contrastRange.value = contrast;
    contrastInput.value = contrast;
    blurRange.value = blur;
    blurInput.value = blur;
    shadowColor.value = shadow;
    xOffsetInput.value = shadowXOffset;
    xOffsetRange.value = shadowXOffset;
    yOffsetInput.value = shadowYOffset;
    yOffsetRange.value = shadowYOffset;
    shadowBlurRange.value = shadowBlur;
    shadowBlurInput.value = shadowBlur;
    grayRange.value = grayscale;
    grayInput.value = grayscale;
    hueRange.value = hue;
    hueInput.value = hue;
    invertRange.value = invert;
    invertInput.value = invert;
    opacityRange.value = opacity;
    opacityInput.value = opacity;
    saturateRange.value = saturate;
    saturateInput.value = saturate;
    sepiaRange.value = sepia;
    sepiaInput.value = sepia;
}

const setFilter = () => {
    let filter = "";
    brightness = brightRange.value;
    contrast = contrastRange.value;
    blur = blurRange.value;
    shadow = shadowColor.value;
    shadowXOffset = xOffsetRange.value;
    shadowYOffset = yOffsetRange.value;
    shadowBlur = shadowBlurRange.value;
    grayscale = grayRange.value;
    hue = hueRange.value;
    invert = invertRange.value;
    opacity = opacityRange.value;
    saturate = saturateRange.value;
    sepia = sepiaRange.value;

    filter += `brightness(${brightness / 100}) contrast(${contrast / 100}) blur(${blur}px) drop-shadow(${shadowXOffset}px ${shadowYOffset}px ${shadowBlur}px ${shadow}) grayscale(${grayscale}%) hue-rotate(${hue}deg) invert(${invert}%) opacity(${opacity / 100}) saturate(${saturate}) sepia(${sepia}%)`;
    image.style.filter = filter;

    brightInput.value = brightness;
    contrastInput.value = contrast;
    blurInput.value = blur;
    xOffsetInput.value = shadowXOffset;
    yOffsetInput.value = shadowYOffset;
    shadowBlurInput.value = shadowBlur;
    grayInput.value = grayscale;
    hueInput.value = hue;
    invertInput.value = invert;
    opacityInput.value = opacity;
    saturateInput.value = saturate;
    sepiaInput.value = sepia;
}

let allRanges = document.querySelectorAll("input[type=range]");
let allInputs = document.querySelectorAll("input[type=text]");
allRanges.forEach(r => r.addEventListener("change", setFilter));
allInputs.forEach(i => i.disabled = "true");

if (initStyle == "none") {
    brightness = 50;
    contrast = 50;
    blur = 0;
    shadow = "#000000";
    shadowXOffset = 0;
    shadowYOffset = 0;
    shadowBlur = 0;
    grayscale = 50;
    hue = 0;
    invert = 0;
    opacity = 0;
    saturate = 0;
    sepia = 0;

    init();
}