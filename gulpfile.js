const gulp = require('gulp');
const replace = require('gulp-replace');

function RemoveCode(name) {
  const reg = new RegExp(`<!--CONFIG:${name}.*ENDCONFIG:${name}-->`, 's')
  return gulp.src('**/*.html')
    .pipe(replace(reg, ''))
    .pipe(gulp.dest('./'))
}

function RemoveNoMeters() {
  return RemoveCode('NoMeters')
}

exports.test = RemoveNoMeters

