var request = require('request');
var cheerio = require('cheerio');
var debug = require('debug')('crawl:read');
var iconv = require('iconv-lite');
var urlTool = require('url');
//http://top.baidu.com/category?c=10&fr=topcategory_c10
exports.category = function (url, callback) {
    debug('读取分类列表', url);
    var categories = [];
    //encoding 为null表示希望得到的buffer,由我自己来进行转码成字符串
    request({url: url, encoding: null}, function (err, res, body) {
        //把一个gbk类型的buffer转成utf8字符串
        body = iconv.decode(body, 'gbk');
        var $ = cheerio.load(body);
        $('.hd .title a').each(function () {
            var $me = $(this);
            var item = {
                name: $me.text().trim(),
                url: 'http://top.baidu.com/' + $me.attr('href').slice(2)
            }
            item.id = urlTool.parse(item.url, true).query.b;
            categories.push(item);
        });
        callback(null, categories);
    })
}
/*
exports.category('http://top.baidu.com/category?c=10&fr=topcategory_c10',function(err,result){
    console.log(result);
});*/
//http://top.baidu.com/buzz?b=1510&c=10
exports.articles = function(url,cid,callback){
  debug('读取分类下面的书籍',url);
  var articles = [];
    request({url: url, encoding: null}, function (err, res, body) {
        //把一个gbk类型的buffer转成utf8字符串
        body = iconv.decode(body, 'gbk');
        var $ = cheerio.load(body);
        $('.keyword a').each(function () {
            var $me = $(this);
            var item = {
                name:$me.text().trim(),
                url:$me.attr('href'),
                cid:cid
            }
            if(item.name != 'search')
                articles.push(item);
        });
        callback(null,articles);
    })
}
/*

exports.articles('http://top.baidu.com/buzz?b=1510&c=10',151,function(err,result){
    console.log(result);
});*/
