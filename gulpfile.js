var gulp = require('gulp'),
 sass = require('gulp-sass');


 gulp.task('scss', function () {
  gulp.src('./scss/src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/src/*.scss', ['scss']);
});

gulp.task('default', ['sass:watch']);
