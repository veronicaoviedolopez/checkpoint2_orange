import React, { Component } from 'react';
import './App.css';
import DependentsTableContainer from './dependents/DependentsTable/DependentsTableContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
      <DependentsTableContainer></DependentsTableContainer>
      </div>
    );
  }
}

export default App;
