var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'2.long.html'));
})
app.get('/ajax',function(req,res){
    console.log('ajax');
    setTimeout(function(){
        res.send(new Date().toLocaleString());
    },5000)
});
app.listen(8080);