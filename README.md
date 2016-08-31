# fis3-postpackager-uglify-packto
A fis plugin to uglify JS file in `ret.pkg` object.

### Install
```
npm i fis3-postpackager-uglify-packto
```

### Why
By default, `uglify-js` will be used to uglify all JS files, which has a bad performance.

### Function
Only uglify JS file in `ret.pkg` object, which contains all packed files.

### Config
**include**: other files not in `ret.pkg`.
```
fis.match('::package', {
	postpackager: fis.plugin('uglify-packto', {
		include: [path1, path2, ..., pathn]
	})
})
```