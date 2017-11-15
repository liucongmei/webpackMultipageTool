//保存项目所用到的html,不要后缀名
// const fs = require('fs');
// const getFileNameList = path => {
// let fileList = [];
// let dirList = fs.readdirSync(path);
// dirList.forEach(item => {
// if (item.indexOf('html') > -1) {
// fileList.push(item.split('.')[0]);
// }
// });
// return fileList;
// };
// let HTMLDirs = getFileNameList('./src/html');
module.exports = {
	HTMLDirs: [
		"index",
		"list"
	],
	cssPublicPath:"../",
    imgOutputPath:"images/",
    cssOutputPath:"./css/styles.css",
    devServerOutputPath:"../dist",
	imgPublicPath: "../",
    fontOutputPath: "fonts/"
}
