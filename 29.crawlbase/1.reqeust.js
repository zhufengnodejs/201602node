/**
 * request
 * http.reqeust
 */
var request = require('request');

request('http://www.163.com',function(err,response,body){
    if(err){
        console.error(err);
    }
    console.log(body);
});

