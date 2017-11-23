import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';
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

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
  const persistor = persistStore(store);
  return { persistor, store };
}
