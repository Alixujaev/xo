import React from 'react'
import iks from "../assets/close.png"
import zero from "../assets/Ellipse 1.png"

const Card = ({val, chooseCard}) => {
  return (
    <div onClick={chooseCard} className="card">{val === "X" ? <img src={iks} alt="iks"/> : val === "0" ? <img src={zero} alt="zero"/> : val}</div>
  )
}

export default Card