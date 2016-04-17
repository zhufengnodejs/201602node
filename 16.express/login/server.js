var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get('/',function(req,res){
    fs.createReadStream('./index.html').pipe(res);
});
app.get('/login',function(req,res){
    fs.createReadStream('./login.html').pipe(res);
});
app.post('/login',function(req,res){
    console.log(req.body);
    if(req.body.username){
        //重定向 让客户端向/home再发起get请求
        res.redirect('/home');
    }else{
        res.redirect('/login');
    }
})
app.get('/home',function(req,res){
    fs.createReadStream('./home.html').pipe(res);
});
app.listen(9090);