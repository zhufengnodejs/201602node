var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    /**
     * host 主机加端口
     * user-agent 用户代理 客户端类型
     */
    console.log(req.headers);
    res.setHeader('name','zfpx');
    console.log(res.getHeader('name'));
    res.removeHeader('name');
    console.log(res.getHeader('name'));
    console.log('headerSent',res.headersSent);
    //当writeHead调用 时候会直接向客户端发响应
    /*res.writeHead(200,'下载',{'Content-Type':'text/html'});*/
    res.statusCode = 404;//设置响应码
    res.sendDate = false;//设置不发送日期的响应头
    console.log('headerSent',res.headersSent);
    //res.setHeader('age','6');
    res.write('hello');

    fs.createReadStream('./xxx.yyy').pipe(res);
}).listen(8010,'localhost',511,function(){
    console.log('服务器启动成功');
});