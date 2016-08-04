# fis3-postpackager-uglify-packto

### 安装
```
npm i fis3-postpackager-uglify-packto
```

### 背景
fis 配置uglify-js时，一般配置`'**.js'`，压缩慢。

### 功能
只压缩`ret.pkg`，即产出的打包文件。

### 配置
include: ret.pkg外需要压缩的文件
```
fis.mathc('::package', {
	postpackager: fis.plugin('uglify-packto', {
		include: [filesubpath] 
	})
})
```