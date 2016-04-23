var Collection = function(name){
    this.data = [{age:1},{age:2},{age:3},{age:4}];
    this.name = name;
};
// process.nextTick  当前队列的尾部 一定会晚上所有的同步方法执行
// setImmediate setTimeout 放在下一个列队的顶部
Collection.prototype.find = function(){
    var self  = this;
    process.nextTick(function(){
        var result = self.data.sort(function(a,b){
            var key = Object.keys(self.sort)[0];
            return (a[key] - b[key])*self.sort[key];
        }).slice(self.skip,self.skip+self.limit);
        console.log(result);
    })
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