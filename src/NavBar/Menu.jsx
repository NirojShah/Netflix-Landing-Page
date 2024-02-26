import React from 'react'
import style from "./style.module.css"
import { AiOutlineGlobal } from "react-icons/ai";

export const Menu = () => {
  return (
    <div id={style.menu}>
        <AiOutlineGlobal id={style.globe}/>
        <select name="" id="">
            <option value="">English </option>
            <option value="">हिंदी</option>
        </select>
        <a href="#"><button>Sign in</button></a>
    </div>
  )
}


export default Menu