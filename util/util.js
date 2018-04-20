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
    }
   
}
