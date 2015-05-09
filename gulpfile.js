// using modules
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	del = require('del'),
	chokidar = require('chokidar'),
	runSequence = require('run-sequence').use(gulp);

// configs
var gulpConfig = require('./gulp/config'),
	buildOptions = {};

// generate build version
buildOptions.buildVersion = require('./gulp/helpers/set-build-version')();

// buildOptions
buildOptions.minify = gutil.env.min || false;
buildOptions.useLiveReload = gutil.env.lr || false;
buildOptions.useTunnelToWeb = gutil.env.tunnel || false;
buildOptions.useUniqProjectName = gutil.env.uniq || false;
buildOptions.useArchiver = gutil.env.zip || false;

// load modules
require('./gulp/tasks/clean')(buildOptions);
require('./gulp/tasks/jade')(buildOptions);
require('./gulp/tasks/less')(buildOptions);
require('./gulp/tasks/js')(buildOptions);
require('./gulp/tasks/img')(buildOptions);
require('./gulp/tasks/fonts')(buildOptions);
require('./gulp/tasks/misc')(buildOptions);
require('./gulp/tasks/browsersync')(buildOptions);
require('./gulp/tasks/zip')(buildOptions);



// Default task. Just start dev task
gulp.task('default', function () {
    gulp.start('dev');
});

// Build dev-version with watchers and livereloader.
// Also could tunnel your markup to web, if you use flag --tunnel
gulp.task('dev', function () {
	mode = 'dev';

    runSequence('clean', ['jade', 'less', 'js:app', 'js:iesupport', 'img', 'fonts', 'misc'], 'browsersync');

    // watchers module
	require('./gulp/watchers/jade')(buildOptions);
    require('./gulp/watchers/less')(buildOptions);
    require('./gulp/watchers/js')(buildOptions);
    require('./gulp/watchers/img')(buildOptions);
    require('./gulp/watchers/fonts')(buildOptions);
    require('./gulp/watchers/misc')(buildOptions);

});


gulp.task('build', function () {
	mode = 'build';

    runSequence(['jade', 'less', 'js:app', 'js:iesupport', 'img', 'fonts', 'misc']); // FIX 'zip'
});