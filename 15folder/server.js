
//https://github.com/senchalabs/connect
// var connect = require('connect');
// var http = require('http');
//
// var app=  connect();
//
// //使用next参数
// function doFirst(request,response,next){
//   console.log("Bacon");
//   next();
// }
//
// function doSecond(request,response,next){
// console.log("Tuna");
// next();
// }
//
//
// app.use(doSecond);
// app.use(doFirst);


//127.0.0.1:8888/profile 输出
function profile(request,response){
  console.log("User requested profile");
}

//127.0.0.1:8888/forum 输出
function forum(request,response){
  console.log("User request forum");
}

app.use('/profile',profile);
app.use('/forum',forum);

http.createServer(app).listen(8888);
console.log("Server is running...");
