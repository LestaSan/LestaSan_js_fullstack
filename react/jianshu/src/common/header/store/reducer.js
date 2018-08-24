import * as actionTypes from './actionTypes';
// immutable 不可修改原数据
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
    // 一次性改变多个数据时可用megre 无需链式调用set
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
      // return state.set('list', action.data).set('totalPage', action.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default: return state;
  }
  

  // if (action.type === actionTypes.SEARCH_FOCUS) {
  //   // state已经是immutable对象了  get与set
  //   // immutable对象的set方法，会结合之前的immutable对象的值
  //   // 和设置的值，返回一个全新的对象   
  //   // 新的新的新的
  //   return state.set('focused', true);
  //   // return {
  //   //     focused: true
  //   // }
  // }
  // if (action.type === actionTypes.SEARCH_BLUR) {
  //   return state.set('focused', false);
  // }
  // if (action.type === actionTypes.CHANGE_LIST) {
  //   // 此处原state里list也变成了immutable对象，
  //   // 但是action.data派生的是普通对象
  //   // 所以要在action创建时将里面的data也immutable
  //   return state.set('list', action.data);
  // }
}