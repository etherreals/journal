import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { withHandlers, lifecycle } from 'recompose';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import { visibleMyCardsSelector } from '../store/selectors';
import CardList from './CardList/CardList';
import FilterContainer from '../../Filter/FilterContainer';
import styles from './CardBoard.styles';
import AddCardButton from './AddCardButton/AddCardButton';
import { openAddCardModal, getMyCardsRequest } from '../store/actions';
import AddCardModal from './AddCard/AddCardModal';

const MyCardBoard = ({ classes, toggleAddCardModal, myCards }) => (
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
      <CardList cards={myCards} />
    </Grid>
    <AddCardModal />
    <AddCardButton toggleAddCardModal={toggleAddCardModal} />
  </Grid>
);

MyCardBoard.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleAddCardModal: PropTypes.func.isRequired,
  myCards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStoreToProps = store => ({
  myCards: visibleMyCardsSelector(store),
});

const mapDispatchToProps = dispatch => ({
  getMyCardsRequest: bindActionCreators(getMyCardsRequest, dispatch),
  openAddCardModal: bindActionCreators(openAddCardModal, dispatch),
});

export default compose(
  connect(mapStoreToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getMyCardsRequest();
    },
  }),
  withHandlers({
    toggleAddCardModal: props => () => {
      props.openAddCardModal();
    },
  }),
  withStyles(styles),
)(MyCardBoard);
