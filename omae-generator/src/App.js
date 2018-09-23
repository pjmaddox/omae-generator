import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectContainer from './components/containers/CharacterSelectContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterSelectContainer />
      </div>
    );
  }
}

export default App;
