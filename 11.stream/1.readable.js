var fs = require('fs');
// 1234567890
var rs = fs.createReadStream('./1.txt',{
    flags:'r',// 表示 打开文件之后想干什么，默认为 r  =read
    //encoding:'utf8' //得到数据是Buffer对象，如果指定编码，那么是字符串类型的
    start:3,//读取的字符索引的开始位置
    end:5,//读取的字节的索引的结束位置
    highWaterMark:2
});
rs.setEncoding('utf8');//可以在创建流之后指定编码
//流是EventEmitter的子类
rs.on('data',function(data){
    console.log(data);
});
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