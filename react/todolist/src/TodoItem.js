import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props ;
    return (
      <li
        onClick={this.handleClick}
      >
        {content}
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

export default TodoItem;