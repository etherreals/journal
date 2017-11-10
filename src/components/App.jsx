import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Link, Redirect } from 'react-router-dom';
import Login from './auth/Login';

const App = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    
    {
      props.auth.isLoggedIn ? 
        <Route path="/" component={() => <h1>Homepage</h1>} />
      :
        <Redirect to="/login" />
    }
    <Route path="/login" component={Login} />
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
