var Bucky= {
  favFood: "bacon",
  favMovie:"Chappie"
};

var Person = Bucky;
Person.favFood = "salad";
console.log(Bucky.favFood);
console.log(Person.favFood);
//?salad 是Person的favFood的，但是输出的是Bucky的favFood
//创建Person并不是一个复制一个Bucky对象，而是作为Bucky的References，同时也改变Bucky的值
//== 与===的不同
console.log(19=="19");
console.log(19==="19");
