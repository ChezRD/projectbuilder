var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	miscPath = gulpConfig.miscPath;


/**
 * watcher misc
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + miscPath + '/**/*.*', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
    	del(devPath + miscPath + '/**/*.*');
        gutil.log( gutil.colors.green('Misc clean') );
        gulp.start('misc');
    });
};