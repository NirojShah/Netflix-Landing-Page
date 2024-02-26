import React from 'react'
import style from "./style.module.css"
import tv from "../Assets/Second/tv.png"
import video from "../Assets/Second/video-tv.m4v"

export const Second = () => {
  return (
    <div id={style.main}>
        <div id={style.box}>
            <div id={style.about}>
                <h1>Enjoy on your TV</h1>
                <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div id={style.tv}>
                <video src={video} autoPlay loop={50}></video>
                <img src={tv} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Second