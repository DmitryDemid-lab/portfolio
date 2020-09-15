import React from 'react';
import s from './Footer.module.scss'
import cs from '../common/styles/ContainerStyle/Container.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


function Footer(props) {
    return (
        <footer className={s.Footer}>
            <div className={cs.Container}>
                <div className={s.footerContent}>
                    <a href={'#'} className={s.footerLogo}>
                        <h2>Dmitry Demid</h2>
                    </a>
                    <div className={s.iconsBlock}>
                        <div className={s.refIcon}>
                            <a href="#">
                                <FontAwesomeIcon icon={faFacebook} className={s.icon}/>
                            </a>
                        </div>
                        <div className={s.refIcon}>
                            <a href="#">
                                <FontAwesomeIcon icon={faLinkedin} className={s.icon}/>
                            </a>
                        </div>
                        <div className={s.refIcon}>
                            <a href="#">
                                <FontAwesomeIcon icon={faGithub} className={s.icon}/>
                            </a>
                        </div>
                        <div className={s.refIcon}>
                            <a href="#">
                                <FontAwesomeIcon icon={faInstagram} className={s.icon}/>
                            </a>
                        </div>
                    </div>
                    <p className={s.copyright}>© 2020 beingeorge, All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;