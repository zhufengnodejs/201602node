var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathname = urlObj.pathname;
    //读取请求头中的cookie
    var cookie = req.headers.cookie;
    //转成对象
    var cookieObj = querystring.parse(cookie,'; ');
   if(pathname == '/buy1'){
       console.log(cookieObj);
       res.setHeader('Set-Cookie',["buy1=buy1; Path=/buy1","buy11=buy11; Path=/buy11"]);
       res.end('buy1');
   }else  if(pathname == '/buy2'){
       console.log(cookieObj);
       res.setHeader('Set-Cookie',"buy2=buy2; Path=/buy2");
       res.end('buy2');
   }else if(pathname == '/cart'){
        console.log(cookieObj);
       res.end(JSON.stringify(cookieObj));
   }

}).listen(8080);