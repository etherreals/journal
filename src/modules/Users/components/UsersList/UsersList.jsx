import React, { Component } from 'react';
import PropTypes from 'prop-types';
import keycode from 'keycode';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import * as actionCreators from '../../store/usersActions';
import UserItem from '../UserItem/UserItem';
import styles from './UsersList.styles';
import UsersListHeader from '../UsersListHeader/UsersListHeader';
import LoadingSpinner from '../../../Common/LoadingSpinner';
import { getVisibleUsers, getOrder, getOrderBy, isLoading as isLoadingSelector } from '../../store/selectors';

class PupilsList extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    pupils: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    history: PropTypes.objectOf(PropTypes.string).isRequired,
  }
  static defaultProps = {
    pupils: [],
    order: '',
    orderBy: '',
  }
  componentDidMount() {
    this.unsubscribe = this.props.actions.subscribeToGetAllPupilsListener();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleRequestSort = (event, orderingField) => {
    const { order } = this.props;
    this.props.actions.sortUsers(orderingField, order === 'asc' ? 'desc' : 'asc');
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  handleOnClick = id => () => {
    this.props.history.push(`/pupils/${id}`);
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const {
      classes,
      pupils,
      order,
      orderBy,
      isLoading,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <UsersListHeader
              onRequestSort={this.handleRequestSort}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {pupils.map(pupil => (
                <UserItem
                  key={pupil.id}
                  id={pupil.id}
                  fullName={pupil.fullName}
                  dateOfBirth={moment(pupil.dateOfBirth).format('MMMM Do YYYY')}
                  grade={pupil.grade}
                  gender={pupil.gender}
                  handleOnClick={this.handleOnClick}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {isLoading && <LoadingSpinner text="Updating Pupils List" />}
      </Paper>
    );
  }
}

const mapStoreToProps = store => ({
  pupils: getVisibleUsers(store),
  isLoading: isLoadingSelector(store),
  order: getOrder(store),
  orderBy: getOrderBy(store),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  withStyles(styles),
  withRouter,
  connect(mapStoreToProps, mapDispatchToProps),
)(PupilsList);
