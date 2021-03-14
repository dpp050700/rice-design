const { src, dest, series } = require('gulp');
const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
// const md5File = require('md5-file');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const config = require('../src/config');


const fontDir = path.join(__dirname, `${config.rootPath}/styles/fonts`);
const svgDir = path.join(__dirname, '../assets');
const template = path.join(__dirname, './template.tpl');
const formats = ['ttf', 'woff', 'woff2'];

const fontName = `${config.name}`;

const prevFonts = glob.sync(formats.map(ext => path.join(fontDir, `*.${ext}`)));
prevFonts.forEach(_font => fs.removeSync(_font));

function font() {
  return src([`${svgDir}/*.svg`])
    .pipe(
      iconfontCss({
        fontName: config.name,
        path: template,
        targetPath: `${config.rootPath}/styles/icon.scss`,
        normalize: true,
        firstGlyph: 0xf000,
        cssClass: fontName,
      }),
    )
    .pipe(
      iconfont({
        fontName,
        formats,
      }),
    )
    .pipe(dest(fontDir));
}


exports.default = series(font);
