var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var debug = require('gulp-debug');
var server = require('gulp-server-livereload');
var react = require('gulp-react');

gulp.task('index', function () {
    var bowerFiles = mainBowerFiles({
        "overrides": {
          "bootstrap": {
            "main": [
              "dist/css/bootstrap.css",
              "dist/js/bootstrap.js"
            ],
          }
        }
    });

    return gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('precompile-jsx', function () {
    return gulp.src('src/js/**/*.jsx')
        .pipe(react({harmony: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('serve', ['index', 'precompile-jsx'], function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      defaultFile: "index.html",
      open: true
    }));
});
