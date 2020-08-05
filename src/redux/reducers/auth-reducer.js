const SET_DATA = 'SET-DATA'

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    isAuth: false,
    loaded: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA: {
            return {...state, data: {...action.data}, isAuth: true}
        }

        default: {
            return state
        }
    }
        
}

export const setData = (userId, email, login) => {
    return {
        type: SET_DATA,
        data: { userId, email, login }
    }
   
}

export default authReducer