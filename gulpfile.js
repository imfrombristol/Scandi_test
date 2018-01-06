var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("./src/**/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }))
});

gulp.task('watch', ['sass'], function() {

  gulp.watch("./src/app/**/*.scss", ["sass"] );
});

gulp.task('default', ['watch']);
