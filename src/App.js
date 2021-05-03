import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';
import randomColor from 'randomcolor';

import SignIn from './components/SignIn';
import config from './config.json';
import Background from './components/Background';

function App() {
  const [name, setName] = useState('');
  const [item, setItem] = useState('');
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  const newitem = () => {
    if (item.trim() !== '') {
      //if input is not blank, create a new item object
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({ luminosity: 'light' }),
        defaultPos: { x: 100, y: 0 },
      };
      //add this new item object to the items array
      setItems((items) => [...items, newitem]);
      //reset item value to empty string
      setItem('');
    } else {
      alert('お題を入力してください');
      setItem('');
    }
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
const inputel = useRef(null);
  return (
    (config.signInEnabled && name === '') ?
    <>
        <Background />
        <SignIn setName={setName} />
      </>
      :
      <>
       <Background />
      <div className='kota'></div>
      <div className='input__wrapper'>
        <input
          value={item}
          inputel={inputel}
          onChange={(e) => setItem(e.target.value)}
          placeholder='お題を入力'
          onKeyPress={(e) => keyPress(e)}
        />
        <button
          style={{
            fontSize: '1rem',
            color: 'yellow',
            padding: '5px',
            height: 'fit-content',
            border: '3px dotted rgb(255, 251, 0)',
          }}
          onClick={newitem}
        >
          ENTER
        </button>
      </div>
      <div className='App-header'>
        {items.map((item, index) => {
          return (
            <Draggable
              key={item.id}
              defaultPosition={item.defaultPos}
              onStop={(e, data) => {
                updatePos(data, index);
              }}
            >
              <div style={{ backgroundColor: item.color }} className='box'>
                {`${item.item}`}
                <button
                  className='button'
                  id='delete'
                  onClick={(e) => deleteNote(item.id)}
                >
                  X
                </button>
              </div>
            </Draggable>
          );
        })}
      </div>
    </>
  );
}

export default App;

// https://lo-victoria.com/lets-build-a-simple-bulletin-board-react-app
