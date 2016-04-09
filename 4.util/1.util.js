var util = require('util');

function Parent(){
    this.name = 'parent';
}
Parent.prototype.say = function(){
    console.log(this.name);
}
function Child(){
    this.name = 'child';
}
//子类可以继承原型上的方法
util.inherits(Child,Parent);

var child = new Child();
child.say();
console.log(util.inspect(child));

