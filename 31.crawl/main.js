var async = require('async');
var read = require('./read');
var save = require('./save');
var debug = require('debug')('crawl:main');
var url = 'http://top.baidu.com/category?c=10&fr=topcategory_c10';
debug('开始执行任务');
var categories = [];
var articles = [];
async.series([
    function(done){
        read.category(url,function(err,items){
            categories = items;
            done(err);
        })
    },
    function(done){
        save.category(categories,done);
    },
    function(done){
        console.log(categories);
        async.forEach(categories,function(item,next){
            read.articles(item.url,item.id,function(err,items){
                console.log(items);
                articles = articles.concat(items);
                next();
            })
        },done);
    },
    function(done){
        save.article(articles,function(){
            done();
        })
    }
],function(err,result){
    if(err)
    console.error(err);
   debug('所有的任务都执行完毕!');
})