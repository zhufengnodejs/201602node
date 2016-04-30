var express = require('express');
var path = require('path');
var app = express();
app.get('/',function(req,res){
   res.sendFile(path.join(__dirname,'index.html'));
});
app.use(express.static(path.resolve('..')));
var books = [{id:1,name:'javascript'},{id:2,name:'node.js'}];
//当用户访问 /books路径，并且请求方式是get的时候
app.route('/books').get(function(req,res){
  res.send(books);
});

app.listen(8080);