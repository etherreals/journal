import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Send from 'material-ui-icons/Send';
import { loginWithEmailAndPasswordRequest, googleLoginRequest } from './store/actions';
import { getAuthError } from './store/selectors';

class Login extends Component {
  static propTypes = {
    loginWithEmailAndPasswordRequest: PropTypes.func.isRequired,
    googleLoginRequest: PropTypes.func.isRequired,
    authError: PropTypes.shape({
      message: PropTypes.string,
    }),
  };

  static defaultProps = {
    authError: {
      message: '',
    },
  };

  state = {
    email: 'email@email.com',
    password: '123456',
  };

  loginHandler = () => {
    this.props.loginWithEmailAndPasswordRequest(this.state);
  }

  googleLoginHandler = () => {
    this.props.googleLoginRequest();
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
    return (
      <Grid container alignItems="center" justify="center" direction="column">
        <Typography type="title" gutterBottom>
          Login
        </Typography>
        <Grid item>
          <TextField
            placeholder="email"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.inputChangeHandler}
          />
        </Grid>
        <Grid item>
          <TextField
            placeholder="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.inputChangeHandler}
          />
        </Grid>
        <Grid item>
          <Button raised color="secondary" onClick={this.loginHandler}>
            Login
          </Button>
        </Grid>
        <Grid item>
          <Button raised color="primary" onClick={this.googleLoginHandler}>
            Sign in with Google
            <Send />
          </Button>
        </Grid>
        {this.renderAuthError()}
      </Grid>
    );
  }
}

const mapStoreToProps = store => ({
  authError: getAuthError(store),
});

const mapDispatchToProps = dispatch => ({
  loginWithEmailAndPasswordRequest: bindActionCreators(loginWithEmailAndPasswordRequest, dispatch),
  googleLoginRequest: bindActionCreators(googleLoginRequest, dispatch),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
