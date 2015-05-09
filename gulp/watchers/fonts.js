var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	fontsPath = gulpConfig.fontsPath;


/**
 * watcher fonts
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + fontsPath + '/**/*.*', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
    	del(devPath + fontsPath + '/**/*.*');
        gutil.log( gutil.colors.green('Fonts clean') );
        gulp.start('fonts');
    });
};