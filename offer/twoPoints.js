//二分法

/**
 * 二分法
 * 
 * 
 * @param {any} arr 需要
 * @param {any} int 
 * @returns 
 */
function twoPoints(arr, target){
    let tp =function _twoPoints(target, arr, l, r){//[l, r)
        if(l > r){
            return false
        }
        let mid = Math.floor(l + (r - l) / 2)
        if(target == arr[mid]){
            return true
        }else if(target > arr[mid]) {
            return _twoPoints(target, arr, mid+1, r)
        }else {
            return _twoPoints(target, arr, l, mid-1)
        }
    }

    return tp(target, arr, 0, arr.length-1)
}

exports.twoPoints = twoPoints