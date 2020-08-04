import React from 'react';
import c from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={c.friendItemContainer}>
            <img className={c.friendItemImg} src={props.imgSource} alt=""/>
            <p className={c.friendItemName}>{props.name} {props.surname}</p>
        </div>
    )  
}

export default FriendItem