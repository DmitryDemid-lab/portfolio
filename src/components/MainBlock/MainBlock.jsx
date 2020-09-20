import React from 'react';
import s from './MainBlock.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import avatarImg from '../../assets/images/avatar/dmitry.jpg'
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesParams = {
    'particles': {
        'number': {
            'value': 100,
            'density': {
                'enable': true,
                'value_area': 1000
            }
        }
    }
}

function MainBlock(props) {
    return (
        <div className={s.MainBlock} id={'mainInfo'}>
            <Particles className={s.particles} params={particlesParams}/>
            <div className={cs.Container}>
                <div className={s.mainContent}>
                    <div className={s.welcomeText}>
                        <span>Hi There</span>
                        <h1>I am <span>Dmitry Demid</span></h1>
                        <ReactTypingEffect text={'A Frontend Developer.'} speed={150} typingDelay={100}/>
                    </div>
                    <div className={s.avatarModule}>
                        <Tilt options={{max: 25, scale: 1.05, speed: 200}}>
                            <div className={s.myPhoto}>
                                <img src={avatarImg} alt="avatar"/>
                            </div>
                            <span className={s.avatarsBack}></span>
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainBlock;