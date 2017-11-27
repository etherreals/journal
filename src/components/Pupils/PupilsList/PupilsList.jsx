import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import * as actionCreators from '../../../actions/usersActions';
import PupilItem from '../PupilItem/PupilItem';
import styles from './PupilsList.styles';
import PupilsListHeader from './PupilsListHeader';
import LoadingSpinner from '../../Common/LoadingSpinner';

class PupilsList extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.actions.subscribeToGetAllPupilsListener();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { classes, pupils, isLoading } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <PupilsListHeader />
          <TableBody>
            {
              pupils.map(pupil =>
                (
                  <PupilItem
                    key={pupil.id}
                    id={pupil.id}
                    fullName={pupil.fullName}
                    dateOfBirth={pupil.dateOfBirth.toLocaleString()}
                    grade={pupil.grade}
                  />
                ))
            }
          </TableBody>
        </Table>
        {isLoading && <LoadingSpinner />}
      </Paper>
    );
  }
}

PupilsList.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  pupils: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
};

PupilsList.defaultProps = {
  pupils: [],
};

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
