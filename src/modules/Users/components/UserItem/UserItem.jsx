import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { TableCell, TableRow } from 'material-ui/Table';
import styles from './UserItem.styles';

const UserItem = props => (
  <TableRow
    onClick={props.handleOnClick(props.id)}
    className={props.classes.tr}
  >
    <TableCell>{props.id}</TableCell>
    <TableCell>{props.fullName}</TableCell>
    <TableCell>{props.dateOfBirth}</TableCell>
    <TableCell>{props.grade.name}</TableCell>
    <TableCell>{props.gender}</TableCell>
  </TableRow>
);

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  grade: PropTypes.objectOf(PropTypes.string).isRequired,
  gender: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(UserItem);
