var child_process = require('child_process');
var fs = require('fs');
/**
 * spawn 是个流对象 可以通过监听它的data事件来获取里面的控制台输出
 * exec 把命令执行完成之后调用回调函数 stdout存放所有的子进程向的输出内容
 * @param url
 */
function download(url){
    //得到文件名
   var filename = url.split('/').pop();
    //创建一个可写流的实例
    var curl = child_process.exec('node 1.js',function(err,stdout,stderr){
        console.log(stdout);
    });

}
download('https://www.baidu.com/img/bd_logo1.png');