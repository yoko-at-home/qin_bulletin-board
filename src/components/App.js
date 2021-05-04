import React, { useContext } from "react";
import "./App.css";

import SignIn from "./SignIn";
import config from "../config.json";
import InputField from "./InputField";
import Board from "./Board";
import { context } from "../constext/ContextProvider";
import BackgroundForSignin from "./SignIn/BackgroundForSignin";
import BackgroundForUsers from "./BackgroundForUsers";

function App() {
  const { name, admin } = useContext(context);

  if (config.signInEnabled && name === "") {
    return (
      <>
        <BackgroundForSignin  />
        <SignIn  />
      </>
    );
  }
  return admin ? (
    <>
      <BackgroundForSignin />
      <InputField />
      <Board />
    </>
  ) : (
    <>
      <BackgroundForUsers />
      <InputField />
    </>
  );
}

export default App;
