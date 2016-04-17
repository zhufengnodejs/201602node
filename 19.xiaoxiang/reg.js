//导入核心模块http
var http = require('http');
/**
 * 1. 能在特定的IP 特定端口上监听 客户端的请求
 * 2. 当请求到来的时候能执行监听函数，并返回响应
 *
 * 创建一个服务器
 * 指定监听函数 每当有客户端请求到来的时候执行的函数
 * request 代表客户端的请求，可以从中获取请求过来的信息
 * response 代表向客户端发的响应，可以通过它向客户端发响应
 *
 */
var fs = require('fs');
var mime = require('mime');
var path = require('path');
//node亲生的模块，帮助我们解析请求中的URL的
var url = require('url');
var users = [];
var server = http.createServer(function(request,response){
    //把url转成url对象
    var urlObj = url.parse(request.url,true);


    //pathname 指的是路径名 问号和端口号中间的那一部分
    if(urlObj.pathname == '/'){
        response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile('./reg.html',function(err,data){
            response.end(data);
        })
    }else if(urlObj.pathname == '/reg'){
        if(request.method === 'PUT'){
            //每当服务器收到客户端发过来的一段数据的时候就会触发data事件
            console.log("reg");
            var str = '';
            request.on('data',function(data){
                str+=data.toString();
            });
            //当所有的数据全部接收完毕的时候会会触发end事件，这时请求体的数据就接收完整了
            request.on('end',function(){
                //转成对象追加到用户列表里
                users.push(JSON.parse(str));
                console.log(JSON.stringify(users));
                //最后返回用户列表
                response.end(JSON.stringify(users));
            })
        }
        if(request.method === 'DELETE'){
            console.log("delete");
            var str = '';
            request.on('data',function(data){
                str+=data.toString();
            });

            request.on('end',function(){
                str = JSON.parse(str);
                var flg = 0;
                for(i=0;i<users.length;i++){
                    if(str.username == users[i].username && str.age == users[i].age){
                        flg = 1;
                        users.splice(i,1)
                        break;
                    }else {
                        flg = 0;
                    }
                }
                console.log(flg);
                console.log(users);
                //最后返回用户列表
                response.end(JSON.stringify(users));
            })
        }

        if(request.method === 'POST'){
            console.log("search");
            var str = '';
            request.on('data',function(data){
                str+=data.toString();
            });
            var search = [];
            request.on('end',function(){
                str = JSON.parse(str);
                var flg = 0;
                for(i=0;i<users.length;i++){
                    if(str.username == users[i].username && str.age == users[i].age){
                        flg = 1;
                        search.push(users[i]);
                    }else {
                        flg = 0;
                    }
                }
                console.log(flg);
                console.log(search);
                response.end(JSON.stringify(search));
                //最后返回用户列表

            })
        }



        if(request.method === 'GET'){
            console.log("getList");
            response.end(JSON.stringify(users));

        }

    }





});
//在8080端口上进行监听 ，主机名是localhost
// 0 - 65535
// ps -ef | grep node
server.listen(9090,'localhost');