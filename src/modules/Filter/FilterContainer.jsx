import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Clear from 'material-ui-icons/Clear';
import { Field, reduxForm } from 'redux-form';
import styles from './FilterContainer.styles';
import * as actionCreators from '../Users/store/usersActions';
import { getUsers } from '../Users/store/usersSelectors';

const mockGrades = [
  'All',
  '5A',
  '6A',
];

class FilterContainer extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    reset: PropTypes.func.isRequired,
  };

  resetForm = () => {
    this.props.reset();
  }

  renderTextInput = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <Input
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  )

  renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <Select
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      {...custom}
    >
      {children}
    </Select>
  )

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Search">Search</InputLabel>
          <Field
            id="Search"
            defaultValue=""
            component={this.renderTextInput}
            placeholder="Search"
            name="searchField"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Gender">Gender</InputLabel>
          <Field
            name="genderField"
            component={this.renderSelectField}
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
            name="gradeField"
            component={this.renderSelectField}
          >
            <option value="" />
            {
              mockGrades.map(grade => <option key={grade} value={grade}>{grade}</option>)
            }
          </Field>
        </FormControl>
        <FormControl>
          <Button className={classes.button} raised dense onClick={this.resetForm}>
            Clear form
            <Clear className={classes.rightIcon} />
          </Button>
        </FormControl>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStoreToProps = store => ({
  pupils: getUsers(store),
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
  reduxForm({ form: 'usersFilters' }),
)(FilterContainer);
