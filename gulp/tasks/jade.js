var gulp = require('gulp'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
	changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    minifyHtml = require('gulp-minify-html'),
    browserSync = require('browser-sync'),
    replace = require('gulp-replace-task'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	jadePath = gulpConfig.jadePath,
	jadeCompiler = gulpConfig.jadeCompiler,
	htmlMinify = gulpConfig.htmlMinify;


// jade compile to html
module.exports = function (buildOptions) {
	gulp.task('jade', function (cd) {
	    return gulp.src(srcPath + jadePath + '/[^_]*.jade')
	    	.pipe(gulpif( mode == 'dev', changed(devPath + jadePath + '/*.html') ))
	    	.pipe(jade(jadeCompiler))
	    	.on('error', function (error) {
                gutil.log(gutil.colors.red('Jade compiled error\r\n' + error))
                this.emit('end');
            })
	    	.pipe(gulpif( buildOptions.minify, minifyHtml(htmlMinify) ))
	    	.pipe(gulpif( mode == 'dev', gulp.dest(devPath + jadePath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + jadePath) ))
	    	.on('end', function () {
	            gutil.log(gutil.colors.green('Jade compiled'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}