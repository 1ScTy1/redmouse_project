import path from "../config/path.js";

const files = () => {
  return app.gulp
    .src(path.files.src)
    .pipe(newer(path.files.dest))
    .pipe(app.gulp.dest(path.files.dest));
};

export default files
