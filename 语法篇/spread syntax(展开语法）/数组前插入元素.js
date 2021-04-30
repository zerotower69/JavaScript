var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];

//使用 Array.unshift方法

console.log("-----使用Array.unshift方法-------");

console.log("插入前arr1",arr1);
Array.prototype.unshift.apply(arr1,arr2);
console.log("插入后arr2",arr1);

console.log("----使用展开语法----");
 arr1 = [0, 1, 2];
 arr2 = [3, 4, 5];

