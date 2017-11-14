import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import * as actionCreators from '../../actions/authActions';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.loginHandler = this.loginHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  loginHandler() {
    this.props.actions.login(this.state);
  }

  inputChangeHandler(event) {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
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
        <Button raised color="primary" onClick={this.loginHandler}>
          Login
        </Button>
      </Grid>,
    ];
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Login);
