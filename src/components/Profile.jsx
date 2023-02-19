import React from "react"

export default function Profile ({image,title,name,newState}) {
    return(
        <div className="profile">
            <img className="photo" src={image} alt="" />
            {newState === true ? <p>new</p> : ""}
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    )
}