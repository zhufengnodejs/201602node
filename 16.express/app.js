var express = require('express');
//构建一个express实例
var app = express();

//请求分发也叫路由 根据不同的路径 进行不同的处理
//处理get请求  的 /index 路径
app.get('/index',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('张婷');
});

//处理get请求 的 /index 路径
// pathname = req.url 减去查询字符串
// /hello?name=zfpx /home
app.get('/home',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('用户主页面');
});

//匹配GET请求的任意路径
// all表示匹配所有的路径
app.all('/a',function(req,res){
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.end('找不到页面');
});

app.listen(8080);
