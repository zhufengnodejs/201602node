var child_process = require('child_process');
var fs = require('fs');

function download(url){
    //得到文件名
   var filename = url.split('/').pop();
    //创建一个可写流的实例
    var curl = child_process.exec('curl '+url+' -o '+filename,function(err,stdout,stderr){
        console.log(stdout);
    });

}
download('https://www.baidu.com/img/bd_logo1.png');