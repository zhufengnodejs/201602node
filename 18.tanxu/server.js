/**
 * 向服务器发送请求体 ，内容类型是json
 */

// server.js
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    var result = '';
    req.on('data',function (data) {
        result+=data.toString();
    });
    req.on('end',function (data) {
        var json = JSON.parse(result);
        console.log(json);
        res.end(JSON.stringify(json));
    });
}).listen(9090);

/**
 * 在服务器端接收请求体，并转成JSON对象输出到控制台
 * 然后把此JSON对象也会返回客户端
 */
