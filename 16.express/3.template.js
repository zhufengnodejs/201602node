var express = require('express');
var fs = require('fs');
var app = express();
app.set('view engine','ejs');
app.set('views',__dirname);
var path = require('path');
app.use(function(req,res,next){
    res.zfrender = function(tmpl,data){
        fs.readFile(path.join(__dirname,tmpl),'utf8',function(err,result){
            result = result.replace(/<%=(\w+)%>/,function(input,group1){
                return data[group1];
            });
            res.setHeader('Content-Type','text/html')
            res.send(result);
        })
    }
    next();
});
app.get('/',function(req,res){
    /**
     * 1.先找到这个模块,然后读出模块的内容
     * 2.把模板中的变量替换成对应的值
     * 3.把最终的HTML返回给客户端
     */
    res.zfrender('index.ejs',{
        title:'珠峰培训'
    });
});

app.listen(9090);