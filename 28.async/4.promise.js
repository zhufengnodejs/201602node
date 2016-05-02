/**
 **/

var Defer = function(){
    var callback,value;
    return {
        resolve:function(_value){
            value = _value;
            callback(value);
        },
        promise:{
            then:function(_callback){
                callback = _callback;
            }
        }
    }
}

var defer = Defer();
var fs = require('fs');
fs.readFile('1.txt','utf8',function(err,data){
  defer.resolve(data);
});
//注册成功之后的回调函数
defer.promise.then(function(data){
    console.log(data);
});