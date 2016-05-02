var child_process = require('child_process');
console.log(process.execPath);

function execNodeFile(filename){
    //执行一个命令
    var pro = child_process.spawn(process.execPath,[filename]);
    //把子进程的标准输出注入到当前主进程的标准输出
    pro.stdout.pipe(process.stdout);
    pro.stderr.pipe(process.stderr);
    //当子进程出错的的时候
    pro.on('error',function(code){
        console.error('error');
    })
    //当子进程结束的时候主进程也关闭掉
    pro.on('close',function(code){
        console.error('exit');
       //process.exit();
    })
}

execNodeFile('1.js');