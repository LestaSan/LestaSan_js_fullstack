import React from 'react';

// 当一个普通组件只含有render时  我们可以用无状态组件替换普通组件  性能更高
// 只负责页面渲染
// 无逻辑操作
const TodoListUI = (props) => {
  return (
    <div>
      <input
        value={props.inputValue}
        placeholder="todo info"
        onChange={props.handleInputChange} />
      <button
        style={{ marginLeft: '10px' }}
        onClick={props.handleBtnClick}
      >提交</button>
      <ul>
        {
          props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(index) => { props.handleItemDelete(index) }}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <input 
//           value={this.props.inputValue} 
//           placeholder="todo info"
//           onChange={this.props.handleInputChange} />
//         <button 
//           style={{ marginLeft: '10px' }} 
//           onClick={this.props.handleBtnClick}
//         >提交</button>
//         <ul>
//           {
//             this.props.list.map((item, index) => {
//               return (
//                 <li
//                   key={index}
//                   onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</li>
//               )
//             })
//           }
//         </ul>
//       </div>
//     )
//   }
// }

export default TodoListUI;