import { indigo } from '@material-ui/core/colors';

const styles = theme => ({
  container: {
    background: indigo[50],
    height: 'calc(100% + 16px)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

export default styles;
