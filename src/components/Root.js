import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import App from './App';

const Root = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    {
      props.auth.isLoggedIn ? 
        <Route path="/" component={App} />
      :
        [<Redirect to="/login" />,
        <Route path="/login" component={Login} />]
    }
    
  </Grid>
);

function mapStoreToProps(store) {
  return {
    auth: store.auth,
  };
}
export default withRouter(connect(mapStoreToProps)(Root));
