var child_process = require('child_process');
var fs = require('fs');

function download(url){
    //得到文件名
   var filename = url.split('/').pop();
    //创建一个可写流的实例
    var ws = fs.createWriteStream('./'+filename);
    var curl = child_process.spawn('curl',[url]);
    curl.stdout.on('data',function(data){
        ws.write(data);
    });
    curl.stdout.on('end',function(data){
        ws.end();
        console.log('文件已经下载到当前目录下的',''+filename);
    });
}
download('https://www.baidu.com/img/bd_logo1.png');