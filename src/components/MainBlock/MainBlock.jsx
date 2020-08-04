import React from 'react';
import s from './MainBlock.module.css'
import cs from '../common/styles/ContainerStyle/Container.module.css'

function MainBlock(props) {
    return (
        <div className={s.MainBlock}>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <div className={s.welcomeText}>
                        <span>Hey Yo</span>
                        <h1>I am Dmitry Demid</h1>
                        <p>A FRONT-END DEVELOPER.</p>
                    </div>
                    <div className={s.myPhoto}></div>
                </div>
            </div>
        </div>
    )
};

export default MainBlock;