import React from 'react';
import FriendItem from '../FriendsPage/FriendItems/FriendItem'
import { connect } from 'react-redux'
import Nav from './Nav';

const mapStateToProps = (state) => {
    return {
        friendsSideBarElements: state.friendsPage.friendItems.map( friend => friend.id >= state.friendsPage.friendItems.length - 2 ? <FriendItem  imgSource={friend.img} name={friend.name} /> : false )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)


export default NavContainer;