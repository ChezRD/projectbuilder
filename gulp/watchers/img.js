var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	imgPath = gulpConfig.imgPath;


/**
 * watcher image
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + imgPath + '/**/*.*', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
    	del([devPath + imgPath + '/**/*.*'], function (err, deletedFiles) {
			gutil.log( gutil.colors.green('Image clean') );
		});
        gulp.start('img');
    });
};