//当前工作目录
console.log(process.cwd());
//切换到上级工作目录
process.chdir('..');

console.log(process.cwd());

/**
 * { rss: 17,473,536, 常驻内存   17m
 * heapTotal: 7,524,096, 堆的总内存 7m
 * heapUsed: 4,006,384 } 堆已经使用的内存量 4m
 */

var arr = [];
while(true){
    arr.push(new Object());
    console.log(process.memoryUsage());
}