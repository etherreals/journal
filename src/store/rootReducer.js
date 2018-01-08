import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../modules/Auth/store/reducer';
import usersReducer from '../modules/Users/store/usersReducer';

const config = { key: 'root', storage };
const rootReducer = persistCombineReducers(config, {
  auth: authReducer,
  router: routerReducer,
  users: usersReducer,
  form: formReducer,
});

export default rootReducer;
