import { indigo } from 'material-ui/colors';

const styles = theme => ({
  list: {
    width: '100%',
    maxWidth: 360,
    fill: indigo[100],
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  nav: {
    background: indigo[500],
    height: 'calc(100% + 16px)',
  },
  icon: {
    fill: indigo[200],
  },
  link: {
    color: indigo[50],
  },
});

export default styles;
