import axios from "axios";
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true
})

export const login = (accout, password) => {
  return dispatch => {
    axios.get('/api/login.json?accout=' + accout + '&passwprd=' + password).then(res => {
      console.log(res)
      const result = res.data.data;
      if(result) {
        dispatch(changeLogin())
      } else {

      }
    })
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
  value: false
})
