import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import styles from './FilterContainer.styles';
import * as actionCreators from '../../actions/usersActions';

const mockGrades = [
  '5A',
  '5B',
  '6A',
];

class FilterContainer extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  };

  state = {
    searchField: '',
    genderField: '',
    gradeField: '',
  }

  handleChange = type => (event) => {
    this.setState({ [type]: event.target.value });
    if (type === 'gradeField') {
      this.props.actions.filterUsersByGrade(this.props.pupils, event.target.value);
    }
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch),
});

const mapStoreToProps = store => ({
  pupils: store.users.users,
});

export default compose(
  withStyles(styles),
  connect(mapStoreToProps, mapDispatchToProps),
)(FilterContainer);
