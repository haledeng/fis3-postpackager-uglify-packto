/*
 * 只要所pkg中打包的文件, 提高压缩速度
 */
var fs = require('fs');
var UglifyJS = require('uglify-js');
var toString = Object.prototype.toString;

var uglify = function(content) {
	return UglifyJS.minify(content, {
		fromString: true
	}).code;
};

module.exports = function(ret, conf, setting, opts) {
	var pkg = ret.pkg,
		ids = Object.keys(pkg);
	var file,
		content;
	ids.forEach(function(id) {
		file = pkg[id];
		if (!file) {
			fis.log.debug('file ' + file + ' is not exists from uglify-packto');
			return;
		}
		content = file.getContent();
		content = uglify(content);
		file.setContent(content);
	});
	var include = setting.include || [];
	ids = Object.keys(ret.ids);

	if (include && toString.call(include) === '[object Array]') {
		var subpaths = [];
		ids.forEach(function(id) {
			if (~include.indexOf(ret.ids[id].subpath)) {
				file = ret.ids[id];
				content = file.getContent();
				content = uglify(content);
				file.setContent(content);
			}
		});
	}
};