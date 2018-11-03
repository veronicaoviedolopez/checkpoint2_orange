import {createStore, applyMiddleware} from 'redux';
import DependentsReducer from '../reducers/dependentsReducer'

import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore( 
    DependentsReducer,
    applyMiddleware(thunk,logger)
);
    
export default store;