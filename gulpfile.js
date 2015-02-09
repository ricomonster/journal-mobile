var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifycss       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    uglify          = require('gulp-uglify'),
    concat          = require('gulp-concat'),
    shell           = require('gulp-shell'),
    plumber         = require('gulp-plumber');

// copy files from bower
gulp.task('build-assets', function() {
  // javascripts
  gulp.src([
    // angular
    'bower_components/angular/angular.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular/angular.min.js.map',
    // angular animate
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-animate/angular-animate.min.js.map',
    // angular sanitize
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-sanitize/angular-sanitize.min.js',
    'bower_components/angular-sanitize/angular-sanitize.min.js.map',
    // angular router
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
    // ionic
    'bower_components/ionic/js/ionic.js',
    'bower_components/ionic/js/ionic.min.js',
    'bower_components/ionic/js/ionic-angular.js',
    'bower_components/ionic/js/ionic-angular.min.js'
  ]).pipe(gulp.dest('www/vendor/javascript'));

  // stylesheets
  gulp.src([
    // ionic
    'bower_components/ionic/css/ionic.css',
    'bower_components/ionic/css/ionic.min.css'
  ]).pipe(gulp.dest('www/vendor/stylesheets'));

  // fonts
  gulp.src([
    // ionic
    'bower_components/ionic/fonts/*'
  ]).pipe(gulp.dest('www/vendor/fonts'));
});

// angular app
gulp.task('angular-app', function() {
    return gulp.src('src/application/app.js')
        .pipe(uglify())
        .gulp.dest('www/javascript');
});
