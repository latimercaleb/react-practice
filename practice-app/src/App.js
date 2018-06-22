import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import Component
import WrapX from './namespace'
import IterableX from './iterable'
import StateX from './simpleState'
import PropX from './simple-props'
import EventX from './sevent'
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
          <WrapX />
          <IterableX />
          <StateX />
          <PropX />
          <EventX />
        </div>
      </div>
    );
  }
}

export default App;
