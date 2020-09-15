import React from 'react';
import s from './Skill.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon, InlineIcon } from '@iconify/react';

function Skill(props) {
    return (
        <div className={s.Skill}>
            {props.iconType === 'fa'
            ?<FontAwesomeIcon icon={props.icon} className={s.skillLogo}/>
            :<Icon icon={props.icon} className={s.skillLogo}/>}
            {/*<img src={props.logo} alt={props.skillTitle} className={s.skillLogo}/>*/}
            <div className={s.skillInfo}>
                <h3 className={s.skillTitle}>{props.skillTitle}</h3>
                <span className={s.skillDescription}>{props.skillDescription}</span>
            </div>
        </div>
    )
};

export default Skill;