// 1. 有一个二维数组
// 2. 每一行都从左到右递增的顺序
// 每一列从上到下递增
// 3. 完成一个函数， 判断是否有这个数。
// target 10
// 1,5,8,10,31,24
// [[1,2,3,4],
// [5,9,10,11],
// [13,20,21,23]
// ]

function find(target, arr) {
    let i = 0; //row
    let j = arr[i].length - 1; //每行最后一个

    while(i < arr.length && j >= 0) {
        if(arr[i][j] < target) {
            i++;
        } else if (arr[i][j] > target) {
            j--;
        } else return `第${i+1}组第${j+1}个`;
        return false
    }
}

console.log(find(10, [
    [1,2,3,4], 
    [5,9,10,11], 
    [13,20,21,23]
]))