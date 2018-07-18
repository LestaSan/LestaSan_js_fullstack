import React, { Component } from 'react';
import Notes from './components/Notes';
import './App.css'; //style
import 'semantic-ui-css/semantic.min.css'

// .vue里面三部分  template js style
// 当前项目里后缀为.js
// .js负责输出组件类   继承概念   模板template呢？
// react中有jsx语法  在render部分中  
// 组件会自动调用render方法
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
