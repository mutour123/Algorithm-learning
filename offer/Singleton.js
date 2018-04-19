//使用js实现一个单例

//ES5的做法
// function Singleton (name, sex) {
//     if (Singleton.real) {//如果已经被实例化了，那就直接返回这个实例
//         return Singleton.real
//     }
//     if (!this instanceof Singleton) {//如果不是通过new的方式调用
//         return new Singleton(name, sex)
//     }
   
//     this.name = name
//     this.sex = sex
//     Singleton.real = this
//     return this
// }

/**
 * 单例类
 * 
 * 
 * @class Singleton
 */
class Singleton {
    constructor(name, sex) {
        if (Singleton.real){
            return Singleton.real
        }
        this.name = name
        this.sex = sex
        Singleton.real = this
    }
}
//单例测试
/*{
    let me = new Singleton("杨念", "男")
    console.log(me.name)
    console.log(me.sex)
    console.log("++++++++++++")
    let you = new Singleton("小念", 22)//这里有实例化了一个对象，但是没有效果，始终都会返回第一次实例的对象
    console.log(me.name)
    console.log(me.sex)
}
*/

exports.Singleton = Singleton

