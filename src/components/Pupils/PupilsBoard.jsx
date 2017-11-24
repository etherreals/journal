import React from 'react';
import Typography from 'material-ui/Typography';
import PupilsList from './PupilsList/PupilsList';

const PupilsBoard = () => (
  <div>
    <Typography type="display2" gutterBottom>
      Pupils list
    </Typography>
    <PupilsList />
  </div>
);

export default PupilsBoard;
