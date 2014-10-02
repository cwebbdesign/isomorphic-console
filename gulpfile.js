// Declare dependencies
// -----------------------------------------------
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var jsValidate = require('gulp-jsvalidate');
var esformatter = require('gulp-esformatter');
var mocha = require('gulp-mocha');


// Configuration
// ----------------------------------------------
var config = {
  paths: {
    assets: {
      js: ['./**/*.js', '!./node_modules/**/*.js']
    },
    dist: {},
    test: {
      js: './test/**/*.js'
    }
  }
};


// Tasks
// -----------------------------------------------

// JS Hint
gulp.task('lint', function() {
  return gulp.src(config.paths.assets.js.concat('!' + config.paths.test.js))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// JS Validate
gulp.task('validate', function() {
  return gulp.src(config.paths.assets.js)
    .pipe(jsValidate());
});

// JS Formatting
gulp.task('format', function() {
  return gulp.src(config.paths.assets.js)
    .pipe(esformatter()) // use .esformatter
    .pipe(gulp.dest('')); // replace the existing file
});

// Tests
gulp.task('test', function() {
  return gulp.src(config.paths.test.js, {
    read: false
  })
    .pipe(mocha({
      reporter: 'mocha-unfunk-reporter'
    }));
});


// Browserify

// with jquery/lodash
// without jquery

// Task flows.
gulp.task('default', function(cb) {
  runSequence('format', 'validate', 'lint', 'test', cb);
});