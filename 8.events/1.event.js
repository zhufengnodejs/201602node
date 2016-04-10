var EventEmitter =  require('events');
var util = require('util');
function Girl(){
  this.age = 15;
  this.name = '王萌';
}
// __proto__ -> new EventEmitter().__proto__->EventEmitter.prototype
util.inherits(Girl,EventEmitter);
Girl.prototype = new EventEmitter();
var girl = new Girl();
var callback = function(){
    console.log('吃饭去吧');
};
//绑定事件监听
girl.once('hungry',callback);
//移除对应的回调函数
girl.removeListener('hungry',callback);
girl.addListener('sad',function(things,things2){
    console.log('上商场买'+things+','+things2+'去');
})
girl.emit('hungry');
girl.emit('hungry');
girl.emit('hungry');
girl.emit('sad','LV','哭泣');
girl.emit('sad','包包','哭泣');