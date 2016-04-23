var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost:27017/zfpx");
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//数据库的集合结构定义 定义字段的名字和类型
var PersonSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});
//定义一个数据库操作模型
var PersonModel = mongoose.model('person',PersonSchema);
//创建实体,可以操作数据库
var PersonEntity = new PersonModel({
    name:'zfpx',
    age:7,
    email:'zhang_renyang@126.com'
});
//把当前的实体保存到数据库中
PersonEntity.save(function(err,doc){
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});

PersonModel.create({
    name:'zfpx',
    age:7,
    email:'zhang_renyang@126.com'
},function(err,doc){
    if(err){
        console.error(err);
    }else{
        console.log(doc);
    }
});

PersonModel.find({age:7},function(err,docs){
    if(err){
        console.error(err);
    }else{
        console.log(docs.length);
    }
});