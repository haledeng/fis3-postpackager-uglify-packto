/*
* 只要所pkg中打包的文件, 提高压缩速度
*/
var fs = require('fs');
var UglifyJS = require('uglify-js');


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
		content = UglifyJS.minify(content, {
			fromString: true
		}).code;
		file.setContent(content);
	});
};