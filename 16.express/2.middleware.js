var express = require('express');
//构建一个express实例
var app = express();
/**
 * use 表示 使用一个中间件函数
 * next是继续下一个函数的意思 next是一个由express提供的函数
 *
 */
app.use(function(req,res,next){
    console.log('use');
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    //res.end('over');
    next();//如果调用表示继续执行下面的路由
});

//请求分发也叫路由 根据不同的路径 进行不同的处理
//处理get请求  的 /index 路径
app.get('/index',function(req,res){
    console.log('张婷 index');
    res.end('张婷');
});

//处理get请求 的 /index 路径
// pathname = req.url 减去查询字符串
// /hello?name=zfpx /home
app.get('/home',function(req,res){
    console.log('张婷 用户主页面');
    res.end('用户主页面');
});

//匹配GET请求的任意路径
// all表示匹配所有的路径
/*app.all('/a',function(req,res){
    console.log('张婷 找不到页面');
    res.end('找不到页面');
});*/

var http = require('http');
http.createServer(app.start).listen(8080);
