var selection = app.activeDocument.selection;

if (selection.length > 0) {
    var targetSize = 50; // 目標のサイズ（px）

    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        var bounds = item.geometricBounds;
        var width = bounds[2] - bounds[0];
        var height = bounds[1] - bounds[3];
        var scaleFactor = mmToPoints(targetSize / Math.max(width, height));

        item.resize(scaleFactor * 100, scaleFactor * 100); // サイズ変更
    }
} else {
    alert("オブジェクトが選択されていません。");
}

function mmToPoints(mm) {
  return mm * 2.83465;
}