var express = require('express');
var app = express();
app.use(express.static(__dirname))
app.get('/', function (req, res) {
    res.sendfile('./index.html');
});
var server = require('http').createServer(app);
//得到IO对象
var io = require('socket.io')(server);
io.on('connection',function(socket){
  socket.on('message',function(msg){
    io.emit('message',msg);
  });
});
server.listen(80);

