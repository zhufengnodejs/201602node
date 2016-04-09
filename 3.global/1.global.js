/**
 * global 是全局对象
 * 1. 在NODE中global对象的属性可能在程序的任何地方被访问
 * 2. 能在程序任何地方访问的对象都是global的属性
 */
//console.log(global);

console.log('log');
console.info('info');

console.error('error');
console.warn('warn');
console.time('cost');
for(var i=0;i<10000;i++){

}
console.timeEnd('cost');//计时器使用的总时间

console.log(__filename);//当前模块的文件绝对路径
console.log(__dirname);//当前模块的所在的目录的绝对路径






