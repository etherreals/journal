import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Route, withRouter, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import MainNav from './Nav/MainNav';
import TeachersBoard from './Teachers/TeachersBoard';
import PupilsBoard from './Pupils/PupilsBoard';
import ClassesBoard from './Classes/ClassesBoard';
import styles from './App.styles';

const App = props => (
  <Grid container spacing={0} className={props.classes.root}>
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

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default compose(
  withRouter,
  withStyles(styles),
)(App);

