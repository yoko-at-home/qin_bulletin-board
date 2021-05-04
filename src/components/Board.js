import React, { useState, useEffect, useContext } from "react";
import Draggable from 'react-draggable';
import { db } from "../firebase";
import { context } from "../constext/ContextProvider";

const Board = () => {
  const { admin } = useContext(context);
  const [items, setItems] = useState([]);
  const nodeRef = React.useRef(null);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);

    const themeRef = db.collection("theme").doc(newArr[index].id);
    themeRef.update({
      pojx: newArr[index].defaultPos.x,
      pojy: newArr[index].defaultPos.y,
    });
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
    db.collection("theme").doc(id).delete();
  };

  useEffect(() => {
    db.collection("theme").onSnapshot((snapshot) =>
      setItems(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data().item,
          color: doc.data().color,
          defaultPos: { x: doc.data().pojx, y: doc.data().pojy },
          user: doc.data().user,
        }))
      )
    );
  }, []);

  return (
    <div className="App-header">
      {items.map((item, index) => {
        return (
          <Draggable
            nodeRef={nodeRef}
            key={item.id}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div
              ref={nodeRef}
              style={{ backgroundColor: item.color }}
              className="box"
            >
              {`${item.item}`}
              {admin ? (
                <button
                  className="button"
                  id="delete"
                  onClick={(e) => deleteNote(item.id)}
                  >
                  X
                  </button>
              ) : null}
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default Board;
