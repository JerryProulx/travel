var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    mixins = require('postcss-mixins'),
    autoprefixer = require('autoprefixer'),
    simpleVar = require('postcss-simple-vars'),
    nestedCss = require('postcss-nested'),
    cssImport = require('postcss-import');

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, simpleVar, nestedCss, autoprefixer]))
    .on('error', function(error){
      console.log(error.message);
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
