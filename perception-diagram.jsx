const patterns = [
  {
    name: "視デ研究室前（昼）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
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
    videoLength: 181,
    places: [[0, "10号館4階"]],
    levels: [
      [0, 1],
      [5, 1],
      [7, 2, "車の音が遠くから聞こえる"],
      [13, 2, "どこかの扉を閉じた音が聞こえる"],
      [14, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, "視デ研究室の人、右に歩いていく。"],
      [21, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, "破裂音的な音が小さく鳴る"],
      [131, "通路の右から人が現れる"],
      [145, "人が視デ研究室の扉を開け、中に入る"],
      [152, "自動的に扉が閉まり、カチャリと鳴る"],
    ],
    visualHumans: [
      [0, 0],
      [14, 1],
      [21, 0],
      [131, 1],
      [145, 0],
    ],
    consciousHumans: [
      [0, 0],
      [14, 1],
      [24, 0],
      [131, 1],
      [180, 0],
    ],
    sounds: [],
    noise: [],
    events: [
      [7, "車の音が遠くから聞こえる"],
      [13, "どこかの扉を閉じた音が聞こえる"],
      [14, "視デ研究室の扉が開き、中から人が出てくる"],
      [16, "視デ研究室の人、右に歩いていく。"],
      [21, "視デ研究室の扉が勝手にしまり、カチャリと鳴る"],
      [60, "破裂音的な音が小さく鳴る"],
      [131, "通路の右から人が現れる"],
      [145, "人が視デ研究室の扉を開け、中に入る"],
      [152, "自動的に扉が閉まり、カチャリと鳴る"],
    ],
  },
  {
    name: "10号館、9号館、中央広場（昼）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    videoLength: 13 * 60 + 49,
    places: [
      [0, "10号館4階"],
      [30, "9号館4階"],
      [60, "9号館3階"],
    ],
    levels: [
      [0, 1],
      [0, 3],
    ],
    visualHumans: [],
    consciousHumans: [],
    sounds: [],
    noise: [],
    events: [],
  },
  {
    name: "10号館、9号館、中央広場（夜）",
    description: "人の輪郭、服、表情からは強く人の気配を感じる。",
    videoLength: 11 * 60 + 37,
    places: [[0, "10号館4階"]],
    levels: [
      [0, 1],
      [5, 2],
    ],
    visualHumans: [[0, 0]],
    consciousHumans: [],
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
    events: [],
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
  light: "#333333",
  veryLight: "#999999",
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

  textObject.filled = true;
  textObject.fillColor = hexToRGBColor(colorCode);
  textObject.stroked = false;
  textObject.textRange.characterAttributes.size = fontSize / 10;

  try {
    textObject.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName.common);
  } catch (e) {
    alert("フォント '" + fontName.common + "' が見つかりません。\nフォント名を確認してください。");
    return;
  }

  return textObject;
}

function generateLevel(left, top, levels, width, height) {
  generateRect(left, top, width, height, "#EEEEEE");
  for (var i = 0; i < levels.length - 1; i++) {
    var maxLevel = 5;
    var yUnit = height / maxLevel;
    var startX = mmToBoardX(left + levels[i][0] * xUnit);
    var startY = mmToBoardY(top + (maxLevel - levels[i][1]) * yUnit);
    var endX = mmToBoardX(left + levels[i + 1][0] * xUnit);
    var endY = mmToBoardY(top + (maxLevel - levels[i + 1][1]) * yUnit);
    var line = generatedGroup.pathItems.add();
    line.setEntirePath([
      [startX, startY],
      [endX, endY],
    ]);
    line.strokeColor = hexToRGBColor(fontColor.dark);
    line.strokeWidth = 1 / 10;
  }
}

function generateHumans(left, top, humanList, videoLength) {
  for (var i = 0; i < humanList.length; i++) {
    var startX = mmToBoardX(left + humanList[i][0] * xUnit);
    var end = i === humanList.length - 1 ? videoLength : humanList[i + 1][0];
    var endX = mmToBoardX(left + end * xUnit);

    var yUnit = 15;
    var height = humanList[i][1] === 0 ? 0 : (humanList[i][1] - 1) * yUnit;
    var verticalLine = generatedGroup.pathItems.add();
    var y = mmToBoardY(top + j * yUnit - height / 2);

    if (i !== 0) {
      var verticalLineHeight = (Math.max(humanList[i - 1][1], humanList[i][1]) - 1) * yUnit;
      verticalLine.setEntirePath([
        [startX, mmToBoardY(top - verticalLineHeight / 2)],
        [startX, mmToBoardY(top + verticalLineHeight / 2)],
      ]);
      verticalLine.strokeColor = hexToRGBColor(fontColor.light);
      verticalLine.strokeWidth = 1 / 10;
    }

    for (var j = 0; j < Math.max(1, humanList[i][1]); j++) {
      var line = generatedGroup.pathItems.add();
      var y = mmToBoardY(top + j * yUnit - height / 2);
      line.setEntirePath([
        [startX, y],
        [endX, y],
      ]);
      line.strokeColor = hexToRGBColor(fontColor.light);
      line.strokeWidth = 1 / 10;
      if (humanList[i][1] === 0) {
        line.strokeDashes = [1, 1];
        line.strokeColor = hexToRGBColor(fontColor.veryLight);
      } else {
        var diameter = 2;
        var circleTop = y + diameter / 2;
        var circleLeft = startX - diameter / 2;
        var circle = generatedGroup.pathItems.ellipse(circleTop, circleLeft, diameter, diameter);
        circle.fillColor = hexToRGBColor("#BBBBBB");
        circle.strokeWidth = 1 / 10;
      }
    }
  }
}

function generateSounds(left, top, sounds) {
  for (var i = 0; i < sounds.length; i++) {
    var startX = left + sounds[i][0] * xUnit;
    var sizeUnit = 4;
    var diameter = sounds[i][1] * sizeUnit;

    var circleTop = mmToBoardY(top - diameter / 2);
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
    var textObject = generateTextLeftTop(events[i][1], 0, 0, fontSize.small, fontColor.veryLight);
    textObject.rotate(-30);
    moveTextLeftTop(textObject, startX, top + topMargin);
  }
}

function generateTimes(left, y, videoLength) {
  for (var i = 0; i < videoLength / frameSec; i++) {
    var sec = i * frameSec;
    var startX = left + sec * xUnit;
    generateTextCenterCenter(Math.floor(sec / 60) + ":" + pad(sec % 60), startX, y, fontSize.small, fontColor.light);
  }
}

function generatePlaces(left, y, places, videoLength) {
  for (var i = 0; i < places.length; i++) {
    var startX = left + places[i][0] * xUnit;
    generateTextCenterCenter(places[i][1], startX, y, fontSize.small, fontColor.light);
  }
}

deleteGroupByName("generated");
var generatedGroup = createGroupWithName("generated");

const margin = 30;
const commonMargin = 5;
const baseLeft = 150;
// const startY = 120;
const startY = 50;

const framesHeight = 80;
const frameSec = 5;
const xUnit = ((framesHeight / 4032) * 2268) / frameSec;

const height = {
  title: 30,
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
  visualHumans: 50,
  consciousHumans: 80,
  sound: 40,
  noise: 60,
  event: 100,
};
const bottomMargin = 50;

var blockHeight = bottomMargin;
for (var key in height) {
  blockHeight += height[key] + commonMargin;
}
var artboardName = "timeline-1"

// generateTextLeftTop("知覚したもの", margin, margin, fontSize.title, fontColor.dark);
for (var i = 0; i < patterns.length; i++) {
  var pattern = patterns[i];
  var nameIndex = i + 1;
  artboardName = "timeline-" + nameIndex
  
  // var baseY = startY + blockHeight * i;
  var baseY = startY;
  var placeY = baseY + height.title + commonMargin;
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
  var consciousHumansY = visualHumansY + height.visualHumans + commonMargin;
  var soundY = consciousHumansY + height.consciousHumans + commonMargin;
  var noiseY = soundY + height.sound + commonMargin;
  var eventY = noiseY + height.noise + commonMargin;

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
  generateHumans(baseLeft, consciousHumansY + height.consciousHumans / 2, pattern.consciousHumans, pattern.videoLength);
  generateLevel(baseLeft, noiseY, pattern.noise, ptToMm(framesImage.width), height.noise);
  generateSounds(baseLeft, soundY + height.sound / 2, pattern.sounds);
  generateEvents(baseLeft, eventY, pattern.events);

  var labelRight = baseLeft - commonMargin * 2;
  generateTextLeftTop(pattern.name, baseLeft, baseY, fontSize.large, fontColor.dark);
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
  generateTextRightCenter("発生した事象", labelRight, eventY + 30, fontSize.medium, fontColor.light);
}
