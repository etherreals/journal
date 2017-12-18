import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import authReducer from '../components/auth/store/authReducer';
import usersReducer from '../components/Users/store/usersReducer';

const config = { key: 'root', storage };
const rootReducer = persistCombineReducers(config, {
  auth: authReducer,
  router: routerReducer,
  users: usersReducer,
});

export default rootReducer;
