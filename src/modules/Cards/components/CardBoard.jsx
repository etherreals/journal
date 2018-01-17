import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withHandlers } from 'recompose';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import CardList from './CardList/CardList';
import FilterContainer from '../../Filter/FilterContainer';
import styles from './CardBoard.styles';
import AddCardButton from './AddCardButton/AddCardButton';
import { openAddCardModal } from '../store/actions';
import AddCardModal from './AddCard/AddCardModal';

const CardBoard = ({ classes, toggleAddCardModal }) => (
  <Grid
    container
    spacing={0}
    className={classes.root}
    direction="row"
    justify="center"
  >
    <Grid item md={2} className={classes.filter}>
      <FilterContainer />
    </Grid>
    <Grid item md={10} className={classes.board}>
      <CardList />
    </Grid>
    <AddCardModal />
    <AddCardButton toggleAddCardModal={toggleAddCardModal} />
  </Grid>
);

CardBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleAddCardModal: PropTypes.func.isRequired,
};

export default compose(
  connect(null),
  withHandlers({
    toggleAddCardModal: props => (event) => {
      event.preventDefault();
      props.dispatch(openAddCardModal());
    },
  }),
  withStyles(styles),
)(CardBoard);
