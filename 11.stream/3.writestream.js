var fs = require('fs');
var ws = fs.createWriteStream('1.txt',{
  flags:'w',  //追加文件并写入 r=read w=write a=append
  start:1, //从第几个字节开始写入
  highWaterMark:100 //最高水位线是1
});
var i=0;
var max = 10;
function write(){
    console.log('继续写 write',i);
    var flag =true;
    while(i<max &&flag){
        var flag = ws.write(String(i++));
    }
}

ws.on('drain',function(){
    console.log('drain',i);
    write();
});
write();



