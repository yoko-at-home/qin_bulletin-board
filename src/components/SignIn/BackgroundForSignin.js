import React from "react";
import "./styles.css";
import Muchan from "../Muchan";

const BackgroundForSignin = () => {
  return (
    <div>
      <div className="Bg">
        <div className="odai">お題候補</div>
        <div className="hanashichu">
          <div className="child">
            <Muchan />
            話中のお題
          </div>
        </div>
        <div className="owari">話し終えたお題</div>
        <div className="mibunrui">
          <div className="mibunrui_title">未分類</div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundForSignin;
