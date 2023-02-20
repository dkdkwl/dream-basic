import React from 'react'

export default function Avatar({image,newState}) {
  return (
    <div>
        <img className="photo" src={image} alt="" />
        {newState && <p>new</p>}
    </div>
  )
}