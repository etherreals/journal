import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
});

export default rootReducer;
