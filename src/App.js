import React, { Component } from 'react';
import './App.css';
import DependentsTableContainer from './dependents/DependentsTable/DependentsTableContainer';
import AddDependents from './dependents/DependentsTable/components/addDependents/addDependents';
import {Provider} from 'react-redux'
import store from './state/store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './home/home';


class App extends Component {
  render() {
    return (
        <Provider store={store} >
        <BrowserRouter>
          <Switch>
              <Route exact path="/"              render={(props)=><Home                     {...props}></Home>}>                     </Route>
              <Route path="/dependents/:usuario?" render={(props)=><DependentsTableContainer {...props}></DependentsTableContainer>}> </Route> 
              <Route path="/dependentsAdd/:usuario?" render={(props)=><AddDependents {...props}></AddDependents>}> </Route> 
          </Switch>
        </BrowserRouter>
         
      </Provider>     
    );
  }
}

export default App;
