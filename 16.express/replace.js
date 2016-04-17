var s = 'abc1 def2 fhi3';
/**
 * 0 匹配到的子串
 * 1 第一分组
 * 2 第二个分组
 * 3 子串在原字符串中的索引
 * 4 原字符串
 */
var result = s.replace(/(\w+)(\d+)/g,function(matched,p1,index,original){
    console.log(arguments);
    return matched.toUpperCase();
})
console.log(result);