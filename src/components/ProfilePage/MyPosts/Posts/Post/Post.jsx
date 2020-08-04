import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.postContainer}>
            <div className={c.items}>
                <p className={c.item}>{props.message}</p>
                <p className={c.like}>like! {props.likes}</p>
            </div>
        </div>
    )
};

export default Post;