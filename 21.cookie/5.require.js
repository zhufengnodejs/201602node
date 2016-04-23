var user = require('./user');

require('fs').writeFileSync('./user.json',"[]");
/**
 * path.resolve  得到当前模块的绝对路径
 * require.resolve 指定模块的绝对路径
 */
delete require.cache[require.resolve('./user')];
var user1 = require('./user');
console.log(user1);
console.log(user === user1);
