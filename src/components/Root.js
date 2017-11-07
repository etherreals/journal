import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import App from './App';

const store = configureStore();

store.dispatch({
  type: 'LOGIN_REQUEST',
  payload: {
    isLoading: true,
  },
});

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;

