
const Singleton = require('./offer/Singleton').Singleton
const FindeRepeating = require('./offer/arrayDeweighting').FindeRepeating
const Util = require('./util/util').util

const twoPoints = require('./offer/twoPoints').twoPoints
//深拷贝
let obj = {
    name: "杨念",
    age: 18,
    class: {math: 100},
    grade:[1, 2, 3],
    func: function (){
        console.log(111)
    }
}
let newObj = Util.deepCopy(obj)
obj.age = 20
obj.class.math = 99
obj.grade[0] = 22
console.log(newObj)
console.log(obj)















