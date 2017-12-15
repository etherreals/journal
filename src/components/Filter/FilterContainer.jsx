import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import styles from './FilterContainer.styles';

const mockGrades = [
  '5A',
  '5B',
  '6C',
];

class FilterContainer extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.object).isRequired,
  };

  state = {
    searchField: '',
    genderField: '',
    gradeField: '',
  }

  handleChange = type => (event) => {
    this.setState({ [type]: event.target.value });
  }

  render() {
    const { classes } = this.props;
    const { searchField, genderField, gradeField } = this.state;
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Search">Search</InputLabel>
          <Input
            id="Search"
            placeholder="Search"
            name="search"
            value={searchField}
            onChange={this.handleChange('searchField')}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Gender">Gender</InputLabel>
          <Select
            native
            value={genderField}
            onChange={this.handleChange('genderField')}
            input={<Input id="Gender" />}
          >
            <option value="" />
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="Grade">Grade</InputLabel>
          <Select
            native
            value={gradeField}
            onChange={this.handleChange('gradeField')}
            input={<Input id="Grade" />}
          >
            <option value="" />
            {
              mockGrades.map(grade => <option key={grade} value={grade}>{grade}</option>)
            }
          </Select>
        </FormControl>

      </div>
    );
  }
}

export default withStyles(styles)(FilterContainer);
