import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

const App = () => (
  <Grid container spacing={40}>
    <Grid item xs={6}>
      <h2>Login</h2>
      <TextField
        placeholder="email"
      />
      <TextField
        placeholder="password"
        type="password"
      />
      <Button raised color="primary">
        Login
      </Button>
    </Grid>
  </Grid>
);

export default App;
