var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();
/*app.use(express.static(path.join(__dirname,'public')));*/
app.use(function(req,res,next){
    fs.createReadStream('.'+req.url).pipe(res);
});
app.listen(9090);