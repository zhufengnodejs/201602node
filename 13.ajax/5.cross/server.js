var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/ajax'){
        //在服务器端加这样一个响应头就可以了
        res.setHeader('Access-Control-Allow-Origin','http://localhost:*');
        res.end('ajax');
    }
}).listen(8080);