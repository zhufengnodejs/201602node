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
//$inc = increment
PersonModel.update({name:'zfpx'},{$inc:{age:2}},{multi:true},
function(err,result){
    if(err){
        console.error(err);
    }else{
        console.log(result)
    }

    PersonModel.remove({age:11},function(err,result){
        if(err){
            console.error(err);
        }else{
            console.log(result)
        }
    });

})
