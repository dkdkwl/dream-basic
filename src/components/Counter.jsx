import React, { useState } from 'react'


export default function Counter({total,onClick}) {
    const [number,setCount] = useState(0);
  return (
    <div className='counter'>
        <span className='number'>{number}/{total}</span>
        <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  )
}
