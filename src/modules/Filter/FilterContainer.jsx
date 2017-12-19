import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { Field, reduxForm } from 'redux-form'
import styles from './FilterContainer.styles';
import * as actionCreators from '../Users/store/usersActions';

const mockGrades = [
  'All',
  '5A',
  '6A',
];

class FilterContainer extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  handleChange = () => 'fdf'

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Search">Search</InputLabel>
          <Field
            id="Search"
            component="input"
            placeholder="Search"
            name="searchField"
            value="er"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Gender">Gender</InputLabel>
          <Field
            value=""
            name="genderField"
            component="select"
          >
            <option value="" />
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Grade">Grade</InputLabel>
          <Field
            value=""
            name="gradeField"
            component="select"
          >
            <option value="" />
            {
              mockGrades.map(grade => <option key={grade} value={grade}>{grade}</option>)
            }
          </Field>
        </FormControl>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStoreToProps = store => ({
  pupils: store.users.users,
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
  reduxForm({ form: 'usersFilters' }),
)(FilterContainer);
