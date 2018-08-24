import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

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