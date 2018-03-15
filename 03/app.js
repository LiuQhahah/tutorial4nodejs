// 01创建变量
 // var person = {
// 	firstname: "Bucky",
// 	lastname:"Roberts",
// 	age:28
// 	};
// console.log(person);


//02创建函数
// function addNumber(a,b){
// 	return a+b;
// }
//
// console.log(addNumber(11,11));
//03定义变量函数以及延迟函数
var printBacon = function(){
	console.log("Bacon is healthy ,dont believe the doctors");
};//注有分号结束符
printBacon();//此时有括号，而不仅仅是变量名

setTimeout(printBacon,3000);//此时没有括号，奇怪
