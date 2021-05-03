import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Bg: {
    textAlign: 'center',
    display: 'grid',
    height: '100vh',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 800,
    zIndex: 0,
    textShadow: '0px 8px 3px rgba(0, 0, 0, 0.7)',
  },
}));

const Background = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Bg}>
        <div style={{ backgroundColor: '#f88', height: '50vh' }}>お題</div>
        <div style={{ backgroundColor: '#8f8' }}>話中のお題</div>
        <div style={{ backgroundColor: '#88f' }}>話し終えたお題</div>
        <div style={{ backgroundColor: 'green' }}>未分類</div>
      </div>
    </div>
  );
};

export default Background;
