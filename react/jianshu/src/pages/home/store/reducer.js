// import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    { id: 1, title: '社会热点', imgUrl: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' },
    { id: 2, title: '手绘', imgUrl: 'https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' },
  ]
});

export default (state = defaultState, action) => {
  switch(action.type) {
    default: return state;
  }
}


