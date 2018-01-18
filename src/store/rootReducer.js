import { routerReducer } from 'react-router-redux';
import { persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { reducer as formReducer } from 'redux-form';
import authReducer from '../modules/Auth/store/reducer';
import cardsReducer from '../modules/Cards/store/reducer';
import infoTipsReducer from '../modules/InfoTips/store/reducers';

const config = { key: 'root', storage };
const rootReducer = persistCombineReducers(config, {
  auth: authReducer,
  router: routerReducer,
  cards: cardsReducer,
  form: formReducer,
  infotips: infoTipsReducer,
});

export default rootReducer;
