function Person(name){
    this.name = name
}
Person.prototype.say = function(){
    console.log(this.name);
}

module.exports = Person;

