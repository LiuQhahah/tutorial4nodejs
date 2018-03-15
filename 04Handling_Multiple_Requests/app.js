function placeAnOrder(orderNumber){
  console.log("Customer order:",orderNumber);


  cookAndDeliverFood(function(){
    console.log("Delivered food order:",orderNumber);
  });
}

//模拟一个5秒的操作
function cookAndDeliverFood(callback){
  setTimeout(callback,5000);
}

//模拟用户的web请求
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);
placeAnOrder(8);
placeAnOrder(9);
placeAnOrder(10);
