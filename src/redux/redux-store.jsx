import profilePageReducer from "./reducers/profilePage-reducer";
import dialogsPageReducer from './reducers/messagesPage-reducer';
import friendsPageReducer from "./reducers/friendsPage-reducer";
import usersReducer from "./reducers/usersPage-reducer";
const { createStore, combineReducers } = require("redux");


let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: dialogsPageReducer,
    friendsPage: friendsPageReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.state = store.getState()
window.stateCopy = {...store.getState()}

export default store;