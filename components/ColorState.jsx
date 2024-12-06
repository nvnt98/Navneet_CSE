import React, { useState } from 'react'
function ColorState(){
    const [color,setColor]=useState("Black");
    return (

    <div>
        <div style={{ color: color, padding: "20px", textAlign: "center" }}>
            My favourite color is {color}
            </div>
      <button onClick={()=>{
        setColor("Blue");
        
        
      }}>Blue</button>
      <button onClick={()=>{
        setColor("Red")

        
      }}>Red</button>
      <button onClick={()=>{
        setColor("Pink");
        
      }}>Pink</button>
      <button onClick={()=>{
        setColor("Green");
        
      }}>Green</button>
    </div>
  )
}
export default ColorState