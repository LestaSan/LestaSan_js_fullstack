import * as actionTypes from './actionTypes';
import axios from 'axios';

const changeDetail = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title,
  content
});

export const getDetail = (id) => {
  return dispatch => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.content))
    }).catch(e => {
      
    })
  }
};