var arr1=[1,2,3];
var arr2=[4,5,6];

console.log("------concat连接数组--------");
var arr3=arr1.concat(arr2);  //对arr1没有影响

console.log("arr3=",arr3);
console.log("arr1=",arr1);
console.log("arr2=",arr2);

console.log("-----使用展开语法来连接数组---------");

var arr4=[...arr1,...arr2];

console.log("arr4",arr4);

//更大的优势在于数组很多个连接在一起


