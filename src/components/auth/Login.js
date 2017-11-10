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
    this.onButtonClickHandler = this.onButtonClickHandler.bind(this);
  }
  onButtonClickHandler() {
    this.props.actions.login();
  }

  render() {
    return [
      <Typography type="title" gutterBottom>
        Login
      </Typography>,
      <Grid item>
        <TextField
          placeholder="email"
        />
      </Grid>,
      <Grid item>
        <TextField
          placeholder="password"
          type="password"
        />
      </Grid>,
      <Grid item>
        <Button raised color="primary" onClick={this.onButtonClickHandler}>
          Login
        </Button>
      </Grid>,
    ];
  }
}
function mapStateToProps(state) {
  return {
    // todos: state.todosReducer.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
