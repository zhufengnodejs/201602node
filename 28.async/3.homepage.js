var EventEmitter = require('events');
var fs = require('fs');

/**
 * 我现在要渲染一个首页
 * 1. 导航
 * 2. 个人信息
 * 3. 商品列表
 **/
var event = new EventEmitter();
var count = 0;
var home = {};
event.on('done',function(){
    if(++count == 3){
        console.log(home);
    }
});

event.on('done',function(){
  console.log(count);
});

fs.readFile('nav.txt','utf8',function(err,data){
    home.nav = data;
    event.emit('done');
});
fs.readFile('profile.txt','utf8',function(err,data){
    home.profile = data;
    event.emit('done');
});
fs.readFile('goods.txt','utf8',function(err,data){
    home.goods = data;
    event.emit('done');
});