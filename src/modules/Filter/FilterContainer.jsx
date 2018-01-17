import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Clear from 'material-ui-icons/Clear';
import { Field, reduxForm } from 'redux-form';
import styles from './FilterContainer.styles';

// const mockGrades = [
//   'All',
//   '5A',
//   '6A',
// ];

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
          <InputLabel htmlFor="descriptionFilter">Search</InputLabel>
          <Field
            id="Search"
            defaultValue=""
            component={this.renderTextInput}
            placeholder="Search"
            name="descriptionFilter"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="difficultyFilter">Difficulty</InputLabel>
          <Field
            name="difficultyFilter"
            component={this.renderSelectField}
          >
            <option value="" />
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
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


export default compose(
  withStyles(styles),
  reduxForm({ form: 'cardsFilters' }),
)(FilterContainer);
