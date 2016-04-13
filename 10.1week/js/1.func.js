/**
 * 函数也是对象
 */
//function add(){}
//var add = function(){}
var add = new Function('a','b','return a+b');
console.log(add(1,3));
var arr = [];
console.log(typeof arr); //object
/**
 * 判断变量类型的几种方式
 * 1. typeof 引用类型还是 函数 对象
 * 2. instanceof 来判断是何种对象
 * 3. duck type
 * 4. Object.prototype.toString.call()
 */
var fn = function(){}
if(fn.call){
    console.log('这是一个函数');
}
console.log(Object.prototype.toString.call(fn));
console.log(Object.prototype.toString.call(arr));