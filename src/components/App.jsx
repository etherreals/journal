import React from 'react';
import Grid from 'material-ui/Grid';
import { Route } from 'react-router-dom';

import Auth from './auth/Auth';

const App = () => (
  <Grid container alignItems="center" justify="center" direction="column" style={{ height: 'calc(100vh - 16px)' }}>
    <h2>App</h2>
    {
      false && <Route path="/auth" component={Auth} />
    }
  </Grid>
);

export default App;
