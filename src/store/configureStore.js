import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
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

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  );
}
