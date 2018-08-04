// 入口文件

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

//PWA progressive web applicattion  写网页形式写手机APP应用
// https协议的服务器上 
// import registerServiceWorker from './registerServiceWorker';

// 将APP组件挂载到根结点下  <App />是jsx语法  头部需引入React才能解析
ReactDOM.render(<TodoList />, document.getElementById('root'));
// registerServiceWorker();
