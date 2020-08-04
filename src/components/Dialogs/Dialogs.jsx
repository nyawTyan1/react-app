import React from 'react';
import c from './Dialogs.module.css';

const Dialogs = (props) => {
    let newMessageElement = React.createRef();
    
    let addMessage = () => {
        let newText = newMessageElement.current.value;
        props.addNewMessage(newText)
        newMessageElement.current.value = '';
    }

    return (
        <div className={c.content}>
            <div className={c.dialogItems}>
                <div className={c.dialogTitle}>
                    Dialogs
                </div>
                { props.dialogsElements }
                
            </div>
            <div className={ c.messagesItems }>
                <div className={ c.messagesTitle }>Messages</div>
                { props.messagesElements }
                <div className={ c.messageAdd }>
                    <input ref={ newMessageElement } type="text" name="" id=""/>
                    <button onClick={addMessage}>Send message</button>
                </div>
            </div>

        

        </div>
    )
};

export default Dialogs;