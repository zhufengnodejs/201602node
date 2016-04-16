var fs = require('fs');
var rs = fs.createReadStream('./1.txt');
var ws = fs.createWriteStream('./2.txt');
rs.pipe(ws);
/**
 * response是可写流
 *  write end
 *
 */

fs.createReadStream('./1.txt').pipe(response);