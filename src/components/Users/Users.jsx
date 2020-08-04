import React from 'react'
import c from './Users.module.css'
import * as axios from 'axios'

const Users = (props) => {

    if (props.users.length == 0){
        let usersQuery = axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => props.setUsers(response.data.items));
    }
    let usersElements = props.users.map( u => <div className={c.userItemContainer}>
                                                <img src={u.photos.small != null ? u.photos.small: "https://vk.com/images/camera_400.png?ava=1"} alt="" className={c.userImg} />
                                    <p className={c.userStatus}> {u.status} </p>
                                    <p className={c.userFullname}>{u.name} {u.surname}</p>
                                    { u.followed ? <button onClick={() => props.unfollow(u.id)} className={c.button}>Unfollow</button> : <button onClick={() => props.follow(u.id)} className={c.button}>Follow</button> }
                                
                        
                                </div>
    );
    return (
        <div className={c.container}>
            { usersElements }
        </div>
       
    )
};

export default Users;

// <UserItem unfollow={props.unfollow} follow={props.follow} uid={u.id} name={u.name} surname={u.surname} status={u.status} isFollowed={u.isFollowed} imgSrc={u.img} city={u.city} />