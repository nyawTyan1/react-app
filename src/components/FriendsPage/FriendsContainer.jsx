import React from 'react';
import c from './Friends.module.css'
import FriendItem from './FriendItems/FriendItem'
import Friends from './Friends';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        friendElements: state.friendsPage.friendItems.map( friend => <FriendItem  imgSource={friend.img} name={friend.name} surname={friend.surname} /> )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;