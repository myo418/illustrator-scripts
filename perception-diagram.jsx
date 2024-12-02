const patterns = [
  {
    name: "視デ研究室前（昼）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    startTime: "2024年11月18日 16時43分",
    videoLength: 164,
    places: [[0, "10号館4階"]],
    levels: [
      [0, 1],
      [5, 1],
      [8, 2],
      [15, 1],
      [29, 1],
      [31, 2],
      [39, 3],
      [41, 4],
      [52, 3],
      [56, 2],
      [58, 3],
      [60, 2],
      [64, 3],
      [75, 2],
      [100, 2],
      [120, 1],
      [125, 2],
      [130, 1],
      [145, 1],
      [148, 3],
      [155, 1],
      [160, 1],
      [162, 2],
      [164, 1],
    ],
    visualHumans: [
      [0, 1],
      [5, 2],
      [8, 1],
      [31, 2],
      [39, 3],
      [41, 4],
      [42, 3],
      [43, 2],
      [52, 1],
      [58, 2],
      [64, 3],
      [68, 2],
      [113, 1],
    ],
    visualHumans2: [
      [
        [0, 20, 5],
        [5, 20, 3],
        [164, 20, -3],
      ],
      [
        [5, 20, -10],
        [8, 20, 10],
      ],
      [
        [31, 25, 5],
        [42, 5, 5],
      ],
      [
        [42, 20, 10],
        [46, 20, 5],
        [46, 20, 5],
        [52, 20, -10],
      ],
    ],
    consciousHumans: [
      [0, 0],
      [5, 1],
      [10, 0],
      [13, 1],
      [31, 2],
      [39, 3],
      [41, 4],
      [48, 3],
      [52, 2],
      [54, 1],
      [58, 2],
      [64, 3],
      [73, 2],
      [120, 1],
    ],
    consciousHumans2: [
      [
        [0, 20, 5, 1],
        [5, 20, 3, 2],
        [164, 20, -3, 2],
      ],
      [
        [5, 20, -10, 1],
        [8, 20, 10, 1],
      ],
      [
        [31, 25, 5, 1],
        [42, 5, 5, 1],
      ],
      [
        [42, 20, 10, 1],
        [46, 20, 5, 1],
        [46, 20, 5, 1],
        [52, 20, -10, 1],
      ],
    ],
    sounds: [
      [31, 1, "遠くから人の声が聞こえる。視デ研究室の中にもう一人の影を見る"],
      [35, 2, "視デ研究室から人が出てきて、近づいてくる"],
      [37, 3, "硬い靴底を想起させる足跡が聞こえる"],
      [42, 1, "左の通路から人が出てくる"],
      [125, 2, "人の笑い声"],
      [148, 3, "扉を閉める音"],
      [162, 1, "人の声"],
    ],
    noise: [
      [0, 4],
      [5, 2],
      [60, 2],
      [90, 1],
      [120, 2],
      [150, 1],
      [164, 2],
    ],
    events: [
      [1, "チャイムが鳴る"],
      [13, "視デ研究室の中に人影があることに気づく"],
      [31, "遠くから人の声が聞こえる。視デ研究室の中にもう一人の影を見る"],
      [35, "視デ研究室から人が出てきて、近づいてくる"],
      [37, "硬い靴底を想起させる足跡が聞こえる"],
      [39, "視デ研究室内に3人目の人影を見つける"],
      [42, "左の通路から人が出てくる"],
      [52, "左の通路からきた人、右にいなくなる"],
      [58, "視デ研究室の中に別の人影を見つける"],
      [64, "倉庫で探し物をしてたであろう人が見え、奥に消えていく。"],
      [125, "人の笑い声"],
      [148, "扉を閉める音"],
      [162, "人の声"],
    ],
  },
  {
    name: "視デ研究室前（夜）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    startTime: "2024年11月18日 17時40分",
    videoLength: 181,
    places: [[0, "10号館4階"]],
    levels: [
      [0, 1],
      [5, 1],
      [7, 2, "車の音が遠くから聞こえる"],
      [13, 2, "どこかの扉を閉じた音が聞こえる"],
      [14, 3, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, 2, "視デ研究室の人、右に歩いていく。"],
      [21, 1, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, 1, "破裂音的な音が小さく鳴る"],
      [131, 2, "通路の右から人が現れる"],
      [145, 2, "人が視デ研究室の扉を開け、中に入る"],
      [152, 1, "自動的に扉が閉まり、カチャリと鳴る"],
      [181, 1, "自動的に扉が閉まり、カチャリと鳴る"],
    ],
    visualHumans: [
      [0, 0],
      [14, 1],
      [21, 0],
      [131, 1],
      [145, 0],
    ],
    visualHumans2: [
      [
        [14, 20, -5],
        [21, 20, 30],
      ],
      [
        [131, 20, 30],
        [145, 20, -5],
      ],
    ],
    consciousHumans: [
      [0, 0],
      [14, 1],
      [24, 0],
      [131, 1],
      [180, 0],
    ],
    consciousHumans2: [
      [
        [14, 20, -5],
        [21, 20, 30],
      ],
      [
        [131, 20, 30],
        [145, 20, -5],
      ],
    ],
    sounds: [
      [7, 1, "車の音が遠くから聞こえる"],
      [13, 2, "どこかの扉を閉じた音が聞こえる"],
      [14, 2, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, 1, "視デ研究室の人、右に歩いていく。"],
      [21, 3, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, 1, "破裂音的な音が小さく鳴る"],
      [141, 1, "通路の右から人が現れる"],
      [145, 2, "人が視デ研究室の扉を開け、中に入る"],
      [152, 3, "自動的に扉が閉まり、カチャリと鳴る"],
    ],
    noise: [
      [0, 1],
      [7, 2, "車の音が遠くから聞こえる"],
      [12, 1, "どこかの扉を閉じた音が聞こえる"],
      [14, 1, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, 1, "視デ研究室の人、右に歩いていく。"],
      [21, 1, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, 2, "破裂音的な音が小さく鳴る"],
      [131, 1, "通路の右から人が現れる"],
      [145, 1, "人が視デ研究室の扉を開け、中に入る"],
      [152, 1, "自動的に扉が閉まり、カチャリと鳴る"],
      [181, 1],
    ],
    events: [
      [7, "車の音が遠くから聞こえる"],
      [13, "どこかの扉を閉じた音が聞こえる"],
      [14, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, "視デ研究室の人、右に歩いていく。"],
      [21, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, "破裂音的な音が小さく鳴る"],
      [141, "通路の右から人が現れる"],
      [145, "人が視デ研究室の扉を開け、中に入る"],
      [152, "自動的に扉が閉まり、カチャリと鳴る"],
    ],
  },
  {
    name: "10号館、9号館、中央広場（昼）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    startTime: "2024年11月18日 16時36分",
    videoLength: 13 * 60 + 49,
    places: [
      [0, "10号413号室"],
      [15, "10号館4階"],
      [97, "9号館4階"],
      [223, "9号館3階"],
      [350, "9号館2階"],
      [372, "9号館1階"],
      [480, "9号館外"],
      [530, "7号館、8号館の間"],
      [570, "中央広場"],
      [640, "9号館横"],
      [690, "10号館1階"],
      [710, "10号館2階"],
      [745, "10号館3階"],
      [790, "10号館4階"],
      [813, "10号413号室"],
    ],
    levels: [
      [0, 0],
      [25, 3],
      [32, 4],
      [34, 5],
      [84, 4],
      [100, 2],
      [101, 1],
      [102, 2],
      [103, 3],
      [110, 2],
      [130, 3],
      [160, 4],
      [180, 3],
    ],
    visualHumans: [
      [0, 0],
      [25, 1],
      [87, 0],
      [104, 1],
      [105, 2],
      [106, 0],
      [112, 1],
    ],
    visualHumans2: [
      [
        [25, 5, -40],
        [26, 5, 5],
        [32, 1, 10],
        [35, 2, 0],
        [80, 2, 10],
        [86, 4, 160],
        [95, 15, 180],
        [100, 15, 180],
      ],
      [
        [104, 8, 10],
        [105, 8, -10],
      ],
      [
        [105, 8, 9],
        [106, 8, -11],
      ],
      [
        [105, 8, 10],
        [106, 8, -10],
      ],
      [
        [112, 30, 0],
        [116, 1, 10],
        [119, 1, 90],
      ]
    ],
    consciousHumans: [
      [0, 0],
      [18, 1],
      [94, 0],
      [94, 0],
      [97, 3],
      [100, 0],
      [112, 1],
      [130, 0],
    ],
    consciousHumans2: [],
    sounds: [
      [11, 1, "扉を開くキィという音が聞こえる"],
      [15, 3, "自分で開けた扉の音が聞こえる"],
      [18, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [19, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [20, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [21, 3, "自分で開けた扉が閉まる音が聞こえる"],
      [21, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [22, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [23, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [24, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [25, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [26, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [27, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [28, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [29, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [30, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [31, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [32, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [33, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [34, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [35, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [36, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [37, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [38, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [39, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [40, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [41, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [42, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [43, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [44, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
      [45, 2, "水道のぴちゃぴちゃとう音が聞こえる"],
    ],
    noise: [
      [0, 1],
      [10, 1],
      [13, 2],
      [15, 3],
      [30, 4],
      [40, 3],
      [50, 2],
      [200, 2],
    ],
    events: [
      [0, "知覚地図の教室で録画をスタートし、出発する。"],
      [11, "扉を開くキィという音が聞こえる"],
      [13, "扉に近づくにつれ、部屋の外の環境音が聞こえるようになる"],
      [15, "教室の扉を開ける"],
      [18, "水道のぴちゃぴちゃとう音が聞こえる"],
      [21, "自分で開けた扉が閉まる音が聞こえる"],
      [25, "流しの前で何かを洗っている人を認識する"],
      [30, "流しの前の人がまやちゃんであるとわかる"],
      [33, "まやちゃんに声を掛ける"],
      [34, "返答が返ってくる"],
      [40, "しばらく会話"],
      [86, "会話終了"],
      [88, "渡り廊下の上で横風を感じる"],
      [97, "9号館の扉を開ける"],
      [97, "9号館の扉を開ける"],
    ],
  },
  {
    name: "10号館、9号館、中央広場（夜）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    startTime: "2024年11月18日 17時32分",
    videoLength: 11 * 60 + 37,
    places: [[0, "10号館4階"]],
    levels: [
      [0, 1],
      [5, 2],
    ],
    visualHumans: [[0, 0]],
    visualHumans2: [],
    consciousHumans: [],
    consciousHumans2: [],
    sounds: [],
    noise: [
      [0, 1],
      [30, 2],
      [60, 2],
      [90, 1],
      [120, 2],
      [150, 1],
      [180, 2],
    ],
    events: [[0, "知覚地図の教室で録画をスタートし、出発する。"]],
  },
];
var fontSize = {
  title: 100,
  large: 50,
  medium: 40,
  small: 20,
};
var fontColor = {
  dark: "#000000",
  light: "#444444",
  veryLight: "#666666",
};
var fontName = {
  common: "UDReiminPr6N-Light", // PostScript名
};

function hexToRGBColor(hex) {
  if (hex.charAt(0) === "#") {
    hex = hex.substring(1);
  }

  if (hex.length !== 6) {
    throw new Error("無効なカラーコードです: " + hex);
  }

  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var rgbColor = new RGBColor();
  rgbColor.red = r;
  rgbColor.green = g;
  rgbColor.blue = b;

  return rgbColor;
}

// なぜか単位mmのドキュメントでも10倍のcmになってしまっているので、10分の1にする。
function mmToPt(mm) {
  return (mm * 2.8346) / 10;
}

function ptToMm(mm) {
  return (mm / 2.8346) * 10;
}

function pad(num) {
  return (num < 10 ? "0" : "") + num;
}

function deleteGroupByName(groupName) {
  var doc = app.activeDocument;
  for (var i = doc.groupItems.length - 1; i >= 0; i--) {
    var group = doc.groupItems[i];
    if (group.name === groupName) {
      group.remove();
      return;
    }
  }
}

function createGroupWithName(groupName) {
  var doc = app.activeDocument;
  var newGroup = doc.groupItems.add();
  newGroup.name = groupName;

  return newGroup;
}

function getArtboard(artboardName) {
  var doc = app.activeDocument;

  var targetArtboard = null;
  for (var i = 0; i < doc.artboards.length; i++) {
    if (doc.artboards[i].name === artboardName) {
      return doc.artboards[i];
    }
  }

  if (!targetArtboard) {
    alert("アートボード '" + artboardName + "' が見つかりません。");
  }
}

function moveLeftTop(object, left, top) {
  object.position = [mmToBoardX(left), mmToBoardY(top)];
}

function moveText(object, x_mm, y_mm) {
  object.left = mmToBoardX(x_mm) - object.width / 2;
  object.top = mmToBoardY(y_mm) + object.height / 2;
}

function moveTextLeftTop(object, x_mm, y_mm) {
  object.left = mmToBoardX(x_mm);
  object.top = mmToBoardY(y_mm);
}

function moveTextRightCenter(object, x_mm, y_mm) {
  object.left = mmToBoardX(x_mm) - object.width;
  object.top = mmToBoardY(y_mm) + object.height / 2;
}

function moveImage(imageName, left, top) {
  var doc = app.activeDocument;
  for (var i = 0; i < doc.pageItems.length; i++) {
    var item = doc.pageItems[i];
    if (item.typename === "PlacedItem" && item.name === imageName) {
      moveLeftTop(item, left, top);
      return item;
    }
  }

  alert("画像 '" + imageName + "' が見つかりません。");
}

function mmToBoardX(mm) {
  const artboardRect = getArtboard(artboardName).artboardRect;
  var artboardLeft = artboardRect[0];
  return artboardLeft + mmToPt(mm);
}

function mmToBoardY(mm) {
  const artboardRect = getArtboard(artboardName).artboardRect;
  var artboardTop = artboardRect[1];
  return artboardTop - mmToPt(mm);
}

function generateRect(x, y, width, height, colorCode) {
  var rect = generatedGroup.pathItems.rectangle(0, 0, mmToPt(width), mmToPt(height));

  rect.filled = true;
  rect.fillColor = hexToRGBColor(colorCode);
  rect.stroked = false;

  moveLeftTop(rect, x, y);
}

function generateTextCenterCenter(text, x, y, fontSize, colorCode) {
  textObject = generateText(text, fontSize, colorCode);
  moveText(textObject, x, y);
  return textObject;
}

function generateTextLeftTop(text, x, y, fontSize, colorCode) {
  textObject = generateText(text, fontSize, colorCode);
  moveTextLeftTop(textObject, x, y);
  return textObject;
}

function generateTextRightCenter(text, x, y, fontSize, colorCode) {
  textObject = generateText(text, fontSize, colorCode);
  moveTextRightCenter(textObject, x, y);
}

function generateText(text, fontSize, colorCode) {
  var textObject = generatedGroup.textFrames.add();
  textObject.contents = text;

  textObject.textRange.fillColor = hexToRGBColor(colorCode);
  textObject.textRange.characterAttributes.size = fontSize / 10;

  try {
    textObject.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName.common);
  } catch (e) {
    alert("フォント '" + fontName.common + "' が見つかりません。\nフォント名を確認してください。");
    return;
  }

  return textObject;
}

function generateCircle(x, y, diameter, color, weight, strokeColor) {
  var actualDiameter = mmToPt(diameter)
  var actualTop = mmToBoardY(y)+ actualDiameter / 2;
  var actualLeft = mmToBoardX(x) - actualDiameter / 2;
  var circle = generatedGroup.pathItems.ellipse(actualTop, actualLeft, actualDiameter, actualDiameter);
  circle.fillColor = hexToRGBColor(color);
  circle.strokeWidth = weight / 10;
  if (strokeColor) circle.strokeColor = hexToRGBColor(strokeColor)

  return circle;
}

function generateLine(x1, y1, x2, y2, color, weight) {
  var line = generatedGroup.pathItems.add();
  line.setEntirePath([
    [mmToBoardX(x1), mmToBoardY(y1)],
    [mmToBoardX(x2), mmToBoardY(y2)],
  ]);
  line.strokeColor = hexToRGBColor(color);
  line.strokeWidth = weight / 10;

  return line;
}

function generateLevel(left, top, levels, width, height) {
  generateRect(left, top, width, height, "#EEEEEE");
  for (var i = 0; i < levels.length - 1; i++) {
    var maxLevel = 5;
    var yUnit = height / maxLevel;
    var startX = left + levels[i][0] * xUnit;
    var startY = top + (maxLevel - levels[i][1]) * yUnit;
    var endX = left + levels[i + 1][0] * xUnit;
    var endY = top + (maxLevel - levels[i + 1][1]) * yUnit;
    generateLine(startX, startY, endX, endY, fontColor.dark, 1);
  }
}

function generateHumans(left, centerY, humanList, videoLength) {
  for (var i = 0; i < humanList.length; i++) {
    var endTime = i === humanList.length - 1 ? videoLength : humanList[i + 1][0];
    var startX = left + humanList[i][0] * xUnit;
    var endX = left + endTime * xUnit;

    var yUnit = 15;
    var height = humanList[i][1] === 0 ? 0 : (humanList[i][1] - 1) * yUnit;

    if (i !== 0) {
      var verticalLineHeight = (Math.max(humanList[i - 1][1], humanList[i][1]) - 1) * yUnit;
      generateLine(startX, centerY - verticalLineHeight / 2, startX, centerY + verticalLineHeight / 2, fontColor.light, 1);
    }

    for (var j = 0; j < Math.max(1, humanList[i][1]); j++) {
      var y = centerY - height / 2 + j * yUnit;
      var line = generateLine(startX, y, endX, y, fontColor.light, 1);
      if (humanList[i][1] === 0) {
        line.strokeDashes = [1, 1];
        line.strokeColor = hexToRGBColor(fontColor.veryLight);
      } else {
        generateCircle(startX, y, 3, "#BBBBBB", 1);
      }
    }
  }
}

function generateHumans2(left, centerY, humanList, videoLength) {
  for (var i = 0; i < humanList.length; i++) {
    var person = humanList[i];
    for (var j = 0; j < person.length - 1; j++) {
      var pointStart = person[j];
      var pointEnd = person[j + 1];

      var yUnit = 5;
      var height = humanList.length === 0 ? 0 : (humanList.length - 1) * yUnit;

      var startX = left + pointStart[0] * xUnit;
      var endX = left + pointEnd[0] * xUnit;
      var y = centerY - height / 2 + i * yUnit;

      generateLine(startX, y, endX, y, fontColor.light, 1);
    }
  }
}

function generateHumans3(left, centerY, humanList, videoLength) {
  var pointDiff = 2;
  const points = Math.floor(videoLength) / pointDiff;
  for (var i = 0; i <= points; i++) {
    var time = i * pointDiff;
    var startX = left + time * xUnit;

    for (var j = 0; j < humanList.length; j++) {
      var humanMoves = humanList[j];
      for (var k = 0; k < humanMoves.length - 1; k++) {
        if (humanMoves[k][0] <= time && time <= humanMoves[k + 1][0]) {
          var ratio = (time - humanMoves[k][0]) / (humanMoves[k + 1][0] - humanMoves[k][0]);
          var distance = (humanMoves[k][1] + (humanMoves[k + 1][1] - humanMoves[k][1]) * ratio) * 2;
          var angle = humanMoves[k][2] + (humanMoves[k + 1][2] - humanMoves[k][2]) * ratio + 90;
          var angleTheta = (angle / 360) * Math.PI * 2;

          var endX = startX + Math.cos(angleTheta) * distance;
          var endY = centerY - Math.sin(angleTheta) * distance;

          generateLine(startX, centerY, endX, endY, fontColor.light, 1);
          generateCircle(endX, endY, humanMoves[k][3] === undefined ? 1 :humanMoves[k][3], "#BBBBBB", 1);
          break;
        }
      }
    }

    generateCircle(startX, centerY, 2, "#000000", 0);
  }
}

function generateNoise(left, centerY, levels, videoLength) {
  var pointDiff = 1;
  const points = Math.floor(videoLength) / pointDiff;
  for (var i = 0; i < points; i++) {
    var time = i * pointDiff;
    var baseX = left + time * xUnit;
    for (var j = 0; j < levels.length - 1; j++) {
      if (levels[j][0] <= time && time <= levels[j + 1][0]) {
        var ratio = (time - levels[j][0]) / (levels[j + 1][0] - levels[j][0]);
        var level = levels[j][1] + (levels[j + 1][1] - levels[j][1]) * ratio;
        for (var k = 0; k < level * 10; k++) {
          var distance = Math.random() * 10;
          var angle = Math.random() * Math.PI * 2;
          var x = baseX + Math.cos(angle) * distance;
          var y = centerY - Math.sin(angle) * distance;

          generateCircle(x, y, 0.1, "#555555", 1);
        }
        break;
      }
    }
  }
}

function generateSounds(left, centerY, sounds) {
  for (var i = 0; i < sounds.length; i++) {
    var startX = left + sounds[i][0] * xUnit;
    var sizeUnit = 4;
    var diameter = sounds[i][1] * sizeUnit;

    var circleTop = mmToBoardY(centerY - diameter / 2);
    var circleLeft = mmToBoardX(startX - diameter / 2);
    var circle = generatedGroup.pathItems.ellipse(circleTop, circleLeft, mmToPt(diameter), mmToPt(diameter));
    circle.fillColor = hexToRGBColor("#BBBB00");
    circle.stroke = false;
    circle.strokeWidth = 0;
  }
}

function generateEvents(left, top, events) {
  var topMargin = 10;
  for (var i = 0; i < events.length; i++) {
    var startX = left + events[i][0] * xUnit;
    var textObject = generateTextLeftTop(events[i][1], 0, 0, fontSize.small, fontColor.light);
    textObject.rotate(-30);
    moveTextLeftTop(textObject, startX, top + topMargin);
  }
}

function generateTimes(left, centerY, videoLength) {
  for (var i = 0; i < videoLength / frameSec; i++) {
    var sec = i * frameSec;
    var startX = left + sec * xUnit;
    generateTextCenterCenter(Math.floor(sec / 60) + ":" + pad(sec % 60), startX, centerY, fontSize.small, fontColor.light);
  }
}

function generatePlaces(left, centerY, places, videoLength) {
  for (var i = 0; i < places.length; i++) {
    var startX = left + places[i][0] * xUnit;
    generateTextCenterCenter(places[i][1], startX, centerY, fontSize.small, fontColor.light);
  }
}

deleteGroupByName("generated");
var generatedGroup = createGroupWithName("generated");

const margin = 30;
const commonMargin = 5;
const baseLeft = 150;
const startY = 50;

const framesHeight = 80;
const frameSec = 5;
const xUnit = ((framesHeight / 4032) * 2268) / frameSec;

const height = {
  title: 30,
  startTime: 10,
  place: 10,
  time: 10,
  level: 80,
  frames: 80,
  sketch: 80,
  sketchColored: 80,
  colorAverage: 20,
  colorDominant: 20,
  colorCluster5: 60,
  colorCluster10: 60,
  visualHumans: 70,
  visualHumans2: 50,
  visualHumans3: 50,
  consciousHumans: 80,
  consciousHumans2: 80,
  sound: 40,
  noise: 60,
  sound2: 40,
  event: 100,
};
const bottomMargin = 50;

var blockHeight = bottomMargin;
for (var key in height) {
  blockHeight += height[key] + commonMargin;
}
var artboardName = "timeline-1";

// generateTextLeftTop("知覚したもの", margin, margin, fontSize.title, fontColor.dark);
for (var i = 0; i < patterns.length; i++) {
  var pattern = patterns[i];
  var nameIndex = i + 1;
  artboardName = "timeline-" + nameIndex;

  var startTimeY = startY;
  var titleY = startTimeY + height.startTime + commonMargin;
  var placeY = titleY + height.title + commonMargin;
  var timeY = placeY + height.place + commonMargin;
  var levelY = timeY + height.time + commonMargin;
  var framesY = levelY + height.level + commonMargin;
  var sketchY = framesY + height.frames + commonMargin;
  var sketchColoredY = sketchY + height.sketch + commonMargin;
  var colorAverageY = sketchColoredY + height.sketchColored + commonMargin;
  var colorDominantY = colorAverageY + height.colorAverage + commonMargin;
  var colorCluster5Y = colorDominantY + height.colorDominant + commonMargin;
  var colorCluster10Y = colorCluster5Y + height.colorCluster5 + commonMargin;
  var visualHumansY = colorCluster10Y + height.colorCluster10 + commonMargin;
  var visualHumans2Y = visualHumansY + height.visualHumans + commonMargin;
  var visualHumans3Y = visualHumans2Y + height.visualHumans2 + commonMargin;
  var consciousHumansY = visualHumans3Y + height.visualHumans3 + commonMargin;
  var consciousHumans2Y = consciousHumansY + height.consciousHumans + commonMargin;
  var soundY = consciousHumans2Y + height.consciousHumans2 + commonMargin;
  var noiseY = soundY + height.sound + commonMargin;
  var sound2Y = noiseY + height.noise + commonMargin;
  var eventY = sound2Y + height.sound2 + commonMargin;

  var framesImage = moveImage("frames-" + nameIndex, baseLeft, framesY);
  moveImage("sketch-" + nameIndex, baseLeft, sketchY);
  moveImage("sketch-colored-" + nameIndex, baseLeft, sketchColoredY);
  moveImage("color-average-" + nameIndex, baseLeft, colorAverageY);
  moveImage("color-dominant-" + nameIndex, baseLeft, colorDominantY);
  moveImage("color-cluster5-" + nameIndex, baseLeft, colorCluster5Y);
  moveImage("color-cluster10-" + nameIndex, baseLeft, colorCluster10Y);
  generatePlaces(baseLeft, placeY + height.place / 2, pattern.places, pattern.videoLength);
  generateTimes(baseLeft, timeY + height.time / 2, pattern.videoLength);
  generateLevel(baseLeft, levelY, pattern.levels, ptToMm(framesImage.width), height.level);
  generateHumans(baseLeft, visualHumansY + height.visualHumans / 2, pattern.visualHumans, pattern.videoLength);
  generateHumans2(baseLeft, visualHumans2Y + height.visualHumans2 / 2, pattern.visualHumans2, pattern.videoLength);
  generateHumans3(baseLeft, visualHumans3Y + height.visualHumans3 / 2, pattern.visualHumans2, pattern.videoLength);
  generateHumans(baseLeft, consciousHumansY + height.consciousHumans / 2, pattern.consciousHumans, pattern.videoLength);
  generateHumans3(baseLeft, consciousHumans2Y + height.consciousHumans2 / 2, pattern.consciousHumans2, pattern.videoLength);
  generateSounds(baseLeft, soundY + height.sound / 2, pattern.sounds);
  generateLevel(baseLeft, noiseY, pattern.noise, ptToMm(framesImage.width), height.noise);
  // generateNoise(baseLeft, sound2Y + height.sound2 / 2, pattern.noise, pattern.videoLength);
  generateSounds(baseLeft, sound2Y + height.sound2 / 2, pattern.sounds);
  generateEvents(baseLeft, eventY, pattern.events);

  var labelRight = baseLeft - commonMargin * 2;
  generateTextLeftTop(pattern.name, baseLeft, titleY, fontSize.large, fontColor.dark);
  generateTextLeftTop(pattern.startTime, baseLeft, startTimeY, fontSize.small, fontColor.light);
  generateTextRightCenter("ひと気の強さ", labelRight, levelY + height.level / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("frames", labelRight, framesY + height.frames / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("lines", labelRight, sketchY + height.sketch / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("lines colored", labelRight, sketchColoredY + height.sketchColored / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("色(平均)", labelRight, colorAverageY + height.colorAverage / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("色(1種)", labelRight, colorDominantY + height.colorDominant / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("色(5種)", labelRight, colorCluster5Y + height.colorCluster5 / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("色(10種)", labelRight, colorCluster10Y + height.colorCluster10 / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("視界の中の人数", labelRight, visualHumansY + height.visualHumans / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("意識の中の人数", labelRight, consciousHumansY + height.consciousHumans / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("人が発する音", labelRight, soundY + height.sound / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("ノイズの大きさ", labelRight, noiseY + height.noise / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("人の音+ノイズ", labelRight, sound2Y + height.sound2 / 2, fontSize.medium, fontColor.light);
  generateTextRightCenter("発生した事象", labelRight, eventY + 20, fontSize.medium, fontColor.light);
}
