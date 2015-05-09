// config
var data = require('../package.json');

var srcPath = './app';

var gulpConfig = {
	projectName: data['name'],
	/**
	 * file path
	 * @type {string}
	 */
	srcPath: srcPath,
	devPath: './dev',
	buildPath: './build',

	/**
	 * jade path, path to templates
	 * @type {string}
	 */
	jadePath: '/template',

	/**
	 * jade compiler config, support all params jade API (http://jade-lang.com/api/)
	 * @type {object}
	 */
	jadeCompiler: {
		/**
		 * jade API
		 * @type {bolean | string}
		 */
		pretty: '	'
	},

	/**
	 * html minify config, support all params (https://www.npmjs.com/package/gulp-minify-html)
	 * @type {object}
	 */
	htmlMinify: {
		empty: true,
		comments: false,
		conditionals: true,
		spare: true,
		quotes: true,
		loose: false
	},

	/**
	 * less path, path to your less files
	 * @type {string}
	 */
	lessPath: '/less',

	/**
	 * css path, path dest compiled less files
	 * @type {string}
	 */
	cssPath: '/css',

	/**
	 * autoprefixer config (https://www.npmjs.com/package/gulp-autoprefixer)
	 * @type {array}
	 */
	autoprefixerConfig: ['last 50 versions'],

	/**
	 * js path, path dest concat js files
	 * @type {string}
	 */
	jsPath: '/js',

	/**
	 * browserify config
	 * @type {object}
	 */
	browserifyConfig: {
		noparse: ['jquery', 'underscore', 'velocity', 'mithril']
	},

	/**
	 * img path, path dest mified image files
	 * @type {string}
	 */
	imgPath: '/img',

	/**
	 * fonts path, path dest fonts files
	 * @type {string}
	 */
	fontsPath: '/fonts',

	/**
	 * misc path, path dest misc files
	 * @type {string}
	 */
	miscPath: '/misc',

	/**
	 * config for browser-sync module, all option (http://www.browsersync.io/docs/options/)
	 * @type {object}
	 */

	browserSyncConfig: {

		server: {
			/**
	         * dir to serve files from
	         * @type {string}
	         */
            baseDir: './dev',
            /**
	         * choose the page to open in browser at first opening
	         * @type {string}
	         */
			index: "index.html",
			/**
	         * port of local server for browser-sync
	         * @type {number}
	         */
			port: 8000,
			https: false
        },
		ghostMode: {
			clicks: false,
			location: false,
			forms: false,
			scroll: false
		},
		/**
         * switch to false, if you don't need to open browser in dev mode
         * @type {boolean | string} (local/external/ui/tunnel)
         */
		open: false,
		/**
         * if you don't need to see notification in browser, switch to false
         * @type {boolean}
         */
		notify: true,
		/**
         * choose browser to open
         * @type {string | array}
         * Example: ['google chrome', 'firefox']
         * avalible: safari, internet explorer, google chrome, firefox, opera
         */
        browser: 'google chrome',
        logPrefix: "BrowserSync"
	}
}

module.exports = gulpConfig;