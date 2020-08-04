import React from 'react';
import c from './MyPosts.module.css';

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addNewPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={c.myPosts}>
            <div className={c.newPost}>
                <p className={c.newPostText}>New Post</p>
                <div className={c.newPostAdmin}>
                    <input ref={newPostElement} className={c.newPostInput} type="text" name="" id=""/>
                    <button onClick={ addPost } className={c.newPostButton}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                { props.elements }
            </div>
        </div>
    )
};

export default MyPosts;