var querystring = require('querystring');
var input = 'username==zfpx@password==444';
var obj = querystring.parse(input,'@','==',{maxKeys:0});
console.log(obj);

console.log(querystring.stringify(obj,'@','=='));