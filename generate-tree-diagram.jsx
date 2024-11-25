var doc = app.activeDocument;

var startX = 50;
var startY = -100;
var rectWidth = 200;
var rectHeight = 50;
var spacing = 20;

function putData(text, baseX, baseY) {
  // 四角形を作成
  var rect = doc.pathItems.roundedRectangle(baseY, baseX, rectWidth, rectHeight, 10, 10);

  const fillColor = new RGBColor();
  fillColor.red = 200;
  fillColor.green = 200;
  fillColor.blue = 200;
  rect.fillColor = fillColor;
  rect.stroked = false;

  // テキストを作成
  var textAreaPath = doc.pathItems.rectangle(baseY, baseX, rectWidth, rectHeight);
  var textFrame = doc.textFrames.areaText(textAreaPath);
  textFrame.contents = text;
  textFrame.textRange.size = 32;
  textFrame.textRange.justification = Justification.CENTER;

  textFrame.fillColor = new RGBColor();
  textFrame.fillColor.red = 255;
  textFrame.fillColor.green = 255;
  textFrame.fillColor.blue = 255;  
  textFrame.position = [baseX , baseY];
}

function handleData(data, baseX, baseY) {
  if (typeof data === "string") {
    putData(data, baseX, baseY);
  } else if (data instanceof Array) {
    // テキストリストをループして四角形と文字を生成
    for (var i = 0; i < data.length; i++) {
      handleData(data[i], baseX + i * (rectWidth + spacing), baseY - rectHeight + spacing);
    }
  } else {
    var i = 0;
    for (var key in data) {
      putData(key, baseX, baseY);
      handleData(
        data[key],
        baseX + i * (rectWidth + spacing),
        baseY - rectHeight + spacing
      );
      i++;
    }
  }
}

const data = {
  ひと気: [
    {
      直接感じ取れるひと気: [
        {
          人影: ["人", "車"],
        },
        "声",
        {
          音: ["扉の開閉音", "コピー機", "水道", "トイレ", "車", "自転車"],
        },
        "足音",
      ],
    },
    "間接的に感じ取れるひと気",
  ],
};

handleData(data, startX, startY);
