import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from '../store/configureStore';
import App from './App';
import history from '../browserHistory';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default Root;

