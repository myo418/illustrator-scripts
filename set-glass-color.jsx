var doc = app.activeDocument;
var pathItems = doc.selection[0].pathItems;

var minBrightness = 0.5; // 最大明度
var midBrightness = 1.0; // 基準の明度
var maxBrightness = 3; // 最大明度

try {
  for (var i = 0; i < pathItems.length; i++) {
    var pathItem = pathItems[i];

    var fillColor = pathItem.fillColor;

    if (fillColor.typename === "CMYKColor") {
      // CMYKカラーの場合
      var gradient = doc.gradients.add();
      var gradientStops = gradient.gradientStops;

      gradientStops.add();
      gradientStops.add();

      // グラデーションストップを設定
      gradientStops[0].color = new CMYKColor();
      gradientStops[0].color.cyan = fillColor.cyan * minBrightness;
      gradientStops[0].color.magenta = fillColor.magenta * minBrightness;
      gradientStops[0].color.yellow = fillColor.yellow * minBrightness;
      gradientStops[0].color.black = fillColor.black * minBrightness;
      gradientStops[0].midPoint = 30;

      gradientStops[1].color = new CMYKColor();
      gradientStops[1].color.cyan = fillColor.cyan;
      gradientStops[1].color.magenta = fillColor.magenta;
      gradientStops[1].color.yellow = fillColor.yellow;
      gradientStops[1].color.black = fillColor.black;
      gradientStops[1].midPoint = 40;

      gradientStops[2].color = new CMYKColor();
      gradientStops[2].color.cyan = fillColor.cyan;
      gradientStops[2].color.magenta = fillColor.magenta;
      gradientStops[2].color.yellow = fillColor.yellow;
      gradientStops[2].color.black = fillColor.black;
      gradientStops[2].midPoint = 70;

      gradientStops[3].color = new CMYKColor();
      gradientStops[3].color.cyan = fillColor.cyan;
      gradientStops[3].color.magenta = fillColor.magenta;
      gradientStops[3].color.yellow = fillColor.yellow;
      gradientStops[3].color.black = Math.min(100, fillColor.black * maxBrightness);
      gradientStops[3].midPoint = 80;

      // グラデーションのタイプを設定（線形グラデーション）
      gradient.type = GradientType.LINEAR;

      var colorOfGradient = new GradientColor();
      colorOfGradient.gradient = gradient;

      // グラデーションを適用
      pathItem.fillColor = colorOfGradient;
      pathItem.rotate(-90, false, false, true, false, Transformation.CENTER);
    } else {
      alert("選択したオブジェクトの塗りの色がCMYKではありません。");
      continue;
    }
  }
} catch (e) {
  alert("エラーが発生しました: " + e.message);
}
