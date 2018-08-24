import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
})

// thunk  请求数据
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json')
      .then((res) => {
        const data = res.data;
        const action = changeList(data.data)
        dispatch(action)
      }).catch((err) => {
        console.log('出错')
      })
  }
}