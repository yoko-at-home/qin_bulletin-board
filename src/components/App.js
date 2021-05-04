import React, { useState } from 'react';
import './App.css';

import SignIn from './SignIn';
import config from '../config.json';
import Background from './Background';
import InputField from './InputField';
import Board from './Board';
import Icon from './Icon';

function App() {
  const [name, setName] = useState('');

  return config.signInEnabled && name === '' ? (
    <>
      <Background />
      <SignIn setName={setName} />
    </>
  ) : (
    <>
      <Background />
      <Icon />
      <InputField />
      <Board />
    </>
  );
}

export default App;
