import React from 'react';
import Grid from 'material-ui/Grid';
import Auth from './auth/Auth';

const App = () => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    <Auth />
  </Grid>
);

export default App;
