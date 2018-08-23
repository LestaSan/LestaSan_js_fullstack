import * as actionTypes from './actionTypes';
// immutable 不可修改原数据
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS) {
        // state已经是immutable对象了  get与set
        // immutable对象的set方法，会结合之前的immutable对象的值
        // 和设置的值，返回一个全新的对象   
        // 新的新的新的
        return state.set('focused', true);
        // return {
        //     focused: true
        // }
    }
    if(action.type === actionTypes.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}