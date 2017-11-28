import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Send from 'material-ui-icons/Send';
import * as actionCreators from '../../actions/authActions';


class Login extends Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    authError: PropTypes.string,
  };

  static defaultProps = {
    authError: '',
  };

  state = {
    email: '',
    password: '',
  };

  loginHandler = () => {
    this.props.actions.signInWithEmailAndPassword(this.state);
  }

  googleLoginHandler = () => {
    this.props.actions.signInWithGoogle();
  }

  inputChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  renderAuthError() {
    if (this.props.authError) {
      const { message } = this.props.authError;
      return (
        <Grid item>
          <span>{message}</span>
        </Grid>
      );
    }
    return '';
  }

  render() {
    return [
      <Typography type="title" gutterBottom>
        Login
      </Typography>,
      <Grid item>
        <TextField
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.inputChangeHandler}
        />
      </Grid>,
      <Grid item>
        <TextField
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.inputChangeHandler}
        />
      </Grid>,
      <Grid item>
        <Button raised color="accent" onClick={this.loginHandler}>
          Login
        </Button>
      </Grid>,
      <Grid item>
        <Button raised color="primary" onClick={this.googleLoginHandler}>
          Sign in with Google
          <Send />
        </Button>
      </Grid>,
      this.renderAuthError(),
    ];
  }
}

const mapStoreToProps = store => ({
  authError: store.auth.error,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Login);
