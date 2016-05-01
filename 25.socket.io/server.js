var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('./index.html');
});
// app是一个监听 函数
var server = require('http').createServer(app);
//得到IO对象
var io = require('socket.io')(server);
//监听客户端的连接事件 得到socket对象
//每个客户端连接上来之后都是一个独立的socket
io.on('connection',function(socket){
    console.log('客户端已经连接');
    //监听 客户端发过来的消息
    socket.on('message',function(msg){
        console.log(msg);
        socket.send(msg+' too');
    });
});
server.listen(80);
