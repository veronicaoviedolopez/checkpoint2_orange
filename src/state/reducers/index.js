import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import dependentReducer from './dependentsReducer';

export default combineReducers({
	usersReducer,
	dependentReducer
});