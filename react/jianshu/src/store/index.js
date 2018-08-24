import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;


// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';
// import todoSagas from './sagas'

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhancers(
//     // applyMiddleware(thunk),
//     applyMiddleware(sagaMiddleware)
// );

// // 创建一个管理员 同时将记录本给管理员
// const store = createStore(
//     reducer, 
//     enhancer
    
// );  //请看文档

// sagaMiddleware.run(todoSagas);