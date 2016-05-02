/**
 * 1.普通的promise
 * 2.promise可以注册多个then
 * 3.失败之后的回调
 * 4. 
 **/

var Defer = function(){
    var successes=[],errors=[],value,reason;
    return {
        resolve:function(_value){ //2.txt
            value = _value;
            successes.forEach(function(success){
                success(value);
            })
        },
        //失败之后的回调
        reject:function(_reason){
            reason = _reason;
            errors.forEach(function(error){
                error(reason);
            })
        },
        promise:{
            then:function(_callback){
                var d = Defer();
                var cb = function(_value){// 2.txt
                    d.resolve(_callback(value));
                }
                successes.push(cb);
                return d.promise;
            },
            error:function(_callback){
                errors.push(_callback);
                return this;
            }
        }
    }
}


var fs = require('fs');
function readFile(filename){
    var defer = Defer();
    fs.readFile(filename,'utf8',function(err,data){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(data);
        }
    });
    return defer.promise;
}

//注册成功之后的回调函数
var promise  = readFile('1.txt');
promise.then(function(data){// 2.txt
    return fs.readFileSync(data,'utf8');
}).then(function(data){
   console.log(data);
})