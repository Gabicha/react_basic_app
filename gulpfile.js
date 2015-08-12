var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');
var debug = require('gulp-debug');
var server = require('gulp-server-livereload');


gulp.task('index', function () {
    var bowerFiles = mainBowerFiles();
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(bowerFiles, {read: false}), {name: 'bower', relative: true}))
        .pipe(gulp.dest('./'));
});


gulp.task('serve', function() {
  gulp.src('.')
    .pipe(server({
      livereload: true,
      defaultFile: "index.html",
      open: true
    }));
});
