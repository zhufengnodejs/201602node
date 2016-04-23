var express = require('express');
var app = express();
var session = require('express-session');
app.use(session({
    resave:true,//每次请求结束 都要重新保存，不管有没有修改
    saveUninitialized:true,//保存未修改过的session
    secret:'zfpx' //加密的密钥
}));// req.session
app.get('/',function(req,res){
    var isLogin = req.session.isLogin;
    if(isLogin){
        res.send('老朋友');
    }else{
        req.session.isLogin = 'true';
        res.send('新朋友');
    }
});
app.listen(8080);