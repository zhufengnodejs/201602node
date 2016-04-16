/*
 var arr = [1,2,3];

 arr.forEach(function(item){
    console.log(this.name,item);
 },user);
*/
var user = {name:'zfpx'};

function forEach(callback,thisArg){
    for(var i=0;i<this.length;i++){
        callback.call(thisArg,this[i]);
    }
}
 function print(){
     forEach.call(arguments,function(item){
         console.log(this.name,item);
     },user);
     /*forEach(arguments,function(item){
         console.log(this.name,item);
     },user);*/
 }

 print(1,2,3);