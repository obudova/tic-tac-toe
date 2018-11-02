import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GameHeaderContainer from './GameHeader';

import store from './store/createStore';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameHeaderContainer />
      </div>
    );
  }
}

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
