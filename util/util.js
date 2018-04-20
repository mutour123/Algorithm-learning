exports.util = {
    /**
     * 生成一个随机数
     * 
     * @param {any} n 随机数范围
     * @returns 随机数
     */
    getRandomNumber(n){
        return Math.round(Math.random()*n)
    },
    /**
     * 生成一个随机数组
     * 
     * @param {any} n 数组内包含的数组个数
     * @param {any} int 随机数范围
     * @returns 随机数组
     */
    getRandomArray(n, int){
        let array = []
        for (let i = 0; i < n; i++){
            array[i] = this.getRandomNumber(int)
        }
        return array
    },
    /**
     * 得到一个顺序数组
     * 
     * @param {any} int 范围
     * @returns 
     */
    getOrderArray(int){
        const arr = []
        for(let i = 0; i < int; i++){
            arr[i] = i
        } 
        return arr
    },
    /**
     * 用于交换两个引用变量的值
     * 
     * @param {any} x 
     * @param {any} y 
     */
    swap(x, y){
        return [y, x]
    },
    /**
     * 深拷贝
     * 
     * @param {any} obj 
     * @returns 
     */
    deepCopy(obj){
        if(typeof obj != 'object'){
            return
        }
        let newObj;
        if(obj instanceof Array){
            newObj = []
        }else{
            newObj = {}
        }

        for(let key in obj) {
            if( typeof obj[key] != 'object'){
                newObj[key] = obj[key]
            }else{
                if(obj[key] == null){
                    obj[key] = null
                }else{
                    newObj[key] = this.deepCopy(obj[key])
                }
            }
        }
        return newObj
    }
   
}
