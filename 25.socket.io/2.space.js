var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendfile('./space.html');
});
// app是一个监听 函数
var server = require('http').createServer(app);
//得到IO对象
var io = require('socket.io')(server);
//监听客户端的连接事件 得到socket对象
//每个客户端连接上来之后都是一个独立的socket
io.of('/green').on('connection',function(socket){
    console.log('green客户端已经连接');
    var room;
    //监听 客户端发过来的消息
    socket.on('message',function(msg){
        console.log('green',msg);
       /* socket.send(msg+' too');
        //发送给除了自己之外的所有的人
        socket.broadcast.to('hua').emit('message',msg+' too');*/
        //向所有的人发消息
        io.of('/green').emit('message',msg+' too');
    });
    //监听客户端加入某个房间的事件
    socket.on('room',function(msg){
        //加入某个房间
        room = msg;
        socket.join(msg);
    });
});
io.of('/red').on('connection',function(socket){
    console.log('red客户端已经连接');
    //监听 客户端发过来的消息
    socket.on('message',function(msg){
        console.log('red',msg);
        socket.send(msg+' too');
    });
});
server.listen(80);
