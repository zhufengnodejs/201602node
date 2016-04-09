var util = require('util');

var obj = new Object();

obj.name = 'zfpx';

Object.defineProperty(obj,'age',{
    value:120,
    configurable:false,//可配置 是否可以删除此属性
    writable:false,//是否可改值 是否只读
    enumerable:true //可枚举的
})
for(var attr in obj){
    console.log(attr);
}
//delete obj.age;
obj.age = 150;
for(var attr in obj){
    console.log(attr);
}
console.log(util.inspect(obj,{
    showHidden:true
}));

console.log(util.isArray(""));
console.log(util.isRegExp(/\w+/));
console.log(util.isDate(new Date));
console.log(util.isError(new Error));
