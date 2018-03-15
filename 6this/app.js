var Bucky = {
  printFirstName :function(){
    // console.log("My name is Bucky");
    // console.log(this === Bucky);
    // console.log(this == Bucky);
    // console.log(this);
  }
}

Bucky.printFirstName();

function doSomethingWorthless(){
  console.log("\n I am worthless");
  console.log(this);
  // console.log(this=== global);//true

}

doSomethingWorthless();
