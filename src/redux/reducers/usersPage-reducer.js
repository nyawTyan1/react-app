const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const LOADED = 'LOADED'

let initialState = {
    users: [],
    totalCount: 0, 
    pageSize: 100,
    currentPage: 1,
    isLoaded: true
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {...state, users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                } else {
                    return u;
                }
            })}
        }

        case UNFOLLOW: {
            return {...state, users: state.users.map( u => {
                if (u.id === action.userId) {
                    return {...u, followed: false}
                } else {
                    return u;
                }
                
            })}
        }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }

        case LOADED: {
            return {...state, isLoaded: action.isLoade}
        }

        default: {
            return state;
        }
            
    }
    
};

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const setCurrentPage = (newCurrentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: newCurrentPage
    }
}

export const setTotalCount = (newValue) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount: newValue
    }
}

export const loadPage = (isloaded) => {
    return {
        type: LOADED,
        isLoaded: isloaded
    }
}

export default usersReducer;