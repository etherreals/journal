import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';


import Auth from './auth/Auth';

const App = (props) => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    <h2>App</h2>
    <Route
      exact
      path="/"
      render={() => (
        props.auth.isLoggedIn ?
          <Redirect to="/dashboard" />
          :
          <Auth />
      )}
    />
    {
      props.auth.isLoggedIn ? <div>loggedin</div> : <div>notloggedin</div>
    }
  </Grid>
);

function mapStateToProps(state) {
  console.log(state.auth);
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
