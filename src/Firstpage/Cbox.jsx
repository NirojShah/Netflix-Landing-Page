import React from 'react'
import style from "./style.module.css"

const Cbox = () => {
  return (
    <div id={style.box}>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div id={style.inp}>
            <input type="text" placeholder='Email Address'/>
            <a><button>Get Started </button></a>
        </div>
    </div>
  )
}

export default Cbox