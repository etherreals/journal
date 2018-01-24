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

  renderAppWithAuthAndLoading = () => {
    if (this.beforeLoggingState()) {
      return (
        <div>
          <Redirect to="/login" />
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
      return <Route exact path="/game" component={GameBoard} />;
    }
    return null;
  }

  render() {
    return (
      <ComposedComponent
        {...this.props}
        renderAppWithAuthAndLoading={this.renderAppWithAuthAndLoading}
      />
    );
  }
};

export default Enhance;

