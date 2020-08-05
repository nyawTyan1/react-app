import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setData } from '../../redux/reducers/auth-reducer'

class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", { withCredentials: true }).then(response => {
            if (response.data.resultCode == 0) {
                this.props.setData(response.data.data.id, response.data.data.email, response.data.data.login)
                debugger
            }
        })

    }
    render(){
        return <Header {...this.props} />
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    }
}

export default connect(mapStateToProps, {setData})(HeaderContainer);