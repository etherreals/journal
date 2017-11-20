import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import MainNav from './Nav/MainNav';
import TeachersBoard from './Teachers/TeachersBoard';
import PupilsBoard from './Pupils/PupilsBoard';
import ClassesBoard from './Classes/ClassesBoard';

const App = () => (
  <Grid container spacing={0} style={{ height: 'calc(100vh - 16px)' }}>
    <Grid item lg={2}>
      <MainNav />
    </Grid>
    <Grid item lg={10}>
      <Switch>
        <Route path="/teachers" component={TeachersBoard} />
        <Route path="/pupils" component={PupilsBoard} />
        <Route path="/classes" component={ClassesBoard} />
      </Switch>
    </Grid>
  </Grid>
);

export default withRouter(App);

