var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Other watchers
});