//在new 表达式中的应用    使用new 关键字来调用构造函数的时候
// 不能直接使用数组+ apply 的方式（apply 执行的是调用 [[Call]] , 而不是构造 [[Construct]]）

var dateFields=[2021,1,1];

var d=new Date(...dateFields);

console.log(d);
