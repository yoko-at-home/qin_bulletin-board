import React, { useRef } from "react";
import Draggable from "./Draggable";
import "./App.css";

const DraggableBox = () => {
  const ref = useRef(null);
  Draggable(ref);

  return (
    <div ref={ref} className="draggableBox">
      Draggable
    </div>
  );
};

export default DraggableBox;
