
const Singleton = require('./offer/Singleton').Singleton

let me = new Singleton("杨念", "男")
console.log(me.name)
console.log(me.sex)
console.log("++++++++++++")
let you = new Singleton("小念", 22)//这里有实例化了一个对象，但是没有效果，始终都会返回第一次实例的对象
console.log(me.name)
console.log(me.sex)
