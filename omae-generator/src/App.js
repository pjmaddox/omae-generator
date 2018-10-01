import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterSelectContainer from './components/containers/CharacterSelectContainer.js';
import TestAddNewCharacterContainer from './components/containers/test_addNewCharacterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TestAddNewCharacterContainer/>
        <CharacterSelectContainer />
      </div>
    );
  }
}

export default App;
