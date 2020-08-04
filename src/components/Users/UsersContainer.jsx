import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import { setUsersAcrionCreator, followActionCreator, unFollowActionCreator } from '../../redux/reducers/usersPage-reducer'

let mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        setUsers: (users) => {
            dispatch(setUsersAcrionCreator(users))
        },

        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },

        unfollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;