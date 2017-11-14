import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import configureReduxStore from './store/configureReduxStore';
import Root from './components/Root';
import history from './browserHistory';
import firebase from './store/firebase';
import { logout } from './actions/authActions';

const store = configureReduxStore();

const MountPoint = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>
);

// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
    
//   } else {
//     store.dispatch(logout());
//   }
// });

/* global document */
ReactDOM.render(<MountPoint />, document.getElementById('mount-point'));
registerServiceWorker();
