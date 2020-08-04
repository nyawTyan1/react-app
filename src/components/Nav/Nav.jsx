import React from 'react';
import c from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import FriendItem from '../FriendsPage/FriendItems/FriendItem'


const Nav = (props) => {

    return(        
        <nav>
            <NavLink className={c.link} activeClassName={c.active} to="/profile">Profile</NavLink>
            <NavLink className={c.link} activeClassName={c.active} to="/dialogs">Messages</NavLink>
            <NavLink className={c.link} activeClassName={c.active} to="/news">News</NavLink>
            <NavLink className={c.link} activeClassName={c.active} to="/music">Music</NavLink>
            <NavLink className={c.link} activeClassName={c.active} to="/users">All Users</NavLink>
            <NavLink className={c.link} activeClassName={c.active} to="/friends">Friends</NavLink>
            <div className={c.sideBarFriendsElements}>{ props.friendsSideBarElements }</div>    
        </nav>
  
    );
}


export default Nav;