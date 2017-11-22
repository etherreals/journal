import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import App from './App';
import MainLoadingSpinner from './Common/MainLoadingSpinner';

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
    {
      props.isLoading && <MainLoadingSpinner />
    }

  </Grid>
);

Root.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStoreToProps(store) {
  return {
    isLoggedIn: store.auth.isLoggedIn,
    isLoading: store.auth.isLoading,
  };
}
export default withRouter(connect(mapStoreToProps)(Root));
