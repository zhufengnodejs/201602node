function copy(src,target){
    var fs = require("fs");
    fs.readFile(src, function (error, data) {
        if(error){
            console.log(error);
        }else{
            fs.writeFile(target,data, function (error, data) {
                if(error){
                    console.log(error);
                }
            });
        }
    });
}
copy("./mvc.png","./mvc2.png");
