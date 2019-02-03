var gulp = require('gulp'),
  prefixer = require('gulp-autoprefixer'),
  notify = require('gulp-notify'),
  less = require('gulp-less'),
  webserver = require('gulp-webserver');



gulp.task('less', function(){
  gulp.src('./app/less/*.less')
    .pipe(less())
    .pipe(prefixer('last 15 versions', '>1%', 'ie 9'))
    .pipe(gulp.dest('./app/css'))
    .pipe(notify("Done!"));

});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true,
            fallback: 'index.html'
        }));

    gulp.watch('./app/less/*/*.less', ['less'])
});

gulp.task('default', ['webserver']);

