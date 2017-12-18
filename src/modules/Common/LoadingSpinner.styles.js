const styles = theme => ({
  progress: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position: 'absolute',
    left: '50%',
    top: '38vh',
    transform: 'translate(-50%, -50%)',
  },
  progressText: {
    margin: `0 ${theme.spacing.unit * 2}px`,
    position: 'absolute',
    left: '50%',
    top: '42vh',
    transform: 'translate(-50%, -50%)',
  },
  progressWrapper: {
    position: 'absolute',
    height: 'calc(100% - 57px)',
    width: '100%',
    top: '57px',
    left: 0,
    background: 'rgba(255, 255, 255, .8)',
  },
});

export default styles;
