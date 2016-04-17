var express = require('express');
var fs = require('fs');
var app =  express();
var db = './users.json';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//获取所有的对象列表
app.get('/users',function(req,res){
    fs.createReadStream('./users.json').pipe(res);
});
//获取某个对象详情
app.get('/users/:id',function(req,res){
   var id = req.params.id;
   var users = require(db);
   var user = users.filter(function(user){
       return user.id == id;
   })[0];
   if(user){
       res.send(user);
   } else{
       res.send({msg:'此用户不存在'});
   }
});
//增加一个用户
app.post('/users',function(req,res){
  var user = req.body;
  var users = require(db);
  user.id = users[users.length-1].id+1;
  users.push(user);
  fs.writeFile(db,JSON.stringify(users),function(err){
      res.send(user);
  })
});


app.listen(9090);