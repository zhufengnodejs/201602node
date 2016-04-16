var http = require('http');
var fs = require('fs');
http.createServer(function(req,response){
    var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><div></div></body></html>';
    if(req.url == '/'){
        http.get("http://baijia.baidu.com", function (res) {
            var result = '';
            res.on('data', function (data) {
                result += data.toString();
                ;
            });
            res.on('end', function () {
                var matches = result.match(/<a.+mon.+<\/a>/g)
                var innerHTML = '';
                matches.forEach(function(match){
                    if(match.indexOf('img')==-1)
                    innerHTML+= ('<li>'+match+'</li>');
                })
                html = html.replace('<div></div>',innerHTML)
                response.end(html);
            });
        }).on('error', function (e) {
            console.log("错误：" + e.message);
        });
    }
}).listen(8080);