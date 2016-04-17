var arr = [1,2,3];
var a = arr.filter(function(item){
    //如果为true则此元素保留，如果为false则不保留
    return item >1;
});

console.log(a);