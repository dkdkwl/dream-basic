import Counter from "./components/Counter";

import React, { useState } from 'react'

export default function AppCounter() {
    const [totalNumber,setTotalNumber] = useState(0);
    const handleClick = ()=> setTotalNumber((prev)=> prev +1);
  return (
    <div>
        total : {totalNumber}
        <Counter total={totalNumber} onClick={handleClick}></Counter>
        <Counter total={totalNumber} onClick={handleClick}></Counter>
    </div>
  )
}
