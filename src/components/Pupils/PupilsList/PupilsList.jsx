import React, { Component } from 'react';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import * as actionCreators from '../../../actions/usersActions';
import PupilItem from '../PupilItem/PupilItem';
import styles from './PupilsList.styles';
import PupilsListHeader from './PupilsListHeader';
import LoadingSpinner from '../../Common/LoadingSpinner';

class PupilsList extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    pupils: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
    order: PropTypes.string,
    orderBy: PropTypes.string,
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
    const { pupils, order } = this.props;
    this.props.actions.sortUsers(pupils, orderingField, order === 'asc' ? 'desc' : 'asc');
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, pupils, isLoading, order, orderBy } = this.props;
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <PupilsListHeader
              onRequestSort={this.handleRequestSort}
              order={order}
              orderBy={orderBy}
            />
            <TableBody>
              {pupils.map(pupil => (
                <PupilItem
                  key={pupil.id}
                  id={pupil.id}
                  fullName={pupil.fullName}
                  dateOfBirth={moment(pupil.dateOfBirth).format('MMMM Do YYYY')}
                  grade={pupil.grade}
                />
              ))}
            </TableBody>
          </Table>
        </div>
        {isLoading && <LoadingSpinner />}
      </Paper>
    );
  }
}

const mapStoreToProps = store => ({
  pupils: store.users.users,
  isLoading: store.users.isLoading,
  order: store.users.order,
  orderBy: store.users.orderBy,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
)(PupilsList);
