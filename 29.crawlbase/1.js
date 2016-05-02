var count = 0;
function print(){
    console.log(new Date().toLocaleString());
    if(count ++ <10)
        print();
}
print();