function say(callback){
    setTimeout(function(){
        callback();
    },1000)
}

function print(){
    console.log('hello world');
}

say(print);