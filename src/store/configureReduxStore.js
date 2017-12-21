import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';
import history from '../browserHistory';

const router = routerMiddleware(history);
const logger = createLogger();
const middlewares = [
  router,
  thunk,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
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
  return { persistor, store };
}
/* eslint-enable */
