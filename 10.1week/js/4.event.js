//var EventEmitter = require('events');
function EventEmitter(){
    //存放我们的事件和事件监听
   this._events = {};
}
//注册监听
/**
 * @param type 事件的类型
 * @param listener 事件发生的时候执行的回调
 */
EventEmitter.prototype.on = function(type,listener){
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type] = [listener];
    }
}

EventEmitter.prototype.once = function(type,listener){
    var self = this;
    function g(){
        console.log(self._events[type]);
      for(var i=0;i<self._events[type].length;i++){
          if(g ==self._events[type][i] ){
              self._events[type].splice(i,1);
              break;
          }
      }
        listener.apply(self,arguments);
    }
    if(this._events[type]){
        this._events[type].push(g);
    }else{
        this._events[type] = [g];
    }
}

EventEmitter.prototype.emit = function(type){
   var args =  Array.prototype.slice.call(arguments,1);
    this._events[type].forEach(function(listener){
        listener.apply(null,args);
    })
}

function Girl(){
    this.name = '高';
     this.age = 18;
}
Girl.prototype= new EventEmitter();

var girl = new Girl();

girl.once('饿',function(food){
    console.log('吃',food);
});
girl.once('饿',function(food){
    console.log('吃',food);
});

girl.emit('饿','面包');