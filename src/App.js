import React, { Component } from 'react';
import './App.css';
import DependentsTableContainer from './dependents/DependentsTable/DependentsTableContainer';
import AddDependents from './dependents/DependentsTable/components/addDependents/addDependents';
import {Provider} from 'react-redux'
import store from './state/store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UsersTableContainer from './users/UsersTable/usersTableContainer';


class App extends Component {
  render() {
    return (
        <Provider store={store} >
        <BrowserRouter>
          <Switch>
              <Route 
                exact path="/"               
                render={
                  (props)=>
                    <UsersTableContainer
                      {...props}>
                    </UsersTableContainer>
                }
              />

              <Route 
                path="/dependents/:usuario?" 
                render={
                  (props)=>
                    <DependentsTableContainer 
                      {...props}/>
                }
              />

              <Route 
                path="/dependentsAdd/:usuario?" 
                render={
                  (props)=>
                    <AddDependents 
                    {...props}/>
                }
              /> 

          </Switch>
        </BrowserRouter>
         
      </Provider>     
    );
  }
}

export default App;
