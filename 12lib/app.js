//调用第三方库时，不要加上路径，nodejs认为加了路径则是调用自己的库，
//而不调用系统库
var fs = require('fs');

//创建文件写入内容
fs.writeFileSync("corn.txt","Corn is good , corn is life");

//读取文件内容
console.log(fs.readFileSync("corn.txt").toString());
