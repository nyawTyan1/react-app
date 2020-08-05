import React from 'react';
import ProfilePage from './ProfilePage';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileData } from '../../redux/reducers/profilePage-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
    let userID = this.props.match.params.uID;
    if (!userID) {
        userID = this.props.currentUserId
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
        this.props.setUserProfileData(response.data);
        }
        )
    }

    render() {
        return (
            <ProfilePage {...this.props} />
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profileData: state.profilePage.profileData,
        currentUserId: state.auth.data.userId
    }
}

let UrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfileData
})(UrlDataComponent);