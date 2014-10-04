var gulp = require('gulp');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var plumber = require('gulp-plumber');
var webserver = require('gulp-webserver');


gulp.task('styles', function () {
  gulp.src('./2014/styles/main.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('./main.css'))
    .pipe(gulp.dest('./2014/styles/'));
});

/*
 * Default task and server/watch
*/

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      directoryListing: true,
      livereload: true
    }));
});

gulp.task('watch', function(){
  gulp.watch('./2014/styles/**/*.scss', ['styles']);
});

gulp.task('default', [
  'styles',

  'webserver',
  'watch'
]);
