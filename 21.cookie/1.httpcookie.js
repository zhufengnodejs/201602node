var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathname = urlObj.pathname;
   if(pathname == '/buy'){
       var ts = new Date(Date.now()+30*1000).toGMTString();
       res.setHeader('Set-Cookie',"goodsname"+Math.random()+"=phone"+Math.random()+"; Expires="+ts);
       res.end('write');
   }else if(pathname == '/cart'){
       var cookie = req.headers.cookie;
       var cookieObj = querystring.parse(cookie,'; ');
        console.log(cookieObj);
       res.end(JSON.stringify(cookieObj));
   }

}).listen(8080);