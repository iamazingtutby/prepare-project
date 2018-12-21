var gulp = require('gulp'),
  prefixer = require('gulp-autoprefixer'),
  notify = require('gulp-notify'),
  less = require('gulp-less');



gulp.task('default', function(){
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(prefixer('last 15 versions', '>1%', 'ie 9'))
    .pipe(gulp.dest('./css'))
    .pipe(notify("Done!"));

});

gulp.task('watch', function(){
  gulp.watch('less/*/*.less', ['default'])
});



