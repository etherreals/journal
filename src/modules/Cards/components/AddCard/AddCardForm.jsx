import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Select from 'material-ui/Select';
import styles from './AddCardForm.styles';
import { addCardRequest } from '../../store/actions';

class AddCardForm extends Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.objectOf).isRequired,
    dispatch: PropTypes.func.isRequired,
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

  inputChangeHandler = (event, checked) => {
    const { name, value, type } = event.target;
    if (type === 'checkbox') {
      this.setState(() => ({
        categories: {
          ...this.state.categories,
          [name]: checked,
        },
      }));
    } else {
      this.setState(() => ({
        [name]: value,
      }));
    }
  }

  isValid = () => {
    const { title, description } = this.state;
    return !title || !description;
  }

  createCard = () => {
    this.props.dispatch(addCardRequest(this.state));
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category1}
                    name="category1"
                    onChange={this.inputChangeHandler}
                    value={this.state.categories.category1}
                  />
                }
                label="category1"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category2}
                    name="category2"
                    onChange={this.inputChangeHandler}
                    value={this.state.categories.category2}
                  />
                }
                label="category2"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category3}
                    name="category3"
                    onChange={this.inputChangeHandler}
                    value={this.state.categories.category3}
                  />
                }
                label="category3"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.categories.category4}
                    name="category4"
                    onChange={this.inputChangeHandler}
                    value={this.state.categories.category4}
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

export default compose(
  connect(null),
  withStyles(styles),
)(AddCardForm);
