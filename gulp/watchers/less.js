var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	lessPath = gulpConfig.lessPath;


/**
 * watcher less
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + lessPath + '/**/*.less', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        gulp.start('less');
    });
};