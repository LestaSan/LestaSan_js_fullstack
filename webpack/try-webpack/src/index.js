// 文件引用 按文件引用顺序打包文件 依赖
// require('./style.less/')   
require('./style/normalize')   
require('./style/index')   
const format = require('utils/format')
const { log } = require('./utils')

log(format('hello world'))
document.querySelector('.superman').style.display = 'block'

log(_.map([1,2,3], (item) => item * 2))

// log('hello world')

