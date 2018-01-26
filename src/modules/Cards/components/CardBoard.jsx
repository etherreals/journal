import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { lifecycle } from 'recompose';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { visibleCardsSelector } from '../store/selectors';
import CardList from './CardList/CardList';
import FilterContainer from '../../Filter/FilterContainer';
import styles from './CardBoard.styles';
import { getAllCardsRequest } from '../store/actions';

const CardBoard = ({ classes, cards }) => (
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
      <CardList cards={cards} />
    </Grid>
  </Grid>
);

CardBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStoreToProps = store => ({
  cards: visibleCardsSelector(store),
});

export default compose(
  connect(mapStoreToProps),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getAllCardsRequest());
    },
  }),
  withStyles(styles),
)(CardBoard);
