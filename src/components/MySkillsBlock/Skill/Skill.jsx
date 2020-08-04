import React from 'react';
import s from './Skill.module.css'

function Skill(props) {
    return (
        <div className={s.Skill}>
            <img src={props.logo} alt={props.skillTitle} className={s.skillLogo}/>
            <h3 className={s.skillTitle}>{props.skillTitle}</h3>
            <span className={s.skillDescription}>{props.skillDescription}</span>
        </div>
    )
};

export default Skill;