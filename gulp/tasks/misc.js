var gulp = require('gulp'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	miscPath = gulpConfig.miscPath;

// misc copy
module.exports = function (buildOptions) {
	gulp.task('misc', function() {
	    return gulp.src(srcPath + miscPath + '/**/*.*')
	    	.on('error', function (error) {
                gutil.log(gutil.colors.red('Misc copy error\r\n' + error))
                this.emit('end');
            })
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Misc copy'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}