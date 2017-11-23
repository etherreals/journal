import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import registerServiceWorker from './registerServiceWorker';
import configureReduxStore from './store/configureReduxStore';
import Root from './components/Root';
import history from './browserHistory';
import firebase from './store/firebase';
import { logout, setToLoggedInAndRedirectToHomepage } from './actions/authActions';
import MainLoadingSpinner from './components/Common/MainLoadingSpinner';

const { store, persistor } = configureReduxStore();

const MountPoint = () => (
  <Provider store={store}>
    <PersistGate
      loading={<MainLoadingSpinner />}
      persistor={persistor}
    >
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(setToLoggedInAndRedirectToHomepage());
  } else {
    store.dispatch(logout());
  }
});

/* global document */
ReactDOM.render(<MountPoint />, document.getElementById('mount-point'));
registerServiceWorker();
