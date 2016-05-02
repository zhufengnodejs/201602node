var connection = require('./mysql').connection;
var async = require('async');
var debug = require('debug')('crawl:save');
//保存所有的分类到数据库中
exports.category = function (categories, callback) {
    async.forEach(categories, function (category, done) {
        debug('保存分类' + category.name);
        connection.query('replace into category(id,name,url) values(?,?,?)', [category.id, category.name, category.url], function (err, result) {
            console.log(err);
            done(err, result);
        });
    }, callback);
}

/*
 exports.category([{id:1,name:'name',url:'url'}],function(){
 console.log('all done');
 });*/

//保存所有的文章
exports.article = function (articles, callback) {
    debug('保存文章');
    async.forEach(articles, function (article, done) {
        debug('保存文章' + article.name);
        connection.query('replace into article(name,url,cid) values(?,?,?)', [article.name, article.url, article.cid], function (err, result) {
            done(err, result);
        });
    }, callback);
}

/*
exports.article([{name: 'name', url: 'url', cid: 1}], function () {
    console.log('all done');
});*/
