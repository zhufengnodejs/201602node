var async = require('async');
/**
 * auto 处理有多个依赖关系 的任务
 **/
console.time('cost');
async.auto({
  water:function(cb){
      cb(null,'水');
  },
  flour:function(cb){
      cb(null,'面粉');
  },
  mix:['water','flour',function(result,callback){
      callback(null,result.water+'+'+result.flour+'+和面');
  }],
  stream:['mix',function(result,callback){
      callback(null,result.mix+'+蒸馒头');
  }]
},function(err,result){
    console.log(err);
    console.log(result);
})