var fs = require('fs');
//回调的方式进行流程控制
fs.readFile('1.txt','utf8',function(err,data){
    console.log(data);
    fs.readFile('2.txt','utf8',function(err,data){
        console.log(data);
    });
});


