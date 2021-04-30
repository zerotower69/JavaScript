var arr1=[1,2,3];

var arr2=arr1;  //arr2得到的是arr1的引用， arr2发生了变化  arr1也同步变化
arr2.push(4);
console.log("---------------<<<<<<<赋值引用---------");
console.log("arr1=",arr1);

console.log("arr2=",arr2);
console.log("-------- 浅拷贝 --------");
var arr3=[]; //浅拷贝  只遍历一层
  Object.assign(arr3,arr1);
  arr3.push(5);
  console.log("arr3=",arr3);
  console.log("arr1=",arr1);
  console.log("---- 通过展开语法实现的浅拷贝-----");
var arr4=[...arr1];
  arr4.push(6);
console.log("arr4=",arr4);
console.log("arr1=",arr1);

