// グループ化されたオブジェクトを選択してからスクリプトを実行してください

// ドキュメントの取得
var doc = app.activeDocument;

// 選択されているグループ化されたオブジェクトを取得
var selectedGroup = doc.selection[0];

// グループ内のパスアイテムを取得
var paths = selectedGroup.pathItems;

function hsbToRgb(hue, saturation, brightness) {
  var rgb = new RGBColor();

  var c = (brightness / 100) * (saturation / 100);
  var x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  var m = brightness / 100 - c;

  var r = 0,
    g = 0,
    b = 0;

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

// ランダムカラーを生成する関数
function getRandomColor() {
  if (Math.random() < 0.2) {
    return hsbToRgb(
      Math.floor(0 + Math.random() * 360),
      Math.floor(20 + Math.random() * 20),
      Math.floor(90 + Math.random() * 10)
    );
  } else {
    return hsbToRgb(
      Math.floor(0 + Math.random() * 30),
      Math.floor(20 + Math.random() * 20),
      Math.floor(90 + Math.random() * 10)
    );
  }
}

// 各パスアイテムにランダムな色を適用
for (var i = 0; i < paths.length; i++) {
  paths[i].fillColor = getRandomColor();
}
