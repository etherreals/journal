import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import renderAppWithAuthAndLoading from './HOCs/renderWithAuthAndLoading';

const Root = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    { props.renderAppWithAuthAndLoading() }
  </Grid>
);

Root.propTypes = {
  renderAppWithAuthAndLoading: PropTypes.func.isRequired,
};

function mapStoreToProps(store) {
  return {
    isLoggedIn: store.auth.isLoggedIn,
    isLoading: store.auth.isLoading,
  };
}

export default compose(
  withRouter,
  connect(mapStoreToProps),
  renderAppWithAuthAndLoading,
)(Root);

