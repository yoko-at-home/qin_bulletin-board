import React, { useState, useContext } from "react";
import { db } from '../firebase';
import randomColor from 'randomcolor';
import { context } from "../constext/ContextProvider";
import Draggable from "react-draggable";


const InputField = () => {
  const nodeRef = React.useRef(null);

  const [item, setItem] = useState('');
  const { name } = useContext(context);

  const newitem = () => {
    if (item.trim() !== '') {
      db.collection("theme").add({
        item: item,
        color: randomColor({ luminosity: "light" }),
        pojx: 50,
        pojy: -50,
        user: name,
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
    <Draggable nodeRef={nodeRef}>
      <div className="input__wrapper">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="お題を入力"
          onKeyPress={(e) => keyPress(e)}
        />
        <button
          style={{
            fontSize: "1rem",
            color: "yellow",
            padding: "5px",
            height: "fit-content",
            border: "3px dotted rgb(255, 251, 0)",
          }}
          onClick={newitem}
        >
          ENTER
        </button>
      </div>
    </Draggable>
  );
};

export default InputField;
