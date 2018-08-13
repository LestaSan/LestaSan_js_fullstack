// store -> 管理员 reducer -> 数据记录本(记录数据状态state)
// 管理员不知道数据  需要查阅记录本
// 创建管理员的时候， 需要一并创建记录本 并将记录本交给管理员
import { createStore } from 'redux';
import reducer from './reducer';

// 创建一个管理员 同时将记录本给管理员
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);  //请看文档

export default store;