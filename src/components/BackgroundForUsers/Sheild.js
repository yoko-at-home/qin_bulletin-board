import React from "react";
import "./styles.css";

const Sheild = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        backgroundColor: "rgba(255,255,255,0.2)",
        zIndex: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: 0,
        fontSize: "150px",
        fontWeight: 800,
        letterSpacing: "2rem",
        textTransform: "uppercase",
        color: "rgba(70,123,123,0.7)",
        textShadow: "0px 8px 3px rgba(7, 47, 48, 0.6)",
      }}
    >
      <div>protected</div>
    </div>
  );
};

export default Sheild;
