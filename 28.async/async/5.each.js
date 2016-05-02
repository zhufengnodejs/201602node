var async = require('async');
/**
 * each 迭代一个数组
 *
 **/
console.time('cost');
async.eachSeries([1,2,3],function(item,next){
    setTimeout(function(){
        console.log(item);
        next();
    },1000);
},function(){
    console.log('well done');
    console.timeEnd('cost');
});
