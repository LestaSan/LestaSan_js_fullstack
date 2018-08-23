import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store'

const App = (
    // Provider连接了store 那么其里面的组件都可以获得sotre里的内容
    <Provider store={store}>
        <TodoList/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
