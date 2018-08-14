// 本来action是只派生给store的
// 但是saga中间件可以接收action
// 通过takeEvery函数判断带有相应type类的action
// 有则执行getInitList方法
// 此处就可以将异步数据请求放过来了

import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios';
import * as actionCreators from './actionCreators';

function* getInitList() {
    // console.log('abc')
    try {
        const res = yield axios.get('./list.json');
        const action = actionCreators.initListAction(res.data);
        yield put(action);
    }catch (e) {
        console.log('list.json 请求失败')
    }
    
    // axios.get('/list.json')
    //   .then((res) => {
    //     const data = res.data;
    //     const action = actionCreators.initListAction(data);
    //     // console.log(action)
    //     put(action);
    //   })
}

// generator函数   es6
function* todoSagas() {
    // 只要接收到了GET_INIT_LIST就会去执行fetchUser这个方法
    yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;
  