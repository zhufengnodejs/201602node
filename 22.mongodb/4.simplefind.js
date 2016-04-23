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
/*
PersonModel.create([
    { name:"zfpx1", age:1 },
    { name:"zfpx2", age:2 },
    { name:"zfpx3", age:3 },
    { name:"zfpx4", age:4 },
    { name:"zfpx5", age:5 },
    { name:"zfpx6", age:6},
    { name:"zfpx7", age:7 },
    { name:"zfpx8", age:8 },
    { name:"zfpx9", age:9},
    { name:"zfpx10",age:10 }
], function(error,docs) {
    if(error) {
        console.log(error);
    } else {
        console.log('save ok');
    }
});*/

/*PersonModel.findById("571b3fb7a0d9be641985984f",function(err,doc){
    console.log(doc);
});*/

/*PersonModel.find({age:{$in:[3,4]}},function(err,doc){
    console.log(doc);
});*/

/*PersonModel.find({home:{$exists:true}},function(err,doc){
    console.log(doc);
});*/
// exec 真正执行查询
PersonModel.find().sort({age:1}).skip(3).limit(3).exec(function(err,docs){
    console.log(docs);
});