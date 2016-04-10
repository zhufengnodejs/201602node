var path = require('path');
//多个部分路径拼成一个最终路径
console.log(path.join(__dirname,'a','b','c'));
//得到绝对路径
console.log(path.resolve('a','b','..','..'));
//获得当前路径中的文件名
console.log(path.basename(__filename,'.js'));//5.path.js
//获取文件的扩展名
console.log(path.extname(__filename));//.js

console.log(path.delimiter);//环境变量路径分隔符 :;
console.log(path.sep);//目录的分隔符 \ /