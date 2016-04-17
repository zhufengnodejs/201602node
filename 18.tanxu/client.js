// client.js
var http = require('http');
var opt = {
    port:'9090',
    host:'localhost',
    method:'POST',
    path:'/',
    headers:{
        'Content-Type':'application/json'
    }
};
var client = http.request(opt,function (res) {
    res.on('data',function (data) {
        console.log(data.toString());
    });
    res.on('end',function () {
        console.log('over');
    });
});
client.end(JSON.stringify({"name":"zfpx"}));