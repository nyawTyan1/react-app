import React from 'react';
import c from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger
    return(
        <header>
            <img src="https://banner2.cleanpng.com/20180404/lzq/kisspng-template-logo-company-speedometer-5ac566f9861781.2270677415228863935493.jpg" />
            <div className={c.loginBlock}>
                {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;