import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
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
    actions: PropTypes.objectOf(PropTypes.func).isRequired,
  };

  state = {
    searchField: '',
    genderField: '',
    gradeField: '',
  }

  handleChange = type => (event) => {
    const { value } = event.target;
    this.setState({ [type]: value });
    if (type === 'gradeField') {
      this.props.actions.filterUsersByGrade(value);
    }
    if (type === 'searchField') {
      this.props.actions.filterUsersByFullName(value);
    }
    if (type === 'genderField') {
      this.props.actions.filterUsersByGender(value);
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
            <option value="All">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
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
