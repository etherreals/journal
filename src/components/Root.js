import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import App from './App';
import MainLoadingSpinner from './Common/MainLoadingSpinner';

class Root extends Component {
  renderAppWithAuthAndLoading() {
    let app;
    if (this.props.isLoggedIn && !this.props.isLoading) {
      app = <Route path="/" component={App} />;
    } else if (!this.props.isLoggedIn && !this.props.isLoading) {
      app = [
        <Redirect to="/login" key="1" />,
        <Route path="/login" component={Login} key="2" />,
      ];
    } else if (!this.props.isLoggedIn && this.props.isLoading) {
      app = <MainLoadingSpinner />;
    }
    return app;
  }

  render() {
    return (
      <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
        {
          this.renderAppWithAuthAndLoading()
        }
      </Grid>
    );
  }
}

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
