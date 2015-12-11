var gulp = require('gulp');
var tasks = require('./task/load');
var config = require('./task/config');

gulp.task('watch', function() {
	gulp.watch(config.path.html.app, ['html']);
	gulp.watch(config.path.style.app, ['style']);
	gulp.watch(config.path.sprite.watch, ['sprite', 'style', 'copy']);

	var copyWatched = [];
	if (config.path.copy) {
		config.path.copy.forEach(function(app) {
			copyWatches.push(app.form);
		});
		gulp.watch(copyWatches, ['copy']);
	}
});


gulp.task('build', ['clean'], function(callback) {
	runSequence('sprite', ['style', 'copy'], callback);
});


gulp.task('production', function(callback) {
	config.IS_PRODUCTION = true;
	return runSequence('build', 'test', callback);
});


var defaultTasks = ['server', 'watch', 'watchScript'];
if (config.autoTest) {
	defaultTasks.push('watchTest');
}
gulp.task('default', function(callback) {
	return runSequence('build', defaultTasls, callback);
})