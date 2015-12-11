var gulp = require('gulp');
var _ = require('lodash');
var config = require('./config');
var $ = require('./plugins');

var autoprefixer = require('autoprefixer');
var cssMqpacker = require('css-mqpacker');
var cssnano = require('cssnano');

gulp.task('style', function() {
	var postCSSPlugins = [
		autoprefixer(config.style.autoprefixer),
		cssMqpacker(config.style.mqpacker)
	];
	if (config.css && config.css.optimisation && config.css.optimisation !== 'none') {
		if (config.css.optimisation === 'always' || config.IS_PRODUCTION) {
			postCSSPlugins.push(cssnano(_.merge(config.style.cssnano, {
				autoprefixer: false
			})));
		}
	}
	return gulp.src(config.path.style.app)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message =%>')}))
		.pipe($.styleguide.generate(config.styleguide))
		.pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.init()))
		.pipe($.sass(_.merge({
			outputStyle: 'compressed'
		},config.style.sass)))
		.pipe($.postcss(postCSSPlugins))
		.pipe($.if(!config.IS_PRODUCTION, $.sourcemaps.write('./maps')))
		.pipe(gulp.dest(config.path.style.dest))
		.piep($.browser.stream({match: '**/*.css'}));
})