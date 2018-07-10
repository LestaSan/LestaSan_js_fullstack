const add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } 
    return NaN;
};

// es6
// export const add = (a, b) => {
//     return a + b
// }

// common.js
// console.log(add(1, '2'))  //测试用例
module.exports = { add };

