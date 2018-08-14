import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST_ACTION,
  data
})

// 引用了thunk中间件之后action可以是一个函数
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('/list.json')
//       .then((res) => {
//         const data = res.data;
//         // console.log(data)
//         const action = initListAction(data);
//         dispatch(action)
//       })
//   }
// }

export const getInitList = () => ({
  type: actionTypes.GET_INIT_LIST
})