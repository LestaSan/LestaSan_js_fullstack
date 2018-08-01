import React from './react';
import ReactDOM from './react-dom';

class Counter extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                Counter
            </div>
        )
    }
}

const element = (
    <div>
        <h1>Hello World</h1>
        <Counter />
        <Counter />
        <h2>It is { new Date().toLocaleTimeString() }.</h2>
    </div>
)

// 为什么只要有ReactDOM 但是在写react时
// 第一行还是引用
// import React, { Component } from 'react'


ReactDOM.render(
        element,
        document.getElementById('root')
)

// setInterval(tick, 1000)