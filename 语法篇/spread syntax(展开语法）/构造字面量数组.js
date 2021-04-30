//没有展开语法的时候，只能组合使用 push, splice, concat 等方法，
// 来将已有数组元素变成新数组的一部分。有了展开语法,  通过字面量方式, 构造新数组会变得更简单、更优雅：

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; //有那么一丢丢像python的切片

console.log(lyrics);
