var gulp = require('gulp');
var _ = require('lodash');
var rewrite = require('connect-modrewrite');
var config = require('./config');
var $ = require('./plugins');

gulp.task('server', function() {
	var options = _.merge(config.server, {
		server: {
			baseDire: config.dist,
			directory: false,
			middleware: [
				rewrite([
					'^[^\\.]*$ /index.html [L]'
				])
			]
		},
		notify: false
	});

	gulp.task('reload', function() {
		$.browser.reload();
	})
})