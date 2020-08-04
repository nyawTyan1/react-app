import React from 'react';
import c from './Friends.module.css'
import FriendItem from './FriendItems/FriendItem'

const Friends = (props) => {

    return (
        <div className={c.friendsContainer}>
            { props.friendElements }
        </div>
    )
}

export default Friends