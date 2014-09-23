var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');

gulp.task('scss', function() {
  return gulp.src('scss/grid.scss')
    .pipe(sass())
    .pipe(rename('flexbox.css'))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('default', ['scss', 'watch']);
