import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import Component
import Wrapper from './namespace'
import Iterable from './iterable'
import Stateful from './simpleState'
import PropExample from './simple-props'
const ctitle = "Sample app"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{ctitle}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='custom-components-list'>
          <Wrapper />
          <Iterable />
          <Stateful />
          <PropExample />
        </div>
      </div>
    );
  }
}

export default App;
