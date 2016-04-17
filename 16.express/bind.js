function foo() {this.name = 'zfpx1';}
var obj = {name: 'zfpx2'};
var newFoo = foo.bind(obj);
var f = new newFoo();
console.log(f.name);// zfpx1 zfpx2

Function.prototype.bind = function (oThis) {
            var fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(this instanceof fNOP? this: oThis || this)};
        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;};


/**
 * new 一个函数的原理和过程
 * 1. 创建一个空对象，然后让空对象的__proto__指向函数.prototype
 * 2. 把这个空对象作为this指针，调用此函数
 * 3. 如果此函数返回一个引用类型的返回值，那就就把这个引用类型的返回值赋给  接收对象
 * 4. 如果此函数没有返回值或者返回值类型的返回值的话，那就就返回this
 */
