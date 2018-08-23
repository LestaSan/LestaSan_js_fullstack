import React, { Component } from 'react';
import { connect } from 'react-redux';
class TodoList extends Component {

  render() {
    const { inputValue, list, changeInputValue, handleClick, handleDelete } = this.props;
    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={changeInputValue} />
          <button 
            style={{ marginLeft: '10px' }}
            onClick={handleClick}
          >提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li 
                  key={index}
                  onClick={(index) => {handleDelete(index)}}  
                >{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }

}

// 把store里面的数据(state))映射给组件 作为props 
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch  把dispatch挂载到props上
// 要修改store 则是通过mapDispatchToProps修改props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      // console.log(e.target.value);
      const action = {
        type: 'change_input_value',
        target: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      // console.log('123')
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    handleDelete(index) {
      console.log(index.target)
      const action = {
        type: 'delete_item',
        value: index
      }
      dispatch(action);
    }
  }
}

// connect的意思是让 组件(TodoList)与store连接起来
// 连接规则是mapStateToProps 将store数据给组件的props
// 规则2是mapDispatchToProps 修改props里的数据
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);