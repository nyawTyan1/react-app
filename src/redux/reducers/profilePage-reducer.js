const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE_DATA = 'SET-USER-PROFILE-DATA'

let initialState = {
    posts: [
        {id: 1, postText: 'fssdfgsdfgsdg', likesCount: 1212}, 
        {id: 2, postText: 'hi', likesCount: 1212}, 
        {id: 3, postText: 'what is', likesCount: 1212},
    ],

    profileData: {}
};

const profilePageReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    stateCopy.posts = [...state.posts];
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                postText: action.postMessage,
                likesCount: 0
            };
            stateCopy.posts.push(newPost);
            return stateCopy;
        }

        case SET_USER_PROFILE_DATA: {
            return {...state, profileData: action.profileData}
        }

        default: {
            return stateCopy;
        }
            
    }
       
}

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postMessage: postText
    }
};

export const setUserProfileData = (newData) => {
    return {
        type: SET_USER_PROFILE_DATA,
        profileData: newData
    }
}

export default profilePageReducer;