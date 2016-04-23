var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathname = urlObj.pathname;
   if(pathname == '/buy'){

       res.setHeader('Set-Cookie',"goodsname"+Math.random()+"=phone"+Math.random()+"; maxAge=20000");
       res.end('write');
   }else if(pathname == '/cart'){
       //读取请求头中的cookie
       var cookie = req.headers.cookie;
       //转成对象
       var cookieObj = querystring.parse(cookie,'; ');
        console.log(cookieObj);
       res.end(JSON.stringify(cookieObj));
   }

}).listen(8080);