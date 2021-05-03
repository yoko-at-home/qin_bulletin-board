import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://it-kingdom.com/'
        target='_blank'
        rel='noopener'
      >
        🏴 Qin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    height: '80vh',
    width: '30vw',
    zIndex: 1000,
    position: 'absolute',
    top: 0,
    background: 'white',
    padding: '50px 50px 0 50px',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ setName }) {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = string === '';
    setDisabled(disabled);
  }, [string]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          【Qinの国民に告ぐ】
          <br />
          ニックネームを入力してお題を投稿せよ
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='ニックネーム'
            name='name'
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onKeyDown={(e) => {
              if (isComposed) return;

              if (e.key === 'Enter') {
                setName(e.target.value);
                e.preventDefault();
              }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={disabled}
            onClick={() => {
              setName(string);
            }}
          >
            お題を投稿する
          </Button>
        </form>
        <Typography component='h4' variant=' h5'>
          <br />
          「しまぶー」と名乗りしもの
          <br />
          国王の権限を有す
          <br />
        </Typography>
        <Typography component='h1' variant=' h1'>
          {' '}
          👑
        </Typography>
        <br />
        <Typography component='p' variant=' p'>
          汝、偽りの名を名乗るべからず
        </Typography>
        <Box mt={10}>
          <Copyright />
        </Box>
      </div>
    </Container>
  );
}
