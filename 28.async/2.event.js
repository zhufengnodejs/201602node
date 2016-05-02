var fs = require('fs');
//事件来进行控制
var EventEmitter = require('events');
var event = new EventEmitter();
event.on('ready',function(filename){
    fs.readFile(filename,'utf8',function(err,data){
        console.log(data);
    });
});
fs.readFile('1.txt','utf8',function(err,data){
    console.log(data);
    event.emit('ready',data);
});



