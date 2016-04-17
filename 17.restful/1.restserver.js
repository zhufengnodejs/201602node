var express = require('express');
var fs = require('fs');
var app =  express();
var db = './users.json';
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
//获取所有的对象列表
app.get('/users',function(req,res){
    var keyword = req.query.keyword;
    var sortBy = req.query.sortBy;
    var pageNum = parseInt(req.query.pageNum);
    var pageSize = parseInt(req.query.pageSize);
    var start = (pageNum-1)*pageSize;
    var end = pageNum*pageSize;
    var type = req.query.type=='desc'?-1:1;
    var users = require(db);
    var users = users.filter(function(user){
        return user.name.indexOf(keyword) !=-1;
    }).sort(function(a,b){
       return (a[sortBy] - b[sortBy])*type;
    }).slice(start,end);
    res.send(users);
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
//完整更新 请求体里的对象是完整的对象，会整体覆盖原来的对象
app.put('/users/:id',function(req,res){
    var newUser = req.body;
    var users = require(db);
    users = users.map(function(user){
        if(user.id == req.params.id){
            return newUser;
        }else{
            return user;
        }
    });
    fs.writeFile(db,JSON.stringify(users),function(err){
        res.send(newUser);
    })
});
//更新某个对象 请求体只要传入更新后的字段就可以
//1.查找到要修改的用户对象
//2.修改这个对象
//3.写入文件
//4.把修改后的对象发送给客户端
app.patch('/users/:id',function(req,res){
    var newUser = req.body;
    var users = require(db);
    users = users.map(function(user){
        if(user.id == req.params.id){
            for(var attr in newUser){
                if(newUser.hasOwnProperty(attr)){
                    user[attr] = newUser[attr];
                }
            }
            newUser = user;
            return newUser;
        }else{
            return user;
        }
    });
    fs.writeFile(db,JSON.stringify(users),function(err){
        res.send(newUser);
    })
});

app.delete('/users/:id',function(req,res){
    var id = req.params.id;
    var users = require(db);
    var users = users.filter(function(user){
        return user.id != id;
    });
    fs.writeFile(db,JSON.stringify(users),function(err){
        res.send({});
    })
});

app.listen(9090);