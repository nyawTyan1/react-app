import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator } from '../../../../redux/reducers/profilePage-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        elements: state.profilePage.posts.map( post => <Post likes={post.likesCount} message={post.postText} id={post.id} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: (text) => {
            dispatch(addPostActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;