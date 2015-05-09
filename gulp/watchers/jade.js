var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	jadePath = gulpConfig.jadePath;


/**
 * watcher jade
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + jadePath + '/*.jade', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        gulp.start('jade');
    });
};