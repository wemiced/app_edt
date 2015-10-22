var gulp = require('gulp');
var phonegapBuild = require('gulp-phonegap-build');
var compass = require('gulp-compass');
  minifyCSS = require('gulp-minify-css');



gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('compass', function() {
  gulp.src('./src/*.scss')
    .pipe(compass({
      css: 'www/css',
      sass: 'www/sass',
      image: 'www/images',
      require: ['susy', 'modular-scale']
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/temp'));
});
// {dot: true} here to inlude .pgbomit file in zip
gulp.task('phonegap-build', function () {
    gulp.src('dist/**/*', {dot: true})
        .pipe(phonegapBuild({
          "isRepository": "true",
          "appId": "9876",
          "user": {
            "token": "ABCD123409876XYZ"
          }
        }));
});


gulp.task('default', ['compass']);
