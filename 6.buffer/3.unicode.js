console.log((20005).toString(16));
/**
 * 1. 得到珠的unicode码。转成二进制
 * 2. 从后往前依次填 入1110xxxx 10xxxxxx 10xxxxxx,不够的补0
 * 3. 把个结果转成16进制
 * \u73e0
 */
console.log((29664).toString(2));//
//111001111000111110100000
console.log(parseInt("111001111000111110100000",2));
console.log((15175584).toString(16));//e78fa0

