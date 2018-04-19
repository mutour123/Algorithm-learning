//数组中重复的数字：
/** 
 * 在一个长度为n的数组里的所有数字都在0~n-1的范围内。
 * 数组中某些数字是重复的，但是不知道有几个数字重复了，
 * 也不知道重复了几次。请找出数组中任意一个重复的数字。
 * 例如：如果输入长度为7的数组{2, 3, 1, 0, 2, 5, 3 }
 * 那么对应的输出是重复的数字 2 或者 3
 * 
*/

/**
 * 第一中解法:
 * 时间复杂度为O(n)，但是需要一个o(n)的辅助空间
 * */
function FindeRepeating (arr) {
    //找的数组中重复的数字
    let set = new Set()
    let setR = new Set()
    arr.forEach(element => {
        if(!set.has(element)){
            set.add(element)
        }else{
            setR.add(element)
        }
    });
    return setR
}


{   
    function notRun2(){
        console.time("time1:")
        let set = FindeRepeating(array)
        // for (let item of set.values()) {
        //     console.log(item)
        // }
        console.log(set.size)
        console.timeEnd("time1:")
    }
}
/**
 * 第二种解法:
 * 时间复杂度为O(0),但是需要改变原数组，
 * 由于使用递归，当递归过多会出现堆栈溢出
 * */
{
    function notRun1(){
        console.time("time:")
        let setR = new Set()
        function isR(i) {
            if(i >= array.length){
                return
            }
            if(array[i] == i) {//如果数字等于下标签， 进行下一个
                isR(++i)
            }else{               
                if(array[array[i]] == array[i]){//判断array数组中第array[i]的值是否等于array[i], 如果相等就找到一个重复的元素
                    setR.add(array[i])
                    isR(++i)
                    
                }else{
                    if(array[i] < i ){
                        let temp = array[i]
                        array[i] = array[array[i]]
                        array[temp] = temp
                        isR(++i) 
                    }else{
                        let temp = array[i]
                        array[i] = array[array[i]]
                        array[temp] = temp  
                        isR(i)                  
                    }                                                
                }      
            }
        }
    console.time("time2")
    isR(0)
    for (let item of setR.values()) {
        console.log(item)
    }
    console.timeEnd("time2")
    }
}
/**
 * 第三种解法：
 * 使用for循环和while
 * 时间效率为O(1),不使用辅助空间，会改变数组。
 * 效率是所有算法中时间效率最好的
 * 
 */
 {
    function notRun(){ //不然下面代码的执行
        let setR = new Set() 
        console.time("time3")
        for(let i = 0; i < array.length; i++ ){
            if(array[i] == i ){
                continue
            }else{//需要换位置，然后带比较
                while(!(array[i] == i)){
                    if(array[i] == array[array[i]]){
                        setR.add(array[i])
                        break
                    }
                    
                    if (array[i] < i){
                        let temp = array[i]
                        array[i] = array[array[i]]
                        array[temp] = temp
                        setR.add(array[i])
                        break  
                    }else{
                        let temp = array[i]
                        array[i] = array[array[i]]
                        array[temp] = temp
                    } 
                }   
            }
        }
        console.log(setR.size)
        console.timeEnd("time3")
    }
}



exports.FindeRepeating = FindeRepeating