//调用第三方库时，不要加上路径，nodejs认为加了路径则是调用自己的库，
//而不调用系统库
// var fs = require('fs');
//
//1
// //创建文件写入内容
// fs.writeFileSync("corn.txt","Corn is good , corn is life");
//
// //读取文件内容
// console.log(fs.readFileSync("corn.txt").toString());


//2
// //格式化路径
// var path = require('path');
// var websiteHome = "Desktop/Bucky//thenewboston/index.html";
// var websiteAbout = "Desktop/Bucky/thenewboston/about.html";
//
//
//

//3
// console.log(path.normalize(websiteHome));
// //输出文件夹名，basename，extname
// console.log(path.dirname(websiteAbout));
// console.log(path.basename(websiteAbout));
// console.log(path.extname(websiteAbout));


//4
//循环执行,隔2s执行一次
// setInterval(function(){
//   console.log("beer");
// },2000)


//5  输出当前文件夹名以及文件路径
console.log(__dirname);
console.log(__filename);
