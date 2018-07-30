import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Clear from '@material-ui/icons/Clear';
import MenuItem from '@material-ui/core/MenuItem';
import { Field, reduxForm } from 'redux-form';
import styles from './FilterContainer.styles';

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
      label={label}
      error={touched && error}
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
      label={label}
      error={touched && error}
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
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Field>
        </FormControl>
        <FormControl>
          <Button className={classes.button} variant='raised' size='small' onClick={this.resetForm}>
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
