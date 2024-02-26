import React from 'react'
import style from "./style.module.css"
import  Logo  from './Logo'
import Menu from './Menu'

const Nav = () => {
  return (
    <div id={style.main}>
        <div id={style.nav}>
            <Logo />
            <Menu />
        </div>
    </div>
  )
}

export default Nav