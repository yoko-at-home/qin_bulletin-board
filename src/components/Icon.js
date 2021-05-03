import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  kota: {
    position: 'fixed',
    height: '60px',
    width: '60px',
    top: 'calc(50% - 60px / 2)',
    left: 'calc(50% - 60px / 2)',
    borderRadius: '50%',
    background: 'url(../img/muchan_kasige1.jpg) center',
    border: '3px dotted rgb(255, 251, 0)',
    zIndex: 300,
  },
}));

const Icon = () => {
  const classes = useStyles();
  return <div className={classes.kota}></div>;
};

export default Icon;
