import React, { useContext } from "react";
import "./App.css";

import SignIn from "./SignIn";
import config from "../config.json";
import Background from "./Background";
import InputField from "./InputField";
import Board from "./Board";
import { context } from "../constext/ContextProvider";

function App() {
  const { name } = useContext(context);

  return config.signInEnabled && name === "" ? (
    <>
      <Background />
      <SignIn />
    </>
  ) : (
    <>
      <Background />
      <InputField />
      <Board />
    </>
  );
}

export default App;
