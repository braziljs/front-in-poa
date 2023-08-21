var gulp = require('gulp');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');


gulp.task('styles', function () {
  return gulp.src('./styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('./main.css'))
    .pipe(gulp.dest('./styles/'));
});

/*
 * Default task and server/watch
*/

gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      directoryListing: true,
      livereload: false
    }));
});

gulp.task('watch', function(){
  gulp.watch('./styles/**/*.scss', ['styles']);
});

gulp.task('default', [
  'styles',

  'webserver',
  'watch'
]);
