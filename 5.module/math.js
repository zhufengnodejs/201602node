/**
 * 1. 每个一个JS文件都是一个独立 的模块
 * 2. 模块内部的变量都是私有变量，外部其它模块无法访问
 */

function add(a,b){
    return a+b;
}
console.log('math');
//向外暴露出一个方法
exports.add = add;
//console.log(module);
/**
 * id 当前模块的ID 当前文件绝对路径
 * exports 当前模块的导出对象，一次导出，终身使用
 * parent 谁require了这个模块，就是谁生了这个模块，谁就是它父母
 * children 它require了谁，谁就是它儿子
 * paths 模块查找路径
 **/