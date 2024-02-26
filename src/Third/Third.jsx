import React from "react";
import style from "./style.module.css";
import mobile from "../Assets/Third/mobile.jpg";
import download from "../Assets/Third/download-icon.gif";
import strange from "../Assets/Third/boxshot.png";

const Third = () => {
  return (
    <div id={style.main}>
      <div id={style.box}>
        <div id={style.mobile}>
          <img src={mobile} alt="" />
          <div id={style.download}>
            <img id={style.icn} src={strange} alt="" />
            <div>
              <p id={style.one}>Stranger Thing</p>
              <p id={style.two}>Downloading...</p>
            </div>
            <img id={style.down} src={download} alt="" />
          </div>
        </div>
        <div id={style.about}>
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
