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
//ES6语法
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


exports.Singleton = Singleton

