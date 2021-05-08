import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import { db } from "../../firebase";
import "./styles.css";

export const Mibunrui = () => {
  // state = {
  //   activeDrags: 0,
  //   deltaPosition: {
  //     x: 0,
  //     y: 0,
  //   },
  //   controlledPosition: {
  //     x: -400,
  //     y: 200,
  //   },
  // };

  // handleDrag = (e, ui) => {
  //   const { x, y } = this.state.deltaPosition;
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX,
  //       y: y + ui.deltaY,
  //     },
  //   });
  // };

  // onStart = () => {
  //   this.setState({ activeDrags: ++this.state.activeDrags });
  // };

  // onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };
  // onDrop = (e) => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  //   if (e.target.classList.contains("drop-target")) {
  //     alert("Dropped!");
  //     e.target.classList.remove("hovered");
  //   }
  // };
  // const dragHandlers = { onStart: onStart, onStop: onStop };

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
    <div className="mibunrui">
      <br />
      <div className="mibunrui_title">未分類</div>
      <div className="mibunrui_subtitle">
        国民は、メモをこれより上に置くことも、これより上のメモを触ることもできません
      </div>
      <div className="mibunrui_body">
        {items.map((item, index) => {
          return (
            <>
              <Draggable
                nodeRef={nodeRef}
                key={item.id}
                defaultPosition={item.defaultPos}
                onStop={(e, data) => {
                  updatePos(data, index);
                }}
                bounds="parent"
                // {...dragHandlers}
              >
                <div
                  ref={nodeRef}
                  style={{ backgroundColor: item.color }}
                  className="box"
                >
                  {`${item.item}`}
                </div>
              </Draggable>
            </>
          );
        })}
      </div>
    </div>
  );
};
