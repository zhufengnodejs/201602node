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
    res.writeHead(301,'重定向',{location:''});http://www.baidu.com
    fs.createReadStream('./xx').pipe(res);
}).listen(8080,'localhost',511,function(){
    console.log('服务器启动成功');
});