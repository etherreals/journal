import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import authReducer from './authReducer';

const config = { key: 'root', storage };
const rootReducer = persistCombineReducers(config, {
  auth: authReducer,
  router: routerReducer,
});

export default rootReducer;
