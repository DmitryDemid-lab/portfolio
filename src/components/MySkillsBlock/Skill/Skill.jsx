import React from 'react';
import s from './Skill.module.scss'

function Skill(props) {
    return (
        <div className={s.Skill}>
            <img src={props.logo} alt={props.skillTitle} className={s.skillLogo}/>
            <div className={s.skillInfo}>
                <h3 className={s.skillTitle}>{props.skillTitle}</h3>
                <span className={s.skillDescription}>{props.skillDescription}</span>
            </div>
        </div>
    )
};

export default Skill;