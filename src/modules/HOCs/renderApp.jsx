import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';
import LoadingSpinner from '../Common/LoadingSpinner';
import App from '../App';
import Login from '../Auth/Login';
import GameBoard from '../Game/components/GameBoard';

const Enhance = ComposedComponent => class C extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isGameStarted: PropTypes.bool.isRequired,
    match: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  beforeLoggingState() {
    return !this.props.isLoggedIn && !this.props.isLoading && !this.props.isGameStarted;
  }

  loggingState() {
    return !this.props.isLoggedIn && this.props.isLoading && !this.props.isGameStarted;
  }

  afterLoggingState() {
    return this.props.isLoggedIn && !this.props.isLoading && !this.props.isGameStarted;
  }

  renderApp = () => {
    if (this.beforeLoggingState()) {
      const shouldRedirect = this.props.location.pathname !== '/login';
      return (
        <div>
          {shouldRedirect && <Redirect to="/login" />}
          <Route path="/login" component={Login} />
        </div>
      );
    }
    if (this.loggingState()) {
      return <LoadingSpinner text="Logging In" />;
    }
    if (this.afterLoggingState()) {
      return <Route path="/" component={App} />;
    }
    if (this.props.isGameStarted) {
      return <Route path="/game" component={GameBoard} />;
    }
    return null;
  }

  render() {
    return (
      <ComposedComponent
        {...this.props}
        renderApp={this.renderApp}
      />
    );
  }
};

export default Enhance;

