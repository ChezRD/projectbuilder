var gulp = require('gulp'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    rename = require("gulp-rename"),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	lessPath = gulpConfig.lessPath,
	cssPath = gulpConfig.cssPath,
	autoprefixerConfig = gulpConfig.autoprefixerConfig;

// less compile to css
module.exports = function (buildOptions) {
	gulp.task('less', function (cb) {
	    return gulp.src(srcPath + lessPath + '/[^_]*.less')
	    	.pipe(less())
	    	.on('error', function (error) {
                gutil.log(gutil.colors.red('Less compiled error\r\n' + error))
                this.emit('end');
            })
			.pipe(autoprefixer(autoprefixerConfig))
			.pipe(gulpif( !buildOptions.minify, csscomb('./gulp/plugins-config/csscomb.json') )) /* FIXED */
			.pipe(gulpif( buildOptions.minify, csso() ))
			.pipe(gulpif( buildOptions.minify, rename({suffix: '.min'}) ))
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath + cssPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + cssPath) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Less compiled'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}