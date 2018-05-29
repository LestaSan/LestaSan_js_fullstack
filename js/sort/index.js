// var arr = new Array;
// for (var i = 0; i < 100; i++) {
//     arr[i] = 0;
    
// }
// console.log(arr.length);
// console.log(arr);
// const arr2 = [35,99,18,76,12];

const src_arr = [35, 99, 18, 76, 12, 12];
function sort() {
    const arr = [];
    // 方法是：利用数组的下标，数字大小在下标范围之内，
    // 下标是天然有顺序的  ——>桶排序
    var a = [];
    for (let i = 0; i < 100; i++) {
        // 桶做好了
        a[i] = 0;
    }
    for (let i = 0; i < src_arr.length; i++) {
        const item = src_arr[i];
        a[item] += 1;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= 1) {
            for (let j = 0; j < a[i]; j++) {
                arr.push(i);
            }
            
        }
    }
    return arr;
}
const sorted_arr = sort();
console.log(sorted_arr);
