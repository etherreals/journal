import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import styles from './AddCardForm.styles';
import { addCardRequest } from '../../store/actions';

class AddCardForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.objectOf).isRequired,
    addCardRequest: PropTypes.func.isRequired,
  }
  state = {
    title: '',
    description: '',
    difficulty: 1,
    categories: {
      category1: false,
      category2: false,
      category3: false,
      category4: false,
    },
  }

  inputChangeHandler = (event) => {
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  selectChangeHandler = (event, checked) => {
    const { name } = event.target;
    this.setState(() => ({
      categories: {
        ...this.state.categories,
        [name]: checked,
      },
    }));
  }

  isValid = () => {
    const { title, description } = this.state;
    return !title || !description;
  }

  createCard = () => {
    this.props.addCardRequest(this.state);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container alignItems="center" justify="center" direction="column">
        <Typography type="title" gutterBottom>
          Add new card
        </Typography>
        <Grid item>
          <TextField
            className={classes.textField}
            label="Title"
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.inputChangeHandler}
          />
        </Grid>
        <Grid item>
          <TextField
            id="description"
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.description}
            name="description"
            onChange={this.inputChangeHandler}
            className={classes.textField}
            margin="normal"
          />
        </Grid>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
            <Select
              value={this.state.difficulty}
              onChange={this.inputChangeHandler}
              input={<Input name="difficulty" id="difficulty" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category1}
                    name="category1"
                    onChange={this.selectChangeHandler}
                  />
                }
                label="category1"
              />
              <FormLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category2}
                    name="category2"
                    onChange={this.selectChangeHandler}
                  />
                }
                label="category2"
              />
              <FormLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category3}
                    name="category3"
                    onChange={this.selectChangeHandler}
                  />
                }
                label="category3"
              />
              <FormLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category4}
                    name="category4"
                    onChange={this.selectChangeHandler}
                  />
                }
                label="category4"
              />
            </FormGroup>
          </FormControl>
          <Grid item>
            <Button
              raised
              fullWidth
              disabled={this.isValid()}
              color="primary"
              onClick={this.createCard}
              className={classes.button}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCardRequest: bindActionCreators(addCardRequest, dispatch),
});

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles),
)(AddCardForm);
