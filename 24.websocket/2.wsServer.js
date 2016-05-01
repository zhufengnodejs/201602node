var Server = require('ws').Server;
var server = new Server({port:8080});
//监听 客户端的请求
server.on('connection',function(ws){
  //ws代表就是某个客户端
  //监听客户端发送的消息
  ws.on('message',function(msg){
        console.log(msg);
      ws.send(msg+' too');
  })
});