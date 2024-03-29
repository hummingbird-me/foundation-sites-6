var gulp = require('gulp');
var concat = require('gulp-concat');

var FOUNDATION = [
  'js/foundation.core.js',
  'js/foundation.util.*.js',
  'js/*.js'
];

var DEPS = [
  'node_modules/jquery/dist/jquery.js'
];

var DOCS = [
  'node_modules/zeroclipboard/dist/ZeroClipboard.js',
  'bower_components/typeahead.js/dist/typeahead.bundle.js',
  'docs/assets/js/docs.*.js',
  'docs/assets/js/docs.js'
];

// Compiles JavaScript into a single file
gulp.task('javascript', ['javascript:foundation', 'javascript:deps', 'javascript:docs']);

gulp.task('javascript:foundation', function() {
  return gulp.src(FOUNDATION)
    .pipe(concat('foundation.js'))
    .pipe(gulp.dest('_build/assets/js'));
});

gulp.task('javascript:deps', function() {
  return gulp.src(DEPS)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('_build/assets/js'));
});

gulp.task('javascript:docs', function() {
  return gulp.src(DOCS)
    .pipe(concat('docs.js'))
    .pipe(gulp.dest('_build/assets/js'));
});
