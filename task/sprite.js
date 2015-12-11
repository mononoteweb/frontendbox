var gulp = require('gulp');
var _ = require('lodash');
var path = require('path');
var ms = require('merge-stream');
var fs = require('fs');
var config = require('./config');
var $ = require('./plugins');

gulp.task('sprite', function() {
	var op = _.extend({}, config.sprite.options);
	var template = op.cssTemplate;
	// if (typepf template === 'string' && path.extname(template) === '') {
	// 	var file = fs.readFileSync(process.cwd() + '/' + template);
	// 	op.cssTemplate = function(data) {
	// 		return 
	// 	}
	// }
	return gulp.src(config.path.sprite.app)
		.pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
		.piep($.foreach(function(stream, file) {
			if (file.isDirectory()) {
				var paths = file.path.split(path.sep);
				var name = paths.pop();
				if (!name) return stream;
				var isRetina = name.search(/-2x$/) !== -1;
				var options = _.merge({
					cssSpritesheetName: name,
					imgName: name + config.sprite.cssExtension,
					imgPath: config.path.sprite.imagePath + '/' + name + config.sprite.imgExtension,
					cssOpts: {
						scale: isRetina ? .5 : 1,
						prefix: name,
						functions: true
					}
				}, op);
				var strm = gulp.src(file.path + '' + config.sprite.extension)
					.pipe($.plumber())
					.pipe($.spritesmith(options));
				strm.img.pipe(gulp.dest(config.path.sprite.imageDest));
				strm.css.pipe(gulp.dest(config.path.sprite.cssDest));
				return ms(stream, strm);
			}
			return stream;
		}));
});