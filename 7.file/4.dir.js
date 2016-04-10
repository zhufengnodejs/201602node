var fs = require('fs');
//fs.mkdirSync('a');
//如果是异步方法，最后一个参数一定就是回调函数
fs.mkdir('a/a/b',function(err){
    console.log(err)
})
//读取指定目录下面所有的文件 结果是个数组
fs.readdir('./a',function(err,files){
    console.log(files);
    files.forEach(function(file){
        fs.stat('./a/'+file,function(err,stat){
            //stat.isDirectory()
            if(stat.isFile()){
                fs.readFile('./a/'+file,function(err,data){
                    console.log(data.toString());
                })
            }else{
                console.log('这是一个目录');
            }
        })

    })
})
//获得文件的详情描述
// mtime 修改时间只要改过就会变
// ctime 改变时间，只有内容改了才会变
fs.stat('./a',function(err,stat){
    console.log(stat);
})
//判断文件夹或文件是否存在
fs.exists('./a',function(exists){
    console.log(exists);
})
var path = require('path');
console.log(__dirname+'./a');

console.log(require('path').join(__dirname,'a'));

