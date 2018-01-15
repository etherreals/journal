import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withHandlers } from 'recompose';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui';
import CardList from './CardList/CardList';
import FilterContainer from '../../Filter/FilterContainer';
import styles from './CardBoard.styles';
import AddCardButton from './AddCardButton/AddCardButton';
import { addCardRequest } from '../store/actions';

const CardBoard = ({ classes, addCard }) => (
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
    <AddCardButton addCardHandler={addCard} />
  </Grid>
);

CardBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  addCard: PropTypes.func.isRequired,
};

export default compose(
  connect(null),
  withHandlers({
    addCard: props => (event) => {
      event.preventDefault();
      props.dispatch(addCardRequest({
        title: 'Do it again',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
        difficulty: 100,
        done: false,
        categories: ['1', '3'],
      }));
    },
  }),
  withStyles(styles),
)(CardBoard);
