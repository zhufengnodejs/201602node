
var arr = [1,2,3];
/**
 *
 */
var result  = arr.reduceRight(function(current,next){
    console.log(current,next);
    return current+next;
},0);

console.log(result);