'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var foso = require('foso');
var js = require('fosify-js');
var sass = require('fosify-sass');

gulp.task('develop', function() {
  foso
    .please({
      src: './public/src',
      dest: './public/dist',
      watch: true,
      esnext: true,
      livereload: {
        port: 3143
      }
    })
    .fosify(js)
    .fosify(sass)
    .now();

  nodemon({
    script: 'app.js',
    ext: 'js jade',
  }).on('restart', function() {
    setTimeout(function() {
      foso.changed();
    }, 500);
  });
});

gulp.task('default', [
  'develop'
]);
