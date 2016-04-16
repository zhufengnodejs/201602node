var fs = require('fs');
// 1234567890
var rs = fs.createReadStream('./1.txt',{
    highWaterMark:5
});
rs.setEncoding('utf8');//可以在创建流之后指定编码
//流是EventEmitter的子类
rs.on('data',function(data){
    console.log(data);
    rs.pause();//暂停触发data事件
});
setTimeout(function(){
    rs.resume();//重新开始触发data 事件，恢复执行
},5000)
//当读完文件的时候会触发end事件
rs.on('end',function(){
    console.log('读完了');
});

//当读取文件出错的时候可以监听ERROR事件
rs.on('error',function(err){
    console.log('出错了',err);
});

/**
 * 640K
 * 1. 先从文件中读取64K,然后发射 rs.emit('data')
 * 2. 再从文件中读取64K，然后再发射 rs.emit('data')
 *
 **/