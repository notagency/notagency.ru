const fs = require('fs');
const path = require('path');

const iconsDir = 'i/icons/';
const iconsDirFull = path.join(__dirname, iconsDir);

const fileNames = fs.readdirSync(iconsDirFull);
const files = [];

fileNames.forEach(fileName => files.push(iconsDir + fileName));

module.exports = {
    files,
    fileName: '[fontname][ext]',
    fontName: 'icons',
    classPrefix: 'icons_',
    baseClass: 'icons',
    fixedWidth: true,
    centerHorizontally: true,
    centerVertically: true
};
