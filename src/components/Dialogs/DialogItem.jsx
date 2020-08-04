import React from 'react';
import c from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={c.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`}>{props.userName}</NavLink>
        </div>
    )
};

export default DialogItem;