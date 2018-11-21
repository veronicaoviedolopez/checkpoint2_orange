import React, { Component } from 'react';
import './App.css';
import DependentsTableContainer from './dependents/DependentsTable/DependentsTableContainer';
import AddDependents from './dependents/DependentsTable/components/addDependents/addDependents';
import {Provider} from 'react-redux'
import store from './state/store/store';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UsersTableContainer from './users/UsersTable/usersTableContainer';
import Header from './header';
import HomeLayout from './home-layout';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store} >
        <BrowserRouter>
        <div>
       
        <Header/>
        <HomeLayout>
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

              <Route 
                path="/contact/" 
                render={
                  (props)=>
                    <div
                    {...props}>
                    Informacion de Contacto
                    </div>
                }
              /> 


          </Switch>
        </HomeLayout>
        </div>
        </BrowserRouter>
        </Provider>   
      </div>  
    );
  }
}

export default App;
