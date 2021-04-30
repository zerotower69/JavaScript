"use strict";

function aaa() {
var b=23;
console.log(this);  //严格模式  undefined  非严格模式  global对象  html中的js 全局对象为window
}

console.log(this);   //严格模式下单独使用   undefined

aaa();//单独使用也是全局

