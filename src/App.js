import React, { Component } from 'react';
import './App.css';
import DependentsTableContainer from './dependents/DependentsTable/DependentsTableContainer';
import {Provider} from 'react-redux'
import store from './state/store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <DependentsTableContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
