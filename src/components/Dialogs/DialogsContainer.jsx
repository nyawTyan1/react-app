import React from 'react';
import c from './Dialogs.module.css';
import DialogItem from './DialogItem'
import MessageItem from './MessageItem'
import { addMessageActionCreator } from '../../redux/reducers/messagesPage-reducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux'



let mapStateToProps = (state) => {
    return {
        dialogsElements: state.messagesPage.dialogs.map( dialog => (<DialogItem id={dialog.id} userName={dialog.name} />)),
        messagesElements: state.messagesPage.messages.map( message => <MessageItem messageText={message.message} /> )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;