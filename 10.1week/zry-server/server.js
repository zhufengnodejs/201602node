#!/usr/bin/env node
/**
 * 启动一个HTTP服务器
 * 并且能自动响应当前目录(执行该命令的目录)下面的静态文件
 */
var http = require('http');
var mime = require('mime');
var path = require('path');
var fs = require('fs');
var port = process.argv[2]?parseInt(process.argv[2]):8080;
var html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Title</title></head><body><div></div></body></html>';
http.createServer(function (req, res) {
    if (req.url == '/') {
        var str = '<ul>';
        fs.readdir('.', function (err, files) {
            files.forEach(function (file) {
                str += '<li><a href="/' + file + '">' + file + '</a></li>';
            })
            str += '</ul>';
            html = html.replace('<div></div>', str);
                res.end(html);
        })
    } else {
        // /index.html
        //判断当前目录是否存在该文件，脚本在哪个文件夹下执行，则当前目录就在哪里
        fs.exists(req.url.slice(1), function (exists) {
            if (exists) {
                fs.stat(req.url.slice(1), function (err, stat) {
                    if (stat.isFile()) {
                        res.setHeader('Content-Type', mime.lookup(req.url) + ';charset=utf-8');
                        fs.readFile(req.url.slice(1), function (err, data) {
                            res.end(data);
                        })
                    } else {//如果说这是一个目录的话
                        fs.readdir(req.url.slice(1), function (err, subfiles) {
                            var str = '<ul>';
                            subfiles.forEach(function (file) {
                                str += '<li><a href="' + path.join(req.url, file) + '">' + file + '</a></li>';
                            })
                            str += '</ul>';
                            html = html.replace('<div></div>', str);
                                res.end(html);
                        })
                    }
                })

            } else {
                res.end('文件找不到');
            }
        })
    }

}).listen(port,function(){
    console.log('服务器在'+port+'端口启动');
});