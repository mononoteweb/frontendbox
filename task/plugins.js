var loader = require('gulp-load-plugins');
var browser = require('browser-sync');

var $ = loader({
	pattern: ['gulp-*', 'gulp.*'],
	replaceString: /\bgulp[\-.]/
});
$.browser = browser;
module.exports = $;