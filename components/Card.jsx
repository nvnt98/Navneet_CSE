import React from 'react'
import pic from "./images/n.png"
import "./Card.css"


function Card(props) {
  return (
    <div className='card'>
        <h2>{props.name}</h2>
        <img src={props.img} alt='My Image'></img> 
        <h2>{props.roll}</h2>
    </div>
  )
}

export default Card