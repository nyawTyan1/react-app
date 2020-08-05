import React from 'react';
import c from './ProfilePage.module.css'
import MyPostsContainer from './MyPosts/Posts/MyPostsContainer';
import Post from './MyPosts/Posts/Post/Post'
import ProfileData from './ProfileData/ProfileData';

const ProfilePage = (props) => {
    return (
        <div className={c.content}>
                <ProfileData data={props.profileData} />
    
                <MyPostsContainer />
        </div>
    )
    
};

export default ProfilePage;