import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';

const PupilItem = props => (
  <TableRow>
    <TableCell>{props.id}</TableCell>
    <TableCell>{props.fullName}</TableCell>
    <TableCell>{props.dateOfBirth}</TableCell>
    <TableCell>{props.grade.name}</TableCell>
  </TableRow>
);

PupilItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  grade: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PupilItem;
