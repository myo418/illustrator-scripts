function checkSelectedTextFont() {
    var doc = app.activeDocument;

    // 選択されたオブジェクトを取得
    var selection = doc.selection;

    if (selection.length === 0) {
        alert("何も選択されていません。");
        return;
    }

    // 選択されたオブジェクトを確認
    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.typename === "TextFrame") {
            // テキストのフォント情報を取得
            var fontName = item.textRange.characterAttributes.textFont.name;
            alert("選択されたテキストのフォント: " + fontName);
        } else {
            alert("選択されたオブジェクトはテキストではありません。");
        }
    }
}

checkSelectedTextFont();