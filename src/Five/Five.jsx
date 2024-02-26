import React from 'react'
import style from "./style.module.css"
import child from "../Assets/Five/child.png"

const Five = () => {
  return (
    <div id={style.main}>
      <div id={style.box}>
        <div id={style.child}>
          <img src={child} alt="" />
          </div>
        <div id={style.about}>
          <h1>Create profiles for kids</h1>
          <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>
      </div>
      </div>
  )
}

export default Five