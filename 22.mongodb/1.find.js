var Collection = function(name){
    this.data = [{age:1},{age:2},{age:3},{age:4}];
    this.name = name;
};

Collection.prototype.find = function(){
    var self  = this;
    var result = this.data.sort(function(a,b){
        var key = Object.keys(self.sort)[0];
        return (a[key] - b[key])*self.sort[key];
    }).slice(this.skip,this.skip+this.limit);
    console.log(result);
    return this;
}

Collection.prototype.limit = function(num){
    this.limit = num;
    return this;
}

Collection.prototype.sort = function(fn){
     this.sort = fn;
    return this;
}

Collection.prototype.skip = function(num){
    this.skip = num;
    return this;
}

var hello = new Collection('hello');
hello.find().sort({age:1}).skip(2).limit(2);