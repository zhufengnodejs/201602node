var fs = require('fs');
//代表当前模块
/*
paths:
    [ 'e:\\201602node\\5.module\\node_modules',
        'e:\\201602node\\node_modules',
        'e:\\node_modules' ] }
*/

console.log(module);
var zfpx = require('zfpx');
//var zfpx = require('./node_modules/zfpx/app');
console.log(zfpx.add(1,2));
console.log(zfpx.minus(1,2));