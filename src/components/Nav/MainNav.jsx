import React from 'react';
import { blue } from 'material-ui/colors';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

const bg = blue[300];

const MainNav = () => (
  <Grid style={{ background: bg, height: '100%' }}>
    <ul style={{ margin: 0 }}>
      <li><Link to="/pupils">Pupils</Link></li>
      <li><Link to="/teachers">Teachers</Link></li>
      <li><Link to="/classes">Classes</Link></li>
    </ul>
  </Grid>
);

export default MainNav;
