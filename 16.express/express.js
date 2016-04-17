
function express(){
    function app(){

    }
    app.fns = [];
    //配置中间件
    app.use = function(fn){
        this.fns.push({
            path:'/',
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
        function next(){
            var layer = app.fns[i++];
            if(req.url.indexOf(layer.path)==0){
                layer.fn(req,res,next);
            }else{
                next();
            }
        }
        next();
    }
    return app;
}

module.exports = express;