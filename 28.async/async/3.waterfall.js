var async = require('async');
/**
 * waterfall
 * 按顺序执行一组函数
 * 每个函数的返回值都会传递给下一下函数
 **/
console.time('cost');
async.waterfall([
  function(cb){
    cb(null,'水');
  },
  function(data,cb){
      cb(null,data+'+咖啡');
  },
  function(data,cb){
      cb(null,data+'+糖');
  }
],function(err,result){
    console.log(result);
})