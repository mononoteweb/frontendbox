module.exports = {
	dist: 'docs/%type%',
	defaultPath: 'pc',
	autoTest: true,
	style {
		optimisation: 'none',
		cssnano: {

		},
		autoprefixer: {
			browser: ['last 3 version', 'ie >= 8', 'Android 4.0']
		}
	},
	htmlhint: '.htmlhintrc',
	sprite: {
		extension: '.png',
		imgExtension: '.png',
		cssExtension: '.scss',
		options: {
			cssTemplate: '',
			algoithm: '',
			padding: 5,
			cssOpts: {
				functions: false
			}
		}
	},
	server: {
		ghostMode: {
			clicks: false,
			location: false,
			forms: false,
			scroll: false
		}
	},
	styleguide: {
		title: 'スタイルガイドタイトル',
		server: false,
		rootPath: 'docs/_template/styleguide',
		overviewPath: 'README.md',
		port: 5001,
		basicAuth: {
			username: 'username',
			password: 'password'
		}
	},
	path: {
		html: {
			app: 'docs/%type%/**/*.html'
		},
		style: {
			app: 'app/%type%/sass/**/*.scss',
			dest: 'docs/common/%type%/css'
		},
		sprite: {
			app: 'app/%type%/sprites/*',
			watch: 'app/%type%/sprites/**/*',
			imagePath: '../images',
			imageDest: 'app/%type%/images',
			cssDest: 'app/%type%/sass/sprites'
		},
		js: {
			app: ['app/%type%/js/*.js', '!/app/js/_*.js'],
			dest: 'docs/common/%type%/js'
		}
	}
}