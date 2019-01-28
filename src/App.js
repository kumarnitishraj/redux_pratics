import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './compoents/TestButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestButton />
      </div>
    );
  }
}

export default App;
