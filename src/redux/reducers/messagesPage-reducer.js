const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'user1'}, 
        {id: 2, name: 'user2'}, 
        {id: 3, name: 'user3'}, 
        {id: 4, name: 'user4'},
    ],

    messages: [
        {id: 1, message: 'hi'}, 
        {id: 2, message: 'yo'}, 
        {id: 3, message: 'how are'}, 
        {id: 4, message: 'hint'},
    ]
};

export const addMessageActionCreator = (messageText) => {
    return {
        type: ADD_MESSAGE,
        message: messageText
    }
};

const dialogsPageReducer = (state = initialState, action) => {
    let stateCopy = {...state}
    stateCopy.messages = [...state.messages];
    switch (action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: action.message
            }       
            stateCopy.messages.push(newMessage);  
            return stateCopy;
        default:
            return stateCopy;
    }
    
}

export default dialogsPageReducer;