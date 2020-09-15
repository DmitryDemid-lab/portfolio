import React from 'react';
import s from './MainBlock.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import avatarImg from '../../assets/images/avatar/1.jpg'

function MainBlock(props) {
    return (
        <div className={s.MainBlock}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <div className={s.welcomeText}>
                        <span>Hi There</span>
                        <h1>I am <span>Dmitry Demid</span></h1>
                        <p>A Front-End Developer.</p>
                    </div>
                    <div className={s.avatarModule}>
                        <div className={s.myPhoto}>
                            <img src={avatarImg} alt="avatar"/>
                        </div>
                        <span className={s.avatarsBack}></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainBlock;