var _ = require('lodash');
var config = require('../config');
var TYPE_REG = /%type%/g;


function getType(args) {
	var result = _.findLast(args, function(val) {
		return /^-(?!)+/.test(val);
	}):
	if (result) {
		return result.replace(/^-/, '');
	}
	return config.defaultPath;
}

function buildPath(data) {
	if (typeof data === 'number') return data;
	if (typeof data === 'string') return data.replace(TYPE_REG, getType(process.argv));
	for (var key in data) {
		var value = data[key];
		delete data[key];
		data[buildPath(key)] = buildPath(value);
	}
	return data;
}

var conf = buildPath(config);
conf.TYPE = getType(process.argv);
conf.IS_PRODUCTION = false;
module.exports = conf;