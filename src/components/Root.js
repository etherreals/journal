import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import { Route, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import App from './App';
import LoadingSpinner from './Common/LoadingSpinner';

class Root extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
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
      app = <LoadingSpinner />;
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

function mapStoreToProps(store) {
  return {
    isLoggedIn: store.auth.isLoggedIn,
    isLoading: store.auth.isLoading,
  };
}
export default withRouter(connect(mapStoreToProps)(Root));
