import React from 'react'
import c from './UserItem.module.css'

const UserItem = (props) => {
    debugger

    function follow() {
        props.follow(props.key)
    }

    function unfollow() {
        props.unfollow(props.key)
    }

    
   
};

export default UserItem;