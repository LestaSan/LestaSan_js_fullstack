import React, { Component } from 'react';
import store from './store/index';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());  //store提供了一个getState()方法获取数据
    this.state = store.getState();
    // console.log(this.state)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    // 订阅store的变化  只要store一改变即执行this.handleStoreChange方法
    store.subscribe(this.handleStoreChange);  
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item',
    };
    store.dispatch(action);
  }

  handleStoreChange() {
    // 一旦发现store改变 就再取一次store里的数据store.getState() 并替换当前state
    this.setState(store.getState());
  }

  handleInputChange(e) {
    // 创建一个action 步骤Action Creators (一句话，见关系图)
    // 告诉管理员store应该做什么 
    // type: '要做的事情是...'  (名称)
    // 事情具体是(改变|增加|..)
    // 把这句话传给store (store上面有dispatch方法， 见关系图)   dispatch(action)
    // 但是store不知道怎么做，需要去查阅手册(reducers)
    // store要把当前数据previousState和当前传话action一并传给reducers  自动的
    const action = {
      type: 'change_inut_value',
      value: e.target.value
    }
    store.dispatch(action);   //  传话
    // console.log(e.target.value);
    
  }

  render() {
    return (
      <div>
        <input value={this.state.inputValue} placeholder="todo info"
        onChange={this.handleInputChange}/>
        <button style={{marginLeft: '10px'}} onClick={this.handleBtnClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;