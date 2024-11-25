const data = {
  patterns: [
    {
      name: "視デ研究室前（昼）",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。",
      videoLength: 164,
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
      ]
    },
    {
      name: "視デ研究室前（夜）",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。",
      videoLength: 181,
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
      sounds: [
      ],
      noise: [
      ],
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
      levels: [
        [0, 1],
        [0, 3],
      ],
      visualHumans: [
      ],
      consciousHumans: [
      ],
      sounds: [
      ],
      noise: [
      ],
      events: [
      ],
    },
    {
      name: "10号館、9号館、中央広場（夜）",
      description: "人の輪郭、服、表情からは強く人の気配を感じる。",
      videoLength: 11 * 60 + 37,
      levels: [
        [0, 1],
        [5, 2],
      ],
      visualHumans: [
        [0, 0]
      ],
      consciousHumans: [],
      sounds: [
      ],
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
    }
  ],
  fontSize: {
    title: 100,
    large: 50,
    medium: 40,
    small: 20
  },
  fontColor: {
    dark: '#000000',
    light: '#333333',
    veryLight: '#999999',
  }
}

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
  return mm * 2.8346 / 10; 
}

function ptToMmt(mm) {
  return mm / 2.8346 * 10; 
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

  // アートボードの基準位置を取得
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

function moveImage(artboardName, imageName, x_mm, y_mm) {
  const artboardRect = getArtboard(artboardName).artboardRect
  var artboardLeft = artboardRect[0];
  var artboardTop = artboardRect[1];

  // mmをptに変換した移動先の位置を計算
  var targetX = artboardLeft + mmToPt(x_mm);
  var targetY = artboardTop - mmToPt(y_mm);

  // 名前が一致する画像（PlacedItem）を検索
  var doc = app.activeDocument
  var targetImage = null;
  for (var i = 0; i < doc.pageItems.length; i++) {
      var item = doc.pageItems[i];
      if (item.typename === "PlacedItem" && item.name === imageName) {
          targetImage = item;
          break;
      }
  }

  if (!targetImage) {
      alert("画像 '" + imageName + "' が見つかりません。");
      return;
  }

  targetImage.position = [targetX, targetY];

  return targetImage
}

function move(artboardName, object, x_mm, y_mm) {
  const artboardRect = getArtboard(artboardName).artboardRect
  var artboardLeft = artboardRect[0];
  var artboardTop = artboardRect[1];

  var targetX = artboardLeft + mmToPt(x_mm);
  var targetY = artboardTop - mmToPt(y_mm); // Y座標は逆方向

  object.position = [targetX, targetY];
}

function moveText(artboardName, object, x_mm, y_mm) {
  const artboardRect = getArtboard(artboardName).artboardRect
  var artboardLeft = artboardRect[0];
  var artboardTop = artboardRect[1];

  object.left = artboardLeft + mmToPt(x_mm);
  object.top = artboardTop - mmToPt(y_mm);
}

function mmToBoardX(mm) {
  const artboardRect = getArtboard("timeline").artboardRect;
  var artboardLeft = artboardRect[0];
  return artboardLeft + mmToPt(mm);
}

function mmToBoardY(mm) {
  const artboardRect = getArtboard("timeline").artboardRect;
  var artboardTop = artboardRect[1];
  return artboardTop - mmToPt(mm);
}

function moveTextRightCenter(artboardName, object, x_mm, y_mm) {
  const artboardRect = getArtboard(artboardName).artboardRect
  var artboardLeft = artboardRect[0];
  var artboardTop = artboardRect[1];

  object.left = artboardLeft + mmToPt(x_mm) - object.width;
  object.top = artboardTop - (mmToPt(y_mm) - (object.height / 2));
}

function generateRect(group, x, y, width, height, colorCode) {
  var rect = group.pathItems.rectangle(0, 0, mmToPt(width), mmToPt(height));

  rect.filled = true;
  rect.fillColor = hexToRGBColor(colorCode);
  rect.stroked = false;

  move("timeline", rect, x, y)
}

function generateTextLeftTop(group, text, x, y, fontSize, colorCode) {
  textObject = generateText(group, text, fontSize, colorCode)
  moveText("timeline", textObject, x, y)
  return textObject;
}


function generateTextRightCenter(group, text, x, y, fontSize, colorCode) {
  textObject = generateText(group, text, fontSize, colorCode)
  moveTextRightCenter("timeline", textObject, x, y)
}

function generateText(group, text, fontSize, colorCode) {
  var textObject = generatedGroup.textFrames.add()
  textObject.contents = text 

  textObject.filled = true;
  textObject.fillColor = hexToRGBColor(colorCode);
  textObject.stroked = false;
  textObject.textRange.characterAttributes.size = fontSize / 10


    // フォントを設定
    var fontName = "UDReiminPr6N-Light";  // PostScript名
    try {
      textObject.textRange.characterAttributes.textFont = app.textFonts.getByName(fontName);
    } catch (e) {
        alert("フォント '" + fontName + "' が見つかりません。\nフォント名を確認してください。");
        return;
    }


  return textObject
}

function generateGraph(group, x, y, width, height) {
  generateRect(group, x, y, width, height, "#EEEEEE")
}

function generateLevel(group, baseTop, baseLeft, levels, videoLength, width, height) {
  generateGraph(group, baseLeft, baseTop, width, height);
  for (var i = 0; i< levels.length - 1; i++) {
    var maxLevel = 5;
    var cellLength = 80 / 4032 * 2268 / 5;
    var yUnit = height / maxLevel;
    var startX = mmToBoardX(baseLeft + levels[i][0] * cellLength);
    var startY = mmToBoardY(baseTop + (maxLevel - levels[i][1]) * yUnit);
    var endX = mmToBoardX(baseLeft + levels[i+1][0] * cellLength);
    var endY = mmToBoardY(baseTop + (maxLevel - levels[i+1][1]) * yUnit);
    var line = group.pathItems.add();
    line.setEntirePath([[startX, startY], [endX, endY]]);
    line.strokeColor = hexToRGBColor(data.fontColor.dark);
    line.strokeWidth = 1 / 10;
  }
}

function generateHumans(group, baseTop, baseLeft, humanList, videoLength) {
  for (var i = 0; i< humanList.length; i++) {
    var cellLength = 80 / 4032 * 2268 / 5
    var startX = mmToBoardX(baseLeft + humanList[i][0] * cellLength);
    var end = (i === humanList.length - 1) ? videoLength : humanList[i+1][0]
    var endX = mmToBoardX(baseLeft + end * cellLength);

    var yUnit = 15;
    var height = humanList[i][1]===0? 0  :(humanList[i][1] - 1) * yUnit;
    var verticalLine = group.pathItems.add();
    var y = mmToBoardY(baseTop + j * yUnit - height / 2);

    if (i !== 0) {
      var verticalLineHeight = (Math.max(humanList[i-1][1], humanList[i][1]) - 1) * yUnit;
      verticalLine.setEntirePath([[startX,  mmToBoardY(baseTop - verticalLineHeight / 2)], [startX,  mmToBoardY(baseTop +  verticalLineHeight / 2)]]);
      verticalLine.strokeColor = hexToRGBColor(data.fontColor.light);
      verticalLine.strokeWidth = 1 / 10;  
    }


    for (var j = 0; j< Math.max(1, humanList[i][1]); j++) {
      var line = group.pathItems.add();
      var y = mmToBoardY(baseTop + j * yUnit - height / 2);
      line.setEntirePath([[startX, y], [endX, y]]);
      line.strokeColor = hexToRGBColor(data.fontColor.light);
      line.strokeWidth = 1 / 10;
      if (humanList[i][1] === 0) {
        line.strokeDashes = [1, 1];
        line.strokeColor = hexToRGBColor(data.fontColor.veryLight);
      }else {
        var diameter = 2
        var top = y + diameter/2;
        var left = startX - diameter/2;
        var circle = group.pathItems.ellipse(top, left, diameter, diameter);
        circle.fillColor = hexToRGBColor('#BBBBBB');
        circle.strokeWidth = 1 / 10;
      }
    }
  }
}

function generateSounds(group, baseTop, baseLeft, sounds) {
  for (var i = 0; i< sounds.length; i++) {
    // x
    var cellLength = 80 / 4032 * 2268 / 5
    var startX = baseLeft + sounds[i][0] * cellLength;

    // size
    var sizeUnit = 4;
    var diameter = sounds[i][1] * sizeUnit;

    var top = mmToBoardY(baseTop - diameter/2);
    var left = mmToBoardX(startX - diameter/2);
    var circle = group.pathItems.ellipse(top, left, mmToPt(diameter), mmToPt(diameter));
    circle.fillColor = hexToRGBColor('#BBBB00');
    circle.stroke = false;
    circle.strokeWidth = 0;
  }
}

function generateEvents(group, baseTop, baseLeft, events) {
  for (var i = 0; i< events.length; i++) {
    var cellLength = 80 / 4032 * 2268 / 5;
    var startX = baseLeft + events[i][0] * cellLength;
    var textObject = generateTextLeftTop(group, events[i][1], startX, baseTop + 10, data.fontSize.small, data.fontColor.veryLight);
    textObject.rotate(-30);
    moveText("timeline", textObject, startX, baseTop)
  }
}


deleteGroupByName("generated");
var generatedGroup = createGroupWithName("generated");

const margin = 30
const commonMargin = 5

const baseLeft = 180;
const startY = 150;

const titleHeight = 30;
const graphHeight = 90;
const framesHeight = 80;
const bandHeight = 20;
const visualHumansHeight = 50;
const consciousHumansHeight = 80;
const soundHeight = 20;
const noiseHeight = 40;
const eventHeight = 100;

const bottomMargin = 50;
var blockHeight = bottomMargin;
const elements = [titleHeight, graphHeight, framesHeight, bandHeight, visualHumansHeight, consciousHumansHeight, soundHeight, noiseHeight, eventHeight]
for (var i = 0; i< elements.length; i++) {
  blockHeight += elements[i] + commonMargin;
}

const graphY = titleHeight + commonMargin
const framesY = graphY + graphHeight + commonMargin
const bandY = framesY + framesHeight + commonMargin
const visualHumansY = bandY + bandHeight + commonMargin
const consciousHumansY = visualHumansY  + visualHumansHeight + commonMargin
const soundY = consciousHumansY + consciousHumansHeight + commonMargin
const noiseY = soundY + soundHeight + commonMargin
const eventY = noiseY +  noiseHeight + commonMargin

generateTextLeftTop(generatedGroup, "知覚したもの", margin, margin, 120, data.fontColor.dark)
for (var i = 0; i < data.patterns.length; i++) {
  var nameIndex = i + 1;
  var baseY = startY + blockHeight * i;

  generateTextLeftTop(generatedGroup, data.patterns[i].name, baseLeft, baseY, 60, data.fontColor.dark)
  var framesImage = moveImage("timeline", "frames-" + nameIndex, baseLeft, baseY + framesY);
  var colorBandImage = moveImage("timeline", "color-band-" + nameIndex, baseLeft, baseY + bandY);
  generateLevel(generatedGroup, baseY + graphY, baseLeft, data.patterns[i].levels, data.patterns[i].videoLength, ptToMmt(framesImage.width), graphHeight)
  generateHumans(generatedGroup, baseY + visualHumansY + visualHumansHeight / 2, baseLeft, data.patterns[i].visualHumans, data.patterns[i].videoLength)
  generateHumans(generatedGroup, baseY + consciousHumansY + consciousHumansHeight / 2, baseLeft, data.patterns[i].consciousHumans, data.patterns[i].videoLength)
  generateLevel(generatedGroup, baseY + noiseY - 40, baseLeft, data.patterns[i].noise, data.patterns[i].videoLength, ptToMmt(framesImage.width), 80)
  generateSounds(generatedGroup, baseY + soundY + soundHeight / 2, baseLeft, data.patterns[i].sounds)
  generateEvents(generatedGroup, baseY + eventY, baseLeft, data.patterns[i].events)

  generateTextRightCenter(generatedGroup, "ひと気の強さ", baseLeft - commonMargin * 2, baseY + graphY + graphHeight / 2, 60, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "明るさ", baseLeft - commonMargin * 2, baseY + bandY + bandHeight / 2, 40, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "視界の中の人数", baseLeft - commonMargin * 2, baseY + visualHumansY + visualHumansHeight / 2, 40, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "意識の中の人数", baseLeft - commonMargin * 2, baseY + consciousHumansY + consciousHumansHeight / 2, 40, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "人が発する音", baseLeft - commonMargin * 2, baseY + soundY + soundHeight / 2, 40, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "ノイズの大きさ", baseLeft - commonMargin * 2, baseY + noiseY + noiseHeight / 2, 40, data.fontColor.light)
  generateTextRightCenter(generatedGroup, "発生した事象", baseLeft - commonMargin * 2, baseY + eventY + 30, 40, data.fontColor.light)
}
