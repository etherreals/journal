import { indigo } from 'material-ui/colors';

const styles = () => ({
  root: {
    height: 'calc(100vh - 16px)',
  },
  nav: {
    flexGrow: 1,
    backgroundColor: indigo[400],
  },
  board: {
    flexGrow: 5,
    overflow: 'auto',
    height: '100vh',
  },
});

export default styles;
