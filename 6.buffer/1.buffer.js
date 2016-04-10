var arr = [];
arr.push(1);

console.log(Buffer);

var sum =0;
for(var i=0;i<8;i++){
    sum += Math.pow(2,i);
}
console.log(sum);

console.log(Math.pow(2,8)-1);
///parseInt把任意的进制转成10进制
console.log(parseInt("255",10));//255
console.log(parseInt("11111111",2));//255
console.log(parseInt("0xff",16));//255
console.log(15+16*15);
//把10进制转成任意进制
console.log((255).toString(16));// 0xff
console.log((255).toString(2));// 0xff