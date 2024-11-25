function listFonts() {
    var fonts = app.textFonts;
    var fontList = "";
    for (var i = 0; i < fonts.length; i++) {
        if (fonts[i].name.indexOf("otf") !== -1) fontList += fonts[i].name + "\n";
    }
    alert("Available Fonts:\n" + fontList);
}
listFonts();

