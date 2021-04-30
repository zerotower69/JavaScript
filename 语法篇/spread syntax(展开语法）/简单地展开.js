//数组的展开

function sum(x,y,z){
  // console.log("x="+x);
  // console.log("y="+y);
  // console.log("z="+z);
  return x+y+z;
}

var numbers=[1,2,3];

console.log(sum(...numbers));  //...numbers 就展开了数组numbers，1，2，3按顺序赋值给了sum的三个参数： 1，2，3
//也就相当于拿掉了[]
//等同于这样
console.log(sum.apply(null,numbers));
//

