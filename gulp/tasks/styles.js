var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    simpleVar = require('postcss-simple-vars'),
    nestedCss = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, simpleVar, nestedCss, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});
