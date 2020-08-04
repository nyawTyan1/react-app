const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, postText: 'fssdfgsdfgsdg', likesCount: 1212}, 
        {id: 2, postText: 'hi', likesCount: 1212}, 
        {id: 3, postText: 'what is', likesCount: 1212},
    ]
};

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postMessage: postText
    }
};

const profilePageReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    stateCopy.posts = [...state.posts];
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: state.posts.length + 1,
                postText: action.postMessage,
                likesCount: 0
            };
            stateCopy.posts.push(newPost);
            return stateCopy;
        }  
        default: {
            return stateCopy;
        }
            
    }
       
}

export default profilePageReducer;