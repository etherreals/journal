import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import renderApp from './HOCs/renderApp';
import { isLoggedInSelector, isLoadingSelector } from './Auth/store/selectors';
import { isGameStartedSelector } from './Game/store/selectors';

const Root = props => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }} >
    { props.renderApp() }
  </Grid>
);

Root.propTypes = {
  renderApp: PropTypes.func.isRequired,
};

const mapStoreToProps = store => ({
  isLoggedIn: isLoggedInSelector(store),
  isLoading: isLoadingSelector(store),
  isGameStarted: isGameStartedSelector(store),
});

export default compose(
  withRouter,
  connect(mapStoreToProps),
  renderApp,
)(Root);

