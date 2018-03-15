// function printAvatars(){
//   console.log("Avators: PG-13");
// }
//
// function printChappie() {
//   console.log("Chappie: R");
// }
//
// module.exports.avator = printAvatars;
// module.exports.chappie = printChappie;

//更加方便的导出方法
module.exports = {
  printAvatars:function(){
    console.log("Avators");
  },
  printChappie:function(){
    console.log("Chappie");
  },

//特殊的定义方式
  favMovie : "The Matrix"
};
