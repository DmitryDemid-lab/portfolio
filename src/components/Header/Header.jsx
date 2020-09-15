import React from 'react';
import s from './Header.module.scss'
import Nav from "../Nav/Nav";

function Header(props) {
    return (
        <div className={s.Header}>
            <Nav/>
        </div>
    )
};

export default Header;