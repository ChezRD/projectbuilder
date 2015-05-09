var gulp = require('gulp'),
	gutil = require('gulp-util'),
    del = require('del'),
    gulpConfig = require('../config');

var pathsToDel = gulpConfig.devPath;


// clean dev directory
module.exports = function (buildOptions) {
	return gulp.task('clean', function (cb) {
        del(pathsToDel, cb);
        gutil.log( gutil.colors.green('Files deleted') );
    });
}