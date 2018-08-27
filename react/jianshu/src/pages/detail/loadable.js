import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  // 此处import是异步加载语法 ./index 当前组件的index
  loader: () => import('./'),
  // 加载需要时间 loading是一个函数 在加载的时候执行
  loading() {
    return <div>正在加载...</div>
  }
});

export default () => <LoadableComponent/>
