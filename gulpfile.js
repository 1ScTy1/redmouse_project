import gulp from "gulp";
const {watch, series, parallel, task} = gulp;
import brSync from "browser-sync";
const browserSync = brSync.create();

import path from './gulp/config/path.js';

global.app = {
  gulp,
  browserSync,
};

// tasks here
import clean from './gulp/tasks/clean.js';
import sass from "./gulp/tasks/sass.js";
import js from "./gulp/tasks/js.js";
import img from "./gulp/tasks/img.js";
import fonts from "./gulp/tasks/fonts.js";
import sprite from "./gulp/tasks/sprite.js";
import html from "./gulp/tasks/html.js";

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const watcher = (cb) => {
  watch(path.html.watch, html);
  watch(path.sass.watch, sass);
  watch(path.js.watch, js);
  watch(path.img.watch, img);
  watch(path.fonts.watch, fonts);
  watch(path.sprite.watch, sprite);
  cb()
}



const build = series(
  clean,
  parallel(sass, js, img, fonts, sprite, html)
)

const dev = series(build, parallel(watcher, server));

task('img', img);
task("sass", sass);
task("fonts", fonts);
task("sprite", sprite);
task("js", js);

task("default", dev);
task("build", build);
