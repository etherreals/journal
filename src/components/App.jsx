import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Link } from 'react-router-dom';
import Login from './auth/Login';

const App = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    <h2>App</h2>
    <button><Link to="/dashboard">to dashboard</Link></button>
    <Login />
    {
      props.auth.isLoggedIn && <Route path="/dashboard" component={() => <h1>dashboard</h1>} />
    }
  </Grid>
);

function mapStoreToProps(store) {
  return {
    auth: store.auth,
  };
}
export default compose(
  connect(
    mapStoreToProps,
    null,
  ),
  withRouter,
)(App);
