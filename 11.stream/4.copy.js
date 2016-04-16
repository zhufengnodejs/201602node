var fs = require('fs');

function copy(file1, file2) {
    var rs = fs.createReadStream(file2);
    var ws = fs.createWriteStream(file1);
    rs.on('data', function (data) {
        var flag = ws.write(data);
        if(!flag){
            rs.pause();
        }
    });
    ws.on('drain',function(){
        rs.resume();
    });
    rs.on('end',function(){
        ws.end();//当读完的时候也要关闭写入的文件
    })
}

copy('./1.txt', './2.txt');
