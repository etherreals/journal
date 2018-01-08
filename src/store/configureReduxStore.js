import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import history from '../browserHistory';
import sagas from '../modules/Auth/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}


/* eslint-disable no-underscore-dangle */
/* global window */
export default function configureStore() {
  // singleton
  if (configureStore.instance) {
    return configureStore.instance;
  }
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
  );
  const persistor = persistStore(store);
  configureStore.instance = {
    persistor,
    store,
  };
  sagaMiddleware.run(sagas);
  return { persistor, store };
}
/* eslint-enable */
