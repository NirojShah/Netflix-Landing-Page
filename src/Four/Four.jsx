import React from 'react'
import style from "./style.module.css"
import video from "../Assets/Four/video.m4v"
import device from "../Assets/Four/device-pile-in.png"

const Four = () => {
  return (
    <div id={style.main}>
        <div id={style.box}>
            <div id={style.about}>
                <h1>Watch everywhere</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div id={style.tv}>
                <video src={video} autoPlay loop={50}></video>
                <img src={device} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Four