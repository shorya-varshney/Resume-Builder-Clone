import React from 'react'
import "./Button.css";
import { useState } from 'react';

const Button = () => {

  const [btn1, setBtn1] = useState("btn1")
  const [btn2, setBtn2] = useState("btn2")

  const handleclick = () => {
    setBtn1(btn2)
    setBtn2(btn1)
  }

  return (
    <>
    <div className="btn-box">
        <button className={btn1} onClick={handleclick}><span>Create My Resume Now</span></button>
        <button className={btn2} onClick={handleclick}><span>Import Resume</span></button>
     </div>
    </>
  )
}

export default Button
