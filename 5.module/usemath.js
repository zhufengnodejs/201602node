/**
 * 同步方法的结果通过函数调用返回值来接收
 * 异步方法的结果通过把回调函数传进去，然后等结果OK了再由厨师通知服务员
 */
var math1 = require('./math.js');
//console.log(require.cache);//cache 对象中存放着所有的模块缓存
//从模块缓存中删除此模块
delete require.cache[require.resolve('./math.js')];
var math2 = require('./math.js');
console.log(math1 === math2)
console.log(math1.add(1,2));
//获取一个模块的绝对路径
console.log(require.resolve('./math.js'));