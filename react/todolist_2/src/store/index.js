// store -> 管理员 reducer -> 数据记录本(记录数据状态state)
// 管理员不知道数据  需要查阅记录本
// 创建管理员的时候， 需要一并创建记录本 并将记录本交给管理员
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    // applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware)
);

// 创建一个管理员 同时将记录本给管理员
const store = createStore(
    reducer, 
    enhancer
    
);  //请看文档

sagaMiddleware.run(todoSagas);

export default store;