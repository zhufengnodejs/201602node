var WebSocket = require('ws');
//建立客户端连接对象
var socket = new WebSocket('ws://localhost:8080');
//监听与服务器端连接成功的事件
socket.on('open',function(){
    console.log('open');
    //向服务器端发送消息
    socket.send('hello server');
});

socket.on('message',function(msg){
    console.log(msg);
})