var gulp = require('gulp'),
    gutil = require('gulp-util'),
    zip = require('gulp-vinyl-zip'),
    gulpConfig = require('../config');

var srcPath = gulpConfig.srcPath,
    devPath = gulpConfig.devPath,
    buildPath = gulpConfig.buildPath;


/**
 * create zip archive of build
 * @param {object} buildOptions
 */
module.exports = function (buildOptions) {
    gulp.task('zip', function (cb) {
            return gulp.src(buildPath + '/' + buildOptions.buildVersion + '/**/*.*', {base: '.'})
                .pipe(zip.dest(buildPath + '/' + buildOptions.buildVersion + '/' + buildOptions.buildVersion + '.zip'))
                .on('error', function (error) {
                    gutil.log(gutil.colors.red('Archiv created error\r\n' + error))
                    this.emit('end');
                })
                .on('end', function () {
                    gutil.log(gutil.colors.green('Archiv created'))
                })
        

        if (buildOptions.useArchiver) {
            
        } else {
            gutil.log(gutil.colors.yellow('Archiver is not used'));
            cb(null);
        }
    });

};