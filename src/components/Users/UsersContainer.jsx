import React from 'react'
import { connect } from 'react-redux'
import { setUsers, follow, unFollow, setCurrentPage, setTotalCount, loadPage } from '../../redux/reducers/usersPage-reducer'
import * as axios from 'axios'
import Users from './Users';
import Preloader from '../Common/Preloader';


class UsersApiContainer extends React.Component {
    componentDidMount(){
        this.props.loadPage(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
            this.props.loadPage(false)
        });
    }

    changeCurrentPage = number => {
        this.props.setCurrentPage(number);
        this.props.loadPage(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.loadPage(false)
        });
    }

    render () { 
                    let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)

                    let pages = [];
                    for (let i = 1; i <= pagesCount; i++) {
                        pages.push(i)
                    }
                    return <>
                                {this.props.isLoaded ? <Preloader /> : <Users changeCurrentPage={this.changeCurrentPage} pages={pages} users={this.props.users} currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow} />}               
                            </>           
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isLoaded: state.usersPage.isLoaded
    }
}

const UsersContainer = connect(mapStateToProps, { 
    setUsers, follow, 
    unFollow, setCurrentPage,  
    setTotalCount, loadPage 
    })(UsersApiContainer);


export default UsersContainer;