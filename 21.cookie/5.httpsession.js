var http = require('http');
var fs = require('fs');
var url = require('url');;
var querystring = require('querystring');
var SESSION_KEY = 'SESSION_KEY';
var sessions = {};
http.createServer(function(req,res){
   var urlObj = url.parse(req.url,true);
   var pathname = urlObj.pathname;
   if(pathname =='/'){
       var cookieObj = querystring.parse(req.headers.cookie,'; ');
       console.log(cookieObj);
      var sessionId = cookieObj[SESSION_KEY];
       console.log(sessionId);
      if(sessionId){
          var sessionObj = sessions[sessionId];
          //如果有值的话表示此客户端提交上来的会话ID在服务器端有对应关系
          if(sessionObj){
              sessionObj.balance = sessionObj.balance - 10;
              res.setHeader('Content-Type',"text/html;charset=utf-8");
              res.end('欢迎你老朋友再次光临 ，余额为'+sessionObj.balance);
          }else{
              res.setHeader('Content-Type',"text/html;charset=utf-8");
              res.end('欢迎你老朋友再次光临,但你的卡不能用了');
          }

      }else{
          //生成一个新的会话ID
          var sid = Date.now()+''+Math.random();
          //在服务器端开辟内存，存放此ID对应的数据
          var sessionObj = {balance:100};
          sessions[sid] = sessionObj;
          //把SID也就是会员卡号写给客户端
          res.setHeader("Set-Cookie",SESSION_KEY+"="+sid);
          res.setHeader('Content-Type',"text/html;charset=utf-8");
          res.end('欢迎你新朋友，送你会员卡，余额为'+sessionObj.balance);
      }
   }
}).listen(8080);