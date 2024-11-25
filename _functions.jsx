function hsbToCmyk(hue, saturation, brightness) {
  var rgb = hsbToRgb(hue, saturation, brightness);
  var cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

  return cmyk;
}

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

  rgb.red = Math.floor((r + m) * 255);
  rgb.green = Math.floor((g + m) * 255);
  rgb.blue = Math.floor((b + m) * 255);

  return rgb;
}


function rgbToCmyk(r, g, b) {
  var c = 1 - r;
  var m = 1 - g;
  var y = 1 - b;
  var k = Math.min(c, m, y);

  if (k < 1) {
      c = (c - k) / (1 - k);
      m = (m - k) / (1 - k);
      y = (y - k) / (1 - k);
  } else {
      c = 0;
      m = 0;
      y = 0;
  }

  return {c: c * 100, m: m * 100, y: y * 100, k: k * 100};
}
