import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { context } from "../../constext/ContextProvider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://it-kingdom.com/"
        target="_blank"
        rel="noopener"
      >
        🏴 Qin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function Credit() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Credit "}
      &#x1f3f0;yoko / &#x1f6e1;Takasaki
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "80vh",
    width: "40vw",
    position: "absolute",
    top: 0,
    left: "calc(30%)",
    background: "white",
    padding: "calc(7%) calc(5%) 0 calc(5%)",
    marginTop: "calc(8%)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [string, setString] = useState("");
  const [isComposed, setIsComposed] = useState(false);
  const { setName, setAdmin } = useContext(context);
  const [password, setPassword] = useState("");

  const dispPassword = string === "しまぶー" || false;

  useEffect(() => {
    let disabled = true;
    if (!isComposed) {
      if (dispPassword) {
        disabled =
          string === "" || password !== process.env.REACT_APP_ADMIN_PASSWORD;
      } else {
        disabled = string === "";
      }
    }
    setDisabled(disabled);
  }, [dispPassword, isComposed, string, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(string);
    if (dispPassword && password === process.env.REACT_APP_ADMIN_PASSWORD) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          【Qinの国民に告ぐ】
          <br />
          ニックネームを入力してお題を投稿せよ
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoFocus
            onChange={(e) => setString(e.target.value)}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
          />
          {dispPassword ? (
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              required
              fullWidth
              id="password"
              label="パスワード"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disabled}
          >
            お題を投稿する
          </Button>
        </form>
        <Typography component="h4" variant="h5">
          <br />
          「しまぶー」と名乗りしもの
          <br />
          国王の権限を有す
          <br />
        </Typography>
        <Typography component="h3" variant="h3">
          {" "}
          👑
        </Typography>

        <div style={{ marginTop: "calc(7%)" }}>
          <Copyright />
          <Credit />
        </div>
      </div>
    </Container>
  );
}
