import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  const [appXY,setAppXY] = useState([]);
  const onMouseMove = (e)=>{
    console.log(e);
    setAppXY([e.clientX,e.clientY])
    console.log(appXY)
  }
  return (
    <div className='container' onMouseMove = {(e)=>{
      onMouseMove(e);
    }}>
      <div className='pointer' style={{left:appXY[0],top:appXY[1]}} />
    </div>
  );
}
