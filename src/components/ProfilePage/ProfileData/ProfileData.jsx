import React from 'react';
import c from './../ProfilePage.module.css'
import Preloader from '../../Common/Preloader';

const ProfileData = (props) => {
    if (!props.data.photos) {
        return <Preloader />
    } else {
        return (
            <div>
                <div className={c.profileContainer}>
                    <div className="profileImage"><img className={c.profimg} src={props.data.photos.large ? props.data.photos.large : "https://vk.com/images/camera_400.png?ava=1"}></img></div>
                    <div className={c.profileData}>
                        <span className={c.profileName}>{props.data.fullName}</span>
                        <span>About Me: {props.data.aboutMe} </span>
                        <p>Contacts:</p>
                        {props.data.contacts.facebook ? <li>Facebook: {props.data.contacts.facebook} </li> : null}
                        {props.data.contacts.website ? <li>Website: {props.data.contacts.website} </li> : null}
                        {props.data.contacts.vk ? <li>Vk: {props.data.contacts.vk} </li> : null}
                        {props.data.contacts.twitter ? <li>Twitter: {props.data.contacts.twitter} </li> : null}
                        {props.data.contacts.instagram ? <li>Instagram: {props.data.contacts.instagram} </li> : null}
                        {props.data.contacts.youtube ? <li>Youtube: {props.data.contacts.youtube} </li> : null}
                        {props.data.contacts.github ? <li>Github: {props.data.contacts.github} </li> : null}
                        {props.data.contacts.mainLink ? <li>Main Link: {props.data.contacts.mainLink} </li> : null}
                    </div>
                </div>
            </div>
        )
    }

    
};

export default ProfileData;