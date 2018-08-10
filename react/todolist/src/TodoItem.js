import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }


  // 一个组件要从父组件接收参数
  // 只要父组件的render函数被重新执行了，子组件的这个生命周期函数就会被执行 
  // 如果这个组件第一次存在与父组件中 不会执行
  // 如果这个组件之前已经存在于父组件中  它会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将被从页面剔除时刻 执行
  componentWillUnmount() {
    console.log('child componentWillUnmount');
  }

  render() {
    console.log('child render')
    const { content, test } = this.props ;
    // jsx -> createElement -> 虚拟DOM(js对象) -> 
    // return <div><span>item</span></div>
    // return React.createElement('div', {}, React.createElement('span', {}, 'item'))
    return (
      <li
        onClick={this.handleClick}
      >
        {test} - {content}
      </li>
    );
  }

  handleClick() {
    // 父组件传参
    const { deleteItem, index } = this.props;
    deleteItem(index);
    // 相当于调用 this.handleClick  但是这是父组件方法  而当前this指向子组件
    // 回父组件bind(this)
  }
}

// 对TodoItem这个组件做属性校验
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// 给TodoItem的属相设置默认值
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;