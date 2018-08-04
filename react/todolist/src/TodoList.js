import React, { Component, Fragment } from 'react'; // Fragment占位符 可替代最外层div标签()隐藏外层标签

class TodoList extends Component {
    constructor(props) {
        // 调用父类构造函数(Component)里的props --> super
        super(props);
        // 定义数据 (定义在状态里)  this.state为组件状态
        this.state = {
            inputValue: '',
            list: [
                
            ]
        }
    }

    handlelInputChange(e) {
        // console.log(e);
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    handleBtnClick() {
        this.setState({
            //...this.state.list  展开原先state.list中的每一项
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        // console.log(this.state.list)
    }

    handleItemDelete(index) {
        // console.log(index);
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handlelInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li 
                                        key={index} 
                                        onClick={this.handleItemDelete.bind(this, index)}
                                    >{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;