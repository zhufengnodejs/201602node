console.log(require('./package'));
/**
 * 1. 普通的函数
 * 2. 类
 * 3. 是一个普通对象
 *   1. new Function()
 *   2. 可以作为参数进行传递
 *
 **/
function say(){

}
say();
var s = new say;


Object.prototype.__proto__== Object.prototype
Function.__proto__ == Function.prototype

module.exports = {}
exports ={}