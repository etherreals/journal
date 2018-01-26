import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import registerServiceWorker from './registerServiceWorker';
import configureReduxStore from './store/configureReduxStore';
import Root from './modules/Root';
import history from './browserHistory';
// import { firebaseAuth } from './store/firebase';
// import { logout, setToLoggedInAndRedirectToHomepage } from './modules/Auth/store/authActions';
import LoadingSpinner from './modules/Common/LoadingSpinner';
import AuthActionsTypes from './modules/Auth/store/actions';


const { store, persistor } = configureReduxStore();
store.dispatch({ type: AuthActionsTypes.AUTH_FLOW_START });

const MountPoint = () => (
  <Provider store={store}>
    <PersistGate
      loading={<LoadingSpinner />}
      persistor={persistor}
    >
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

/* global document */
ReactDOM.render(<MountPoint />, document.getElementById('mount-point'));
registerServiceWorker();
export default store;
