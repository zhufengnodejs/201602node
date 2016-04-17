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
  /*  res.setHeader('Content-Type','text/plain;charset=utf-8');*/
   // res.end('over');
    next();//如果调用表示继续执行下面的路由
});

/*app.use(function(req,res,next){
    var urlObj = require('url').parse(req.url,true);
    req.path = urlObj.pathname;
    req.query = urlObj.query;
    res.send = function(){

    }
    next();
});*/

//请求分发也叫路由 根据不同的路径 进行不同的处理
//处理get请求  的 /index 路径
app.get('/index',function(req,res){
    console.log(req.path);//路径pathname
    console.log(req.query);//查询字符串对象
    console.log(res.send);//发送的方法
    console.log('张婷 index');
    res.sendStatus(200);
    res.send(200);
    // first arguments must be a string or buffer
    //res.end({name:'张婷'});
});

//处理get请求 的 /index 路径
// pathname = req.url 减去查询字符串
// /hello?name=zfpx /home
app.get('/home/:id/:name',function(req,res){
    console.log(req.params.id,req.params.name,'用户主页面');
    res.end('用户主页面');
});

//匹配GET请求的任意路径
// all表示匹配所有的路径
/*app.all('/a',function(req,res){
    console.log('张婷 找不到页面');
    res.end('找不到页面');
});*/

app.listen(8080);
