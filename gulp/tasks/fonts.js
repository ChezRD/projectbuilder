var gulp = require('gulp'),
	gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	buildPath = gulpConfig.buildPath,
	fontsPath = gulpConfig.fontsPath;

// fonts copy
module.exports = function (buildOptions) {
	gulp.task('fonts', function() {
	    return gulp.src(srcPath + fontsPath + '/**/*.*')
	    	.on('error', function (error) {
                gutil.log(gutil.colors.red('Fonts copy error\r\n' + error))
                this.emit('end');
            })
			.pipe(gulpif( mode == 'dev', gulp.dest(devPath + '/' + fontsPath) ))
	    	.pipe(gulpif( mode == 'build', gulp.dest(buildPath + '/' + buildOptions.buildVersion + '/' + fontsPath) ))
			.on('end', function () {
	            gutil.log(gutil.colors.green('Fonts copy'))
			})
			.pipe(gulpif( buildOptions.useLiveReload, browserSync.reload({stream:true}) ));
	});
}