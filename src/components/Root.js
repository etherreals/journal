import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import App from './App';

const Root = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    {
      props.isLoggedIn ?
        <Route path="/" component={App} />
        :
        [
          <Redirect to="/login" key="1" />,
          <Route path="/login" component={Login} key="2" />,
        ]
    }

  </Grid>
);

Root.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

Login.defaultProps = {
  isLoggedIn: false,
};


function mapStoreToProps(store) {
  return {
    isLoggedIn: store.auth.isLoggedIn,
  };
}
export default withRouter(connect(mapStoreToProps)(Root));
