import profilePageReducer from "./reducers/profilePage-reducer";
import dialogsPageReducer from './reducers/messagesPage-reducer'




let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postText: 'fssdfgsdfgsdg', likesCount: 1212}, 
                {id: 2, postText: 'hi', likesCount: 1212}, 
                {id: 3, postText: 'what is', likesCount: 1212},
            ],
        },
        
        messagesPage: {
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
        },
    
        friendsPage: {
            friendItems: [
                {id: 1, img: "https://i.pinimg.com/236x/21/03/f3/2103f3747405e483b2ea4190bf42677e.jpg", name:"Sasha"}, 
                {id: 2, img: "https://sevelina.ru/images/uploads/2012/07/d78a229a1ec906d94b81dac1fd097f00_large.jpg", name:"Dima"}, 
                {id: 3, img: "https://shutniki.club/wp-content/uploads/2019/12/v1-babay29.png", name:"John"}, 
                {id: 4, img: "https://sun9-38.userapi.com/c625322/v625322554/5502/Z9FCBeQ2ZmA.jpg", name:"Lesha"}
            ]
        }
    },

    getState(){
        return this._state;
    },

    renderEntireTree () {
        console.log("sdfg")
    },

    subscribe (observer) {
        this.renderEntireTree = observer;
    },

    dispatch (action) {
        debugger;
        if (action.type == 'ADD-POST') {
            profilePageReducer(this._state.profilePage.posts, action)
        } else {
            dialogsPageReducer(this._state.messagesPage.messages, action)
        }
        this.renderEntireTree(store);
        
    }
};

export default store;