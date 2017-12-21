import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import renderAppWithAuthAndLoading from './HOCs/renderWithAuthAndLoading';
import { isLoggedIn, isLoading } from './Auth/store/authSelectors';

const Root = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }} >
    { props.renderAppWithAuthAndLoading() }
  </Grid>
);

Root.propTypes = {
  renderAppWithAuthAndLoading: PropTypes.func.isRequired,
};

const mapStoreToProps = store => ({
  isLoggedIn: isLoggedIn(store),
  isLoading: isLoading(store),
});

export default compose(
  withRouter,
  connect(mapStoreToProps),
  renderAppWithAuthAndLoading,
)(Root);

