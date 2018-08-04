import React, { Component, Fragment } from 'react'; // Fragment占位符 可替代最外层div标签()隐藏外层标签

class TodoList extends Component {
    constructor(props) {
        // 调用父类构造函数(Component)里的props --> super
        super(props);
        // 定义数据 (定义在状态里)  this.state为组件状态
        this.state = {
            inputValue: '',
            list: []
        }
    }

    handlelInputChange(e) {
        // console.log(e);
        const value = e.target.value;
        this.setState({
            inputValue: value
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handlelInputChange.bind(this)}/>
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learning English</li>
                </ul>
            </Fragment>
        );
    }
}

export default TodoList;