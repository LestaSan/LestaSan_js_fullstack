import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content, test } = this.props ;
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