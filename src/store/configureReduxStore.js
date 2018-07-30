import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';
import history from '../browserHistory';
import rootSaga from '../rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

/* eslint-disable no-underscore-dangle */
/* global window */
export default function configureStore() {
  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares),
  );
  const persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
/* eslint-enable */
