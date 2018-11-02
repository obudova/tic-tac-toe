import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActionButton from './components/ActionButton'
import Board from "./components/Board/Board.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <ActionButton />
        </header>
        <Board />
      </div>
    );
  }
}

export default App;
