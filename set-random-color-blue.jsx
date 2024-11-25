function hsbToRgb(hue, saturation, brightness) {
  var rgb = new RGBColor();

  var c = (brightness / 100) * (saturation / 100);
  var x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  var m = brightness / 100 - c;

  var r, g, b;

  if (0 <= hue && hue < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= hue && hue < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= hue && hue < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= hue && hue < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= hue && hue < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= hue && hue < 360) {
    r = c;
    g = 0;
    b = x;
  }

  rgb.red = (r + m) * 255;
  rgb.green = (g + m) * 255;
  rgb.blue = (b + m) * 255;

  return rgb;
}

var topColor = {
  hue: 120,
  saturation: 20,
  brightness: 100,
};

var middleColor = {
  hue: 176,
  saturation: 63,
  brightness: 72,
};

var bottomColor = {
  hue: 220,
  saturation: 63,
  brightness: 45,
};

var pathItems = app.activeDocument.selection[0].pathItems;
var minY, maxY, centerY;

for (var i = 0; i < pathItems.length; i++) {
  var pathItem = pathItems[i];
  var artboardBounds = pathItem.geometricBounds;

  minY = minY === undefined ? artboardBounds[3] : minY;
  minY = minY < artboardBounds[3] ? minY : artboardBounds[3];
  maxY = maxY === undefined ? artboardBounds[1] : maxY;
  maxY = maxY > artboardBounds[1] ? maxY : artboardBounds[1];
  centerY = (minY + maxY) / 2;
}

const randomHue = 40
for (var i = 0; i < pathItems.length; i++) {
  var pathItem = pathItems[i];
  var bounds = pathItem.geometricBounds;
  var itemCenterY = (bounds[1] + bounds[3]) / 2;

  if (itemCenterY > centerY) {
    var ratio = (itemCenterY - centerY) / (maxY - centerY);
    var hue = middleColor.hue + (topColor.hue - middleColor.hue) * ratio + Math.random() * randomHue - randomHue / 2;
    var saturation = middleColor.saturation + (topColor.saturation - middleColor.saturation) * ratio;
    var brightness = middleColor.brightness + (topColor.brightness - middleColor.brightness) * ratio;
    pathItem.fillColor = hsbToRgb(hue, saturation, brightness);
  } else {
    var ratio = (itemCenterY - centerY) / (minY - centerY);
    var hue = middleColor.hue - (middleColor.hue - bottomColor.hue) * ratio + Math.random() * randomHue - randomHue / 2;
    var saturation = middleColor.saturation - (middleColor.saturation - bottomColor.saturation) * ratio;
    var brightness = middleColor.brightness - (middleColor.brightness - bottomColor.brightness) * ratio;
    pathItem.fillColor = hsbToRgb(hue, saturation, brightness);
  }
}
