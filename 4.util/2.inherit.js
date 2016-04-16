var util = require('util');
var Person = function(name){
    this.name = name;
}
Person.prototype.eat = function(){
    console.log('eat');
}
/*
   new 原理
   1. 先创建一个空对象{}
   2. 运行函数，并且把里面的this改成这个空对象
 */
var Teacher = function(name,teacherNo){
    Person.call(this,name);
    this.teacherNo = teacherNo;
}
//Teacher.prototype = new Person();
Object.setPrototypeOf(Teacher.prototype, Person.prototype);
Object.create = function(prototype){
    function Temp(){}
    Temp.prototype = prototype;
    return new Temp;
}
Teacher.prototype = Object.create(Person.prototype);

//util.inherits(Teacher,Person);
var t = new Teacher('zfpx',1);
console.log(t.name);
t.eat();
