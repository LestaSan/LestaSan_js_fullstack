 // Fragment占位符 可替代最外层div标签()隐藏外层标签
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './style.css'

class TodoList extends Component {
  constructor(props) {
    // 调用父类构造函数(Component)里的props --> super
    super(props);
    // 定义数据 (定义在状态里)  this.state为组件状态
    // 当组件的state或者props发生改变的时候，render函数就会重新执行
    // 当父组件render函数被运行时，它的子组件的render函数都将被重新运行一次
    this.state = {
      inputValue: '',
      list: []
    };
    this.handlelInputChange = this.handlelInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  // 生命周期函数 在组建即将被挂载到页面上的时刻自动执行
  componentWillMount() {
    console.log('componentWillMount')
  }

  //页面挂载完之后执行
  componentDidMount() {
    console.log('after')
    axios.get('/api/todolist')
      .then((res) => {
        console.log(res.data)
        this.setState(() => ({
          list: [...res.data]
        }))
        // console.log(this.state.list)
      })
      .catch(() => { alert('error') })

  }

//   // 组件更新之前被执行
//   shouldComponentUpdate()  {
//     console.log('shouldComponentUpdate')
//     return true;
//   }
// o
//   // 组件更新前执行  但是在shouldComponentUpdate之后
//   // 如果shouldComponentUpdate 返回false  则不执行  true则执行
//   componentWillUpdate() {
//     console.log('componentWillUpdate');

//   }

//   // 组件更新完之后执行
//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

  render() {
    console.log('parent render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handlelInputChange}
            ref={(current) => { this.input = current }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {
            this.getTodoItem()
          }
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        // 能不用index做key值就不要用index做key值
        <TodoItem
          key={item}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handlelInputChange(e) {
    // console.log(e);
    // const value = e.target.value;
    const value = this.input.value
    this.setState(() => ({inputValue: value}))
    // this.setState({
    //   inputValue: value
    // })
  }

  handleBtnClick() {
    // setState是一个异步函数，它还可以接受一个回调函数， 当前面执行完后，执行回调函数
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }), () => {
      console.log(this.ul.querySelectorAll('li').length);
    })
    // console.log(this.ul.querySelectorAll('div').length); // 结果总会少一个
    // 因为setState是异步函数 所以这里console可能先一步执行了 没有等页面更新后
    // 解决方案 setState的回调函数 

    // this.setState({
    //   //...this.state.list  展开原先state.list中的每一项
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    // console.log(this.state.list)
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      // console.log({list})
      return {list}
  
    })
    // console.log(index);
    // const list = [...this.state.list];
    // list.splice(index, 1);
    // this.setState({
    //   list: list
    // })
  }
}

export default TodoList;