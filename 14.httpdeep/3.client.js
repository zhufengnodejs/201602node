var http = require('http');
var options = {
    method:'GET',
    path:'/',
    hostname:'localhost',
    port:8010,
    headers:{
        'name':'zfpx',
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Type':'application/json',
    }
}
// client 它是一个流对象 是一个可写流
var client = http.request(options,function(response){
    //response也是个流对象，而且是个可读流
    //console.log(response);
    response.on('data',function(data){
        console.log(data.toString());
    });

})
client.write('request1','utf8');
client.write('request2','utf8');
//当调用end方法的时候才会真正向服务器发起请求
//结束写入响应体
client.end();