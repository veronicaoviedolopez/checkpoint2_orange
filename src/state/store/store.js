import {createStore, applyMiddleware} from 'redux';
import dependentsReducer from '../reducers/dependentsReducer'
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore( 
    dependentsReducer,
    applyMiddleware(thunk, logger)
    );
    
export default store;