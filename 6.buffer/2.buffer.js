//buffer像是一个字节数组
var buf1 = new Buffer(6);//指定buffer的长度
buf1.fill(0);//把buffer中的所有元素置为0
console.log(buf1);

//数组里一定的是一个数字，范围在0-255之间
var buf2 = new Buffer([0x15,0x16,0x17]);
console.log(buf2);// 0f 10 11
//通过字符串来创建
var buf3 = new Buffer("珠峰",'utf8');// 97 98 99
console.log(buf3);//e78fa0
console.log(buf3.toString('ascii',3,6));
console.log(parseInt("e5",16));

//一个汉字在UTF8编码里是3个字节
var buff11 = new Buffer("珠");
var buff22 = new Buffer("峰");
//console.log(Buffer.concat([buff11,buff22],3).toString('utf8'));
var result = new Buffer(6);
//Buffer.copy(targetBuffer,targetstart,sourcestart,sourceend)
buff11.copy(result,0,0,3);
buff22.copy(result,3,0,3);

console.log(Buffer.isBuffer(buff11));
var s = "珠峰培训";
console.log(s.length);
console.log(Buffer.byteLength(s,'utf8'));


console.log(result.toString());






