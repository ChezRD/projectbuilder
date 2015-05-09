var gulp = require('gulp'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	imgPath = gulpConfig.imgPath;

// copy and minify image
module.exports = function (buildOptions) {
	gulp.task('img', function() {
	    return gulp.src(srcPath + imgPath + '/**/*.*')
	    	.pipe(gulpif( mode == 'dev', changed(devPath + imgPath + '/') ))
	    	.pipe(gulpif( mode == 'build', imagemin() ))
	    	.on('error', function (error) {
                gutil.log(gutil.colors.red('Image minify error\r\n' + error))
                this.emit('end');
            })
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath + imgPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + imgPath) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Image copy and minify'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}