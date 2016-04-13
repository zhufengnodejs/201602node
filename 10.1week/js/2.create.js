//Object.create();

/*function Person(){
    this.name = 'zfpx';
}
Person.prototype.eat = function(){
    console.log('吃饭');
}*/

var obj = {
    name:'zfpx'
}
//创建一个对象，这个对象的原型 等于obj
Object.mycreate = function(obj){
    //返回一个对象，它的__proto_等于obj
    function Temp(){}
    Temp.prototype = obj;
    return new Temp();
}
var obj2 = Object.create(obj);

console.log(obj2.__proto__ == obj);
