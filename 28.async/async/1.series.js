var async = require('async');
/**
 * series(tasks,callback)
 * 串行执行 ，一个数组中的每个函数，执行完一个才能执行下一个
 *
 **/
console.time('cost');
async.series({
    one:function(cb){
        setTimeout(function(){
            console.log(1);
            cb(null,1);
        },1000);
    },
   two: function(cb){
        setTimeout(function(){
            console.log(2);
            cb(null,2);
        },2000);
    }
},function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})