function User(){
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer){
    targetPlayer.life +=1;
    this.life -=1;
    console.log(this.name +" gave 1 life to "+targetPlayer.name);
  }
}

var Bucky = new User();
var Wendy = new User();
Bucky.name = "Bucky";
Wendy.name = "Wendy";

Bucky.giveLife(Bucky);
Bucky.giveLife(Wendy);
console.log(Bucky.name+" "+Bucky.life);
console.log(Wendy.name+" "+Wendy.life);

//You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
  targetPlayer.life -=3;
  this.life+=3;
  console.log(this.name + " just uppercutted "+targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky "+Bucky.life);
console.log("Wendy "+Wendy.life);


//对于所有的对象添加原型prototype
User.prototype.magic = 60;
console.log("Bucky.magic "+Bucky.magic);
console.log("Wendy.magic "+Wendy.magic);
