import React, { Component } from 'react';

import './App.css';

class UserGist extends Component {
  state = {
    username: '',
    lastGistUrl: ''
  }
  render () {
    return (
      <div>
        {this.state.username}'s last gist is 
        <a href={this.state.lastGistUrl}>here</a>
      </div>
    )
  }
  componentDidMount () {
    fetch(this.props.source)
      .then(data => data.json())
      .then(data => {
        const lastGist = data[0];
        console.log(lastGist)
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        })
      })
  }
}

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <UserGist source="https://api.github.com/users/octocat/gists"></UserGist>
      </div>
    );
  }
}

export default App;
