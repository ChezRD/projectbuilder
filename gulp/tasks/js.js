var gulp = require('gulp'),
	browserify = require('browserify'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require("gulp-rename"),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	browserifyConfig = gulpConfig.browserifyConfig,
	jsPath = gulpConfig.jsPath,
	jsPluginsList = gulpConfig.jsPluginsList;


// less compile to css
module.exports = function (buildOptions) {
	gulp.task('js:app', function() {
		return browserify(srcPath + '/js/app.js', browserifyConfig)
			.bundle()
			.on('error', function (error) {
                gutil.log(gutil.colors.red('Browserify error\r\n' + error))
                this.emit('end');
            })
            .pipe(source('app.js'))
            .pipe(buffer())
			.pipe(gulpif( buildOptions.minify, uglify() ))
			.pipe(gulpif( buildOptions.minify, rename({suffix: '.min'}) ))
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath + jsPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + jsPath) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Js app.js processed'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
	gulp.task('js:iesupport', function() {
		return gulp.src(srcPath + '/js/iesupport/*.js')
			.pipe(concat('iesupport.js'))
			.pipe(gulpif( buildOptions.minify, uglify() ))
			.pipe(gulpif( buildOptions.minify, rename({suffix: '.min'}) ))
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath + jsPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + jsPath) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Js iesupport.js concated'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}