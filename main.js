
const Singleton = require('./offer/Singleton').Singleton
const FindeRepeating = require('./offer/arrayDeweighting').FindeRepeating
const Util = require('./util/util').util

const twoPoints = require('./offer/twoPoints').twoPoints
//二分查询
console.time("time1")
let arr = Util.getOrderArray(100000000)
console.timeEnd("time1")
let target = 55
console.time("time:")
let result = twoPoints(arr, target)
console.log(result)
console.timeEnd("time:")
















