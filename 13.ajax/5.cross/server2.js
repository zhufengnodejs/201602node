var http = require('http');
var fs = require('fs');
var url = require('url');
var users = [{name:'zfpx1'},{name:'zfpx2'}];

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    if(req.url == '/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(req.url == '/ajax'){
        var keyword = urlObj.query.keyword;
        res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
        res.end('load('+JSON.stringify(users)+')');
    }
}).listen(9090);