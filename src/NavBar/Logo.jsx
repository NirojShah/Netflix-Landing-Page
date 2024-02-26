import React from 'react'
import style from "./style.module.css"
import logo from "../Assets/Nav/Logo.png"

export const Logo = () => {
  return (
    <div id={style.logo}>
            <img src={logo} alt="" />
    </div>
  )
}

export default Logo