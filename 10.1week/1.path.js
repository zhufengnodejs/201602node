var path = require('path');

//normalize 将非标准的路径字符串转化为标准路径字符串
/**
 * 1. 可以解析 . ..
 * 2. 多个杠可以转成一个杠
 * 3. windows下反杠会转成正杠
 * 4. 如结尾以杠结尾 的，则保留
 */
console.log(path.normalize('a/../b////c/d/'));
// b\c\d\

/**
 * resolve 以应用程序根目录为起点，根据参数值解析出一个绝对路径
 * 1. 以应用程序根目录作为起点
 * 2. 如果参数是普通字符串，则意思是当前目录的下级目录
 * 3. 如果是.. 回到上一级目录
 * 4. /开头表示一个绝对的根路径
 */
console.log(path.resolve('/a','..','b','d','/'));
//e:\201602node\10.1week\b\d
//e:\b\d

//relative 用于获取两个路径之间的相对关系
//
/**
 * 有两个参数，可以是相对路径 ，也可以是绝对路径
 */
console.log(path.relative('../9.http',__dirname));
