import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = ['Alice', 'Emily', '曾凯大帝']
    return (
      <div className="App">
        <ul>
          {
            name.map((name, index) => {
              return (
                <div key={index}>Hello, {name}</div>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
