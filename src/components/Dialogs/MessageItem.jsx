import React from 'react';
import c from './Dialogs.module.css';

const MessageItem = (props) => {
    return (
        <div className={c.messageItem}>{props.messageText}</div>
    )
};

export default MessageItem;