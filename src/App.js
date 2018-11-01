import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from './components/ActionButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionButton />
      </div>
    );
  }
}

export default App;
