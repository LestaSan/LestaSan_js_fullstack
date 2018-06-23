// COMMONJS require NODE 内置支持的js模块化方案
// es6 module
// sea.js

//Node.js内置的文件系统模块（fs）
//异步读取一个文件
const fs = require('fs');
let data;


const p = new Promise ((resolve, reject) => { 
    fs.readFile('./f2.txt', 'utf8', (err, data) => {
        if (err) {
            // console.log('出错');
            reject(err);
            // return
        } else {
            console.log('真正的读取完成了');
            console.log('文件的内容' + data);
            resolve(data);
        }
    });
})
p.then(data => {
    console.log('读完了，做其他事')
}).catch(e => {
    console.log(e);
})
// p.catch(e => {
//     console.log(e)
// })

// console.log('读取完成');