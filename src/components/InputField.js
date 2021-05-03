import React, { useState } from 'react';
import { db } from '../firebase';
import randomColor from 'randomcolor';

const InputField = () => {
  const [item, setItem] = useState('');

  const newitem = () => {
    if (item.trim() !== '') {
      db.collection('theme').add({
        item: item,
        color: randomColor({ luminosity: 'light' }),
        pojx: 50,
        pojy: -50,
      });
      //reset item value to empty string
      setItem('');
    } else {
      alert('お題を入力してください');
      setItem('');
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  return (
    <div className='input__wrapper'>
      <input
        value={item}
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
  );
};

export default InputField;
