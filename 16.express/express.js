
function express(){
    function app(){

    }
    app.fns = [];
    //配置中间件
    app.use = function(path,fn){
        if(typeof path == 'function'){
            fn = path;
            path = '/';
        }
        this.fns.push({
            path:path,
            fn:fn
        });
    }
    //配置路由
    app.get = function(path,fn){
        this.fns.push({
            path:path,
            fn:fn
        });
    }
    app.start = function(req,res){
        var i=0;//当前的层的索引
        //定义下一个函数
        function next(){
            //取出每一层
            var layer = app.fns[i++];
            //判断当前用户请求的路径是否和当前路径相匹配
            if(req.url.indexOf(layer.path)==0){
                //如果匹配上的话就执行当前的回调函数
                layer.fn(req,res,next);
            }else{
                //如果不匹配的话就执行一个匹配
                next();
            }
        }
        next();
    }
    return app;
}

module.exports = express;