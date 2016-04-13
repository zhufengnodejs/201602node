function Person(){
    this.name = 'zfpx';
}
Person.prototype.eat = function(){
    console.log('吃饭');
}

function Student(){
    this.stu = 1;
}
Student.prototype = new Person;
var s = new Student();
s.eat();
console.log(s.name);

