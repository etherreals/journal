import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableCell, TableRow } from 'material-ui/Table';
import styles from './CardItem.styles';

const CardItem = props => (
  <TableRow
    onClick={props.handleOnClick(props.id)}
    className={props.classes.tr}
  >
    <TableCell>{props.title}</TableCell>
    <TableCell>{props.description}</TableCell>
    <TableCell>{props.difficulty}</TableCell>
  </TableRow>
);

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(CardItem);
