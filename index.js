/*
 * only uglify JS files in ret.pkg object.
 * promote uglify performance.
 */
var fs = require('fs');
var UglifyJS = require('uglify-js');

// uglify content
var uglify = function(content) {
	return UglifyJS.minify(content, {
		fromString: true
	}).code;
};


// uglify file content
var uglifyFile = function(file) {
	var content = file.getContent();
	content = uglify(content);
	file.setContent(content);
};

module.exports = function(ret, conf, setting, opts) {
	var pkg = ret.pkg,
		ids = Object.keys(pkg);
	var file;
	// uglify file in ret.pkg
	ids.forEach(function(id) {
		file = pkg[id];
		if (!file) {
			fis.log.debug('file ' + file + ' does not exist from uglify-packto');
			return;
		}
		uglifyFile(file);
	});
	var include = setting.include || [];
	// all subpath info.
	ids = Object.keys(ret.ids);

	// uglify files in config
	if (include.length) {
		ids.forEach(function(id) {
			if (~include.indexOf(ret.ids[id].subpath)) {
				file = ret.ids[id];
				uglifyFile(file);
			}
		});
	}
};