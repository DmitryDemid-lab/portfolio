import React from 'react';
import s from './Nav.module.scss'
import {Link, animateScroll as scroll} from "react-scroll";

function Nav(props) {
    return (
        <div className={s.Nav}>
            <Link to="mainInfo" activeClass={s.active} spy={true}
                  smooth={true} offset={-50} duration={500}>Main</Link>
            <Link to="mySkillsBlock" activeClass={s.active} spy={true}
                  smooth={true} offset={-50} duration={500}>Skills</Link>
            <Link to="myProjects" activeClass={s.active} spy={true} smooth={true}
                  offset={-50} duration={500}>Projects</Link>
            <Link to="resume" activeClass={s.active} spy={true} smooth={true}
                  offset={-50} duration={500}>Resume</Link>
            <Link to="contactsForm" activeClass={s.active} spy={true}
                  smooth={true} offset={0} duration={500}>Contacts</Link>
        </div>
    )
};

export default Nav;