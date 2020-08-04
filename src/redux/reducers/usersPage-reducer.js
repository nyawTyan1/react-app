const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    debugger
    
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

        case "SET-USERS": {
            debugger
            return {...state, users: [...state.users, ...action.users]}
        }

        default: {
            return state;
        }
            
    }
    
};

export const followActionCreator = (userId) => {
    debugger
    return {
        type: FOLLOW,
        userId: userId
    }
}

export const unFollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId
    }
}

export const setUsersAcrionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;