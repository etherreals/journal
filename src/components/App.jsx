import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const App = () => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    <Typography type="title" gutterBottom>
      Login
    </Typography>
    <Grid item >
      <TextField
        placeholder="email"
      />
    </Grid>
    <Grid item>
      <TextField
        placeholder="password"
        type="password"
      />
    </Grid>
    <Grid item>
      <Button raised color="primary">
        Login
      </Button>
    </Grid>
  </Grid>
);

export default App;
