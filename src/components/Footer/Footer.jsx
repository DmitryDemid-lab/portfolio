import React from 'react';
import s from './Footer.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";


function Footer(props) {
    return (
        <footer className={s.Footer} id={'footer'}>
            <Fade bottom cascade>
                <div className={cs.Container}>
                    <div className={s.footerContent}>
                        <a href={'#'} className={s.footerLogo}>
                            <h2>Dmitry Demid</h2>
                        </a>
                        <Slide left cascade>
                        <div className={s.iconsBlock}>
                            <div className={s.refIcon}>
                                <a href="https://www.facebook.com/dmitry.demid.3">
                                    <FontAwesomeIcon icon={faFacebook} className={s.icon}/>
                                </a>
                            </div>
                            <div className={s.refIcon}>
                                <a href="https://www.linkedin.com/in/dmitry-demid/">
                                    <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                                </a>
                            </div>
                            <div className={s.refIcon}>
                                <a href="https://github.com/DmitryDemid-lab">
                                    <FontAwesomeIcon icon={faGithub} className={s.icon}/>
                                </a>
                            </div>
                            <div className={s.refIcon}>
                                <a href="https://www.instagram.com/demid.dima/">
                                    <FontAwesomeIcon icon={faInstagram} className={s.icon}/>
                                </a>
                            </div>
                        </div>
                        </Slide>
                        <p className={s.copyright}>© 2021 Dmitry Demid, All Rights Reserved.</p>
                    </div>
                </div>
            </Fade>
        </footer>
    )
};

export default Footer;