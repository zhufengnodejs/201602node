var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
/**
 * 当使用了cookieParser中间件之后，会多了二个方法或属性
 */
app.get('/',function(req,res){
    // req.cookies指的是用户提交过来的cookie对象
   var isVisited = req.cookies.isVisisted;
    if(isVisited){
        res.send('欢迎老朋友');
    }else{
        //res.cookie 用于向客户端写入cookie
        res.cookie('isVisisted','1',{maxAge:20*1000});
        res.send('欢迎新朋友');
    }

});
app.listen(8080);