//把参数函数放在下一个事件环中执行

/*
setTimeout(function(){
    console.log('setTimeout');
},1000);
*/

setImmediate(function(){
    console.log('setImmediate');
});

//放在当前任务列表的末尾
var i=0;
function next(){
    process.nextTick(function(){
        console.log('nextTick'+(i++));
        next();
    });
}
next();
