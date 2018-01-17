import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class AddCardForm extends Component {
  state = {
    email: '',
    password: '',
  }

  inputChangeHandler = () => {

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
          <Button raised color="accent" onClick={this.loginHandler}>
            Login
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default AddCardForm;
