/**
 * 1. fs实现文件的读写操作
 */
var fs = require('fs');

/*
var content = fs.readFileSync('./1.txt',{encoding:'utf8'});
console.log(content);
*/
console.log('a');
//所有的异步方法一定要晚于同步方法执行
fs.readFile('./1.txt',{encoding:'utf8'},function(err,data){
    console.log(data);
})
console.log('b');

