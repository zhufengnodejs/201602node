var express = require('express');
var fs = require('fs');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var app = express();
// extended为true表示会使用express自带的解析器解析
//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());
app.use(function(req,res,next){
    var str = '';
    req.on('data',function(data){
        str+=data.toString();
    });
    req.on('end',function(data){
        req.body = querystring.parse(str);
        next();
    });
});
app.get('/',function(req,res){
    fs.createReadStream('./index.html').pipe(res);
});
app.post('/login',function(req,res){
    console.log(req.body);
    res.send(req.body);
})
app.listen(9090);