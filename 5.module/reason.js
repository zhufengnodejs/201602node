//require
var module = {exports:{}};
(function(exports,require,module,__filename,__dirname){
    var exports = module.exports;
    ////////////////////////////
        function add(a,b){
            return a+b;
        }
    //向外暴露出一个方法
        exports = add;
    /////////////////////
    //最后返回的一定module.exports
    return module.exports;{}
});