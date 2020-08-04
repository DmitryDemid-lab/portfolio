import React from 'react';
import s from './Project.module.css'

function Project(props) {
    return (
        <div className={s.Skill}>
            <img src={props.logo} alt={props.projectTitle} className={s.projectLogo}/>
            <button className={s.showBtn}>Show</button>
            <h3 className={s.projecTitle}>{props.projectTitle}</h3>
            <span className={s.projecDescription}>{props.projectDescription}</span>
        </div>
    )
};

export default Project;