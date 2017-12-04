import React, { Component } from 'react';
import keycode from 'keycode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  TableSortLabel,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import * as actionCreators from '../../../actions/usersActions';
import PupilItem from '../PupilItem/PupilItem';
import styles from './PupilsList.styles';
import PupilsListHeader from './PupilsListHeader';
import LoadingSpinner from '../../Common/LoadingSpinner';

// class PupilsList extends Component {
//   static propTypes = {
//     actions: PropTypes.objectOf(PropTypes.func).isRequired,
//     classes: PropTypes.objectOf(PropTypes.string).isRequired,
//     pupils: PropTypes.arrayOf(PropTypes.object),
//     isLoading: PropTypes.bool.isRequired,
//   };
//   static defaultProps = {
//     pupils: [],
//   };
//   componentDidMount() {
//     this.unsubscribe = this.props.actions.subscribeToGetAllPupilsListener();
//   }

//   componentWillUnmount() {
//     this.unsubscribe();
//   }

//   render() {
//     const { classes, pupils, isLoading } = this.props;
//     return (
//       <Paper className={classes.root}>
//         <Table className={classes.table}>
//           <PupilsListHeader />
//           <TableBody>
//             {
//               pupils.map(pupil =>
//                 (
//                   <PupilItem
//                     key={pupil.id}
//                     id={pupil.id}
//                     fullName={pupil.fullName}
//                     dateOfBirth={pupil.dateOfBirth.toLocaleString()}
//                     grade={pupil.grade}
//                   />
//                 ))
//             }
//           </TableBody>
//         </Table>
//         {isLoading && <LoadingSpinner />}
//       </Paper>
//     );
//   }
// }

class PupilsList extends Component {
  static propTypes = {
    // classes, pupils, isLoading
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    pupils: PropTypes.arrayOf(PropTypes.object).isRequired,
    isLoading: PropTypes.bool.isRequired,
  }
  constructor(props, context) {
    super(props, context);

    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
    };
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    const data =
      order === 'desc'
        ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
        : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

    this.setState({ data, order, orderBy });
  };

  handleKeyDown = (event, id) => {
    if (keycode(event) === 'space') {
      this.handleClick(event, id);
    }
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  render() {
    const { classes, pupils, isLoading } = this.props;
    const {
      order,
      orderBy,
      selected,
    } = this.state;

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <PupilsListHeader
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {pupils.map(pupil => (
                <PupilItem
                  key={pupil.id}
                  id={pupil.id}
                  fullName={pupil.fullName}
                  dateOfBirth={pupil.dateOfBirth.toLocaleString()}
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
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
)(PupilsList);
