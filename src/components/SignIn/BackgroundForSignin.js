import React from "react";
import "./styles.css";
import Muchan from "../Muchan";

const BackgroundForSignin = () => {
  return (
    <div>
      <div className="Bg">
        <div className="odai">お題</div>
        <div className="hanashichu">
          <div className="child">
            <Muchan />
            話中のお題
          </div>
        </div>
        <div className="owari">話し終えたお題</div>
        <div className="mibunrui">未分類</div>
      </div>
    </div>
  );
};

export default BackgroundForSignin;
