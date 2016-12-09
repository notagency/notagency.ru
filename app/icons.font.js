var fs = require('fs');
var path = require('path');

var iconsDir = 'i/icons/';
var iconsDirFull = path.join(__dirname, iconsDir);

var fileNames = fs.readdirSync(iconsDirFull);
var files = [];
for (i in fileNames) {
    files.push(iconsDir + fileNames[i]);
}

module.exports = {
    "files": files,
    "fileName": "[fontname][ext]",
    "fontName": "icons",
    "classPrefix": "icons_",
    "baseClass": "icons",
    "fixedWidth": true,
    "centerHorizontally": true,
    "centerVertically": true
};