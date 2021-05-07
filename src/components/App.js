import React, { useContext } from "react";
import "./App.css";

import SignIn from "./SignIn";
import config from "../config.json";
import InputField from "./InputField";
// import DraggableBox from "./DraggableBox";
import { context } from "../constext/ContextProvider";
import BackgroundForSignin from "./SignIn/BackgroundForSignin";
import BackgroundForUsers from "./BackgroundForUsers";
import Board from "./Board";

function App() {
  const { name, admin } = useContext(context);

  if (config.signInEnabled && name === "") {
    return (
      <>
        <BackgroundForSignin />
        <SignIn />
      </>
    );
  }
  return admin ? (
    <>
      <BackgroundForSignin />
      {/* <DraggableBox /> */}
      <Board />
      <InputField />
    </>
  ) : (
    <>
      <BackgroundForUsers />
      <InputField />
    </>
  );
}

export default App;
