import React from 'react'
import style from "./style.module.css"
import Fimage from "../Assets/First/First.jpg"
import Cbox from './Cbox'

import Nav from '../NavBar/Nav'

export const First = () => {
  return (
    <div className={style.main}>
        <Nav />
        <img src={Fimage} alt="" />
        
        <Cbox />
    </div>
  )
}

export default First