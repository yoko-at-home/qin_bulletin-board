import React, { useState, useEffect, useContext, useRef } from "react";
import { db } from "../firebase";
import Drag from "./Draggable";
import { context } from "../constext/ContextProvider";
import "./App.css";

const DraggableBox = () => {
  const { admin } = useContext(context);
  const [items, setItems] = useState([]);
  const ref = useRef(null);
  Drag(ref);
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
            <div
              // ref={ref}
              key={item.id}
              defaultPosition={item.defaultPos}
              onStop={(e, data) => {
                updatePos(data, index);
              }}
            >
              <div
                ref={ref}
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
            </div>
          );
        })}
      </div>
    );
};

export default DraggableBox;
