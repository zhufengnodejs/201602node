var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    if(req.url == '/'){
        fs.createReadStream('./get.html').pipe(res);
    }else if(req.url == '/ajax'){
        res.end('ajax');
    }
}).listen(8080);