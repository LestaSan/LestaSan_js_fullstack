react-redux学习

- 在入口文件index.js里面
const App = (
    // Provider连接了store 那么其里面的组件都可以获得sotre里的内容
    <Provider store={store}>
        <TodoList/>
    </Provider>
);
ReactDOM.render(App, document.getElementById('root'));

- 在组件odoList里面 

1. 先将connect引用过来 用来连接组件与store
2. connect(a, b)(TodoList)可以接收两个参数 mapStateToProps, mapDispatchToProps
3. mapStateToProps将store里面的数据转换成组件的props -> this.inputValue 变为 this.props.inputValue 
4. mapDispatchToProps可以派生action修改store 进而修改组件props 
      -> this.Add.bind(this) 变为 this.props.Add
5. 流程： mapStateToProps -> 组件props -> store数据要更新 -> mapDispatchToProps -> dispatch(action)   -> store -> reducer -> mapStateToProps...

<input value={this.props.inputValue} onChange={this.props.changeInputValue} />
connect(mapStateToProps, mapDispatchToProps)(TodoList)

          

 
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        target: e.target.value
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);