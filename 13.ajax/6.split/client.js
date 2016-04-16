var http = require('http');

http.get("http://baijia.baidu.com", function (res) {
    //console.log(res);
    var result = '';
    res.on('data', function (data) {
        result += data.toString();
        ;
    });
    res.on('end', function () {
        //console.log(result);
        var matches = result.match(/<a.+mon.+<\/a>/g)
        console.log(matches);
    });
}).on('error', function (e) {
    console.log("错误：" + e.message);
});