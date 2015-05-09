var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync'),
    gulpConfig = require('../config');

var projectName = gulpConfig.projectName,
    browserSyncConfig = gulpConfig.browserSyncConfig;

// serve files and connect browsers
module.exports = function (buildOptions) {

    if (buildOptions.useTunnelToWeb) {
        if (buildOptions.useUniqProjectName) {

            randomNumber(5079525600, 7159757893)

            function randomNumber (m, n)
            {
              m = parseInt(m);
              n = parseInt(n);

              iniqName = Math.floor( Math.random() * (n - m + 1) ) + m;
              return iniqName;
            }

            browserSyncConfig.tunnel = iniqName;
        } else {

            browserSyncConfig.tunnel = projectName;
        }

        browserSyncConfig.online = true;
    } else {
        browserSyncConfig.tunnel = false;
        browserSyncConfig.online = false;
    }

    return gulp.task('browsersync', function (cb) {
        browserSync(browserSyncConfig);
    });
}