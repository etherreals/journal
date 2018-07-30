import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.styles';
import CardListHeader from '../CardListHeader/CardListHeader';
import LoadingSpinner from '../../../Common/LoadingSpinner';
import { orderSelector, orderBySelector, isLoadingSelector } from '../../store/selectors';
import { sortCards } from '../../store/actions';

class CardList extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    sortCards: PropTypes.func.isRequired,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    cards: [],
    order: '',
    orderBy: '',
  }

  handleRequestSort = (event, orderingField) => {
    const { order } = this.props;
    this.props.sortCards(orderingField, order === 'asc' ? 'desc' : 'asc');
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  handleOnClick = id => () => {
    this.props.history.push(`/cards/${id}`);
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {
      classes,
      cards,
      order,
      orderBy,
      isLoading,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <CardListHeader
              onRequestSort={this.handleRequestSort}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {cards.map(card => (
                <CardItem
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  difficulty={card.difficulty}
                  handleOnClick={this.handleOnClick}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {isLoading && <LoadingSpinner text="Updating cards list" />}
      </Paper>
    );
  }
}

const mapStoreToProps = store => ({
  isLoading: isLoadingSelector(store),
  order: orderSelector(store),
  orderBy: orderBySelector(store),
});

const mapDispatchToProps = dispatch => ({
  sortCards: bindActionCreators(sortCards, dispatch),
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStoreToProps, mapDispatchToProps),
)(CardList);
