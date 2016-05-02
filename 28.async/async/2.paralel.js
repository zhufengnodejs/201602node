var async = require('async');
/**
 * series(tasks,callback)
 * 并行 多个函数同时执行，不需要等待其它函数执行
 * 传递给最终的回调函数的是按任务声明顺序排列，而不是完成顺序
 *
 **/
console.time('cost');
async.parallel([
  function(cb){
      setTimeout(function(){
          console.log(1);
          cb(null,1);
      },1000);
  },
    function(cb){
        setTimeout(function(){
            console.log(2);
            cb(null,2);
        },2000);
    }
],function(err,result){
    console.log(err);
    console.log(result);
    console.timeEnd('cost');
})