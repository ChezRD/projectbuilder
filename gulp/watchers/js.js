var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	gulpConfig = require('../config');

var	srcPath = gulpConfig.srcPath,
	devPath = gulpConfig.devPath,
	jsPath = gulpConfig.jsPath;


/**
 * watcher js
 * @param  {object} flags
 */
module.exports = function (flags) {
    return chokidar.watch(srcPath + jsPath + '/**/*.js', {
        ignored: '',
        persistent: true,
        ignoreInitial: true
    }).on('all', function (event, path) {
        gulp.start('js:app');
    });
};