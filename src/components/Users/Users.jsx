import React from 'react'
import c from './Users.module.css'
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    return (
        <div>
            <div>
                {props.pages.map(p => <p onClick={() => { props.changeCurrentPage(p) }} className={p == props.currentPage ? c.selectedPage : c.pages} href="">{`${p} `}</p>)}
            </div>
            <div className={c.container}>
                
                { props.users.map( u => <div className={c.userItemContainer}>
                                        <NavLink to={`/profile/${u.id}`}><img src={u.photos.small != null ? u.photos.small: "https://vk.com/images/camera_400.png?ava=1"} alt="" className={c.userImg} /></NavLink>
                                        <p className={c.userStatus}> {u.status} </p>
                                        <p className={c.userFullname}>{u.name} {u.surname}</p>
                                        { u.followed ? <button onClick={() => props.unfollow(u.id)} className={c.button}>Unfollow</button> : <button onClick={() => props.follow(u.id)} className={c.button}>Follow</button> }
                                    </div>
                )}
            </div>
        </div>
    );
}

export default Users;