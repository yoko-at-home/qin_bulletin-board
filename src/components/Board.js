import React from "react";
import Draggable from "react-draggable";
import { db } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Board = () => {
  // const [items, setItems] = useState([]);
  const nodeRef = React.useRef(null);
  const [values, loading, error] = useCollectionData(db.collection("theme"), {
    idField: "id",
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }

  const updatePos = (data, index) => {
    // let newArr = [...items];
    // newArr[index].defaultPos = { x: data.x, y: data.y };
    // setItems(newArr);

    // const themeRef = db.collection('theme').doc(newArr[index].id);
    // themeRef.update({
    //   pojx: newArr[index].defaultPos.x,
    //   pojy: newArr[index].defaultPos.y,
    // });

    const themeRef = db.collection("theme").doc(values[index].id);
    themeRef.update({ pojx: data.x, pojy: data.y });
  };

  const deleteNote = (id) => {
    // setItems(items.filter((item) => item.id !== id));
    db.collection("theme").doc(id).delete();
  };

  // useEffect(() => {
  //   db.collection('theme').onSnapshot((snapshot) =>
  //     setItems(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         item: doc.data().item,
  //         color: doc.data().color,
  //         defaultPos: { x: doc.data().pojx, y: doc.data().pojy },
  //       }))
  //     )
  //   );
  // }, []);

  return (
    <div className="App-header">
      {/* {items.map((item, index) => {
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
              <button
                className="button"
                id="delete"
                onClick={(e) => deleteNote(item.id)}
              >
                X
              </button>
            </div>
          </Draggable>
        );
      })} */}
      {values.map((value, index) => {
        return (
          <Draggable
            nodeRef={nodeRef}
            key={value.id}
            defaultPosition={{ x: value.pojx, y: value.pojy }}
            onStop={(e, data) => {
              updatePos(data, index);
            }}
          >
            <div
              ref={nodeRef}
              style={{ backgroundColor: value.color }}
              className="box"
            >
              {`${value.item}`}
              <button
                className="button"
                id="delete"
                onClick={(e) => deleteNote(value.id)}
              >
                X
              </button>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default Board;
