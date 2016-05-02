var cheerio = require('cheerio');
var $ = cheerio.load('<h1 class="title"> hello zfpx</h1>');
$('h1.title').text('hello node.js');
$('h1.title').addClass('welcome');
//console.log($);
//console.log($.find('.welcome'));
console.log($.html());
