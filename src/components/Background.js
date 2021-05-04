import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  Bg: {
    textAlign: 'center',
    display: 'grid',
    height: '100vh',
    gridTemplateAreas: '"odai" "hanashichu" "owari" mibunrui"',
    gridTemplateRows: '1fr 1fr 1fr',
    gridTemplateColumns: '3/3',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 800,
    zIndex: 0,
    textShadow: '0px 8px 3px rgba(0, 0, 0, 0.7)',
  },
  odai: {
    gridArea: 'odai',
    backgroundColor: '#f88',
  },
  hanashichu: {
    gridArea: 'hanashichu',
    backgroundColor: '#8f8',
  },
  owari: {
    gridArea: 'owari',
    backgroundColor: '#88f',
  },
  mibunrui: {
    gridArea: 'mibunrui',
    backgroundColor: 'green',
  },
}));

const Background = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Bg}>
        <div className={classes.odai}>お題</div>
        <div className={classes.hanashichu}>話中のお題</div>
        <div className={classes.owari}>話し終えたお題</div>
        <div className={classes.mibunrui}>未分類</div>
      </div>
    </div>
  );
};

export default Background;
