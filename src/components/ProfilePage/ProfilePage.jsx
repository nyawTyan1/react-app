import React from 'react';
import c from './ProfilePage.module.css'
import MyPostsContainer from './MyPosts/Posts/MyPostsContainer';
import Post from './MyPosts/Posts/Post/Post'

const ProfileData = (props) => {
    return (
        <div>
            <div><img className={c.profbg} src="https://i.redd.it/qnh4bu6cva901.jpg"></img></div>
            <div className={c.profileContainer}>
                <div className="profileImage"><img className={c.profimg} src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/27/ava2.jpg"></img></div>

                <div className={c.profileData}>
                    <span className={c.profileName}>{props.name}</span>
                        
                    <p>Date of birth: {props.dateOfBirth}</p>
                    <p>City: {props.city}</p>
                    <p>Phone: {props.phone}</p>
                </div>
            </div>
        </div>
    )
}

const ProfilePage = (props) => {
    

    return(
        <div className={c.content}>
            <ProfileData name='Dmitry B.' dateOfBirth='1st June' city='Moscow' phone='...'/>

            <MyPostsContainer />
        </div>
    );
};

export default ProfilePage;