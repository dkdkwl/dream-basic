import React from "react"
import Avatar from "./Avatar"

export default function Profile ({image,title,name,newState}) {
    return(
        <div className="profile">
            <Avatar image={image} newState={newState}></Avatar>
            <h1>{title}</h1>
            <p>{name}</p>
        </div>
    )
}