import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Route, withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      rest.isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
        pathname: '/login',
        state: { from: props.location },
      }}
        />
      )
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  location: PropTypes.objectOf(PropTypes.object).isRequired,
};

function mapStoreToProps(store) {
  return {
    isLoggedIn: store.auth.isLoggedIn,
  };
}

export default compose(
  withRouter,
  connect(mapStoreToProps),
)(PrivateRoute);
